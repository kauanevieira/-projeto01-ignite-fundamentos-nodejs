export function buildRoutePath(path){
  const routeParametersRegex = /:([a-zA-Z]+)/g //identifica o padrão dos parâmetros
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)') //troca os valores

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`) //cria um novo parâmetro e buscar as query

  return pathRegex

}

