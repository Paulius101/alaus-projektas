export class Alus {
  public constructor(
    public id: number = 0,
    public attribute = "",
    public name: string = "",
    public description: string = "",
    public image_url: string = '',
    public food_pairing: string[],
    public abv: number = 6,
    public ph: number = 5
   ) {}
}
