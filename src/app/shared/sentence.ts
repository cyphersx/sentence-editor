/**
 * This is the data-model of a sentence, which is broken
 * down in it's elements as properties.
 */
export class Sentence {
  constructor(
    public n: number,
    public subject: string = "",
    public verb: string = "",
    public obj: string = "") { }

  public getSentence(): string {
    return (
      this.subject + " " + 
      this.verb + " " + 
      this.obj).trim() + ".";
  }

  public isComplete(): boolean {
    return this.subject != "" &&
            this.verb   != "" &&
            this.obj    != ""
  }
}