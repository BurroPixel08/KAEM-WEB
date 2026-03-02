export const useCart = () => {
  const phone = "584121429719"; // Tu número aquí

  const buyProduct = (productName) => {
    const message = encodeURIComponent(
      `¡Hola KAEM! Me interesa comprar: ${productName}. ¿Está disponible?`
    );
    window.open(`https://wa.me/+${phone}?text=${message}`, '_blank');
  };

  return {
    buyProduct
  };
};