export class TarifRegistration {
  constructor(
    public type: number,
    public email?: string,
    public password?: string,
    public name?:  string,
    public ic?: string,
    public dic?: string,
    public phone?: string,
    public street?: string,
    public city?: string,
    public psc?: string,
    public country?: string
  ){}
}
