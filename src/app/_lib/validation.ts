// Domain validation (syntax only, no network lookups)
export const domainRegex = /^(?=.{1,253}$)(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/

export function isValidDomain(domain: string): boolean {
  return domainRegex.test(domain)
}

