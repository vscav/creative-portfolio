const normalize = (val, max, min) => {
  return (val - min) / (max - min);
};

export default normalize;
