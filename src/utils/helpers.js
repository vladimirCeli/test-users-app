export const formatName = (firstName, lastName) => {
  return `${firstName} ${lastName}`.trim();
};

export const validateUser = (user) => {
  const errors = [];
  
  if (!user.firstName?.trim()) {
    errors.push('El nombre es requerido');
  }
  
  if (!user.lastName?.trim()) {
    errors.push('El apellido es requerido');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};


