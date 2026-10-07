export function ValidaParametro(req, res, next) {
  const numero = parseInt(req.params.id);

  if (isNaN(numero)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro deve ser um numero valido" });
  }
  next(); // id ok, segue para o controller
}