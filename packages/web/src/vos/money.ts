export class Money {
  private value = 0

  public constructor(value: number) {
    this.value = value
  }

  // @todo could receive the currency as a parameter, but for now it's not necessary since we only use ARS
  public static build(value: number): Money {
    return new Money(value)
  }

  public getValue() {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })

    return formatter.format(this.value).slice(4)
  }
}
