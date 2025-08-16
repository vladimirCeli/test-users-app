import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storage';

export class UserService {
  static async getUsers() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  }

  static async saveUsers(users) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      return true;
    } catch (error) {
      return false;
    }
  }

  static async addUser(user) {
    try {
      const users = await this.getUsers();
      const newUser = { ...user, id: Date.now().toString() };
      const updatedUsers = [...users, newUser];
      await this.saveUsers(updatedUsers);
      return newUser;
    } catch (error) {
      return null;
    }
  }

  static async updateUser(userId, updatedUser) {
    try {
      const users = await this.getUsers();
      const updatedUsers = users.map(user => 
        user.id === userId ? { ...user, ...updatedUser } : user
      );
      await this.saveUsers(updatedUsers);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async deleteUser(userId) {
    try {
      const users = await this.getUsers();
      const updatedUsers = users.filter(user => user.id !== userId);
      await this.saveUsers(updatedUsers);
      return true;
    } catch (error) {
      return false;
    }
  }


}
