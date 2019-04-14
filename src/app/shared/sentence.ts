/**
 * This is the data-model of a sentence, which is broken
 * down in it's elements as properties.
 */
export class Sentence {
  sentence: string;

  constructor(
    private n: number,
    private s: string = "",
    private v: string = "",
    private o: string = "") {
      // Concat elements for sentence.
      this.sentence = s + " " + v + " " + o;
    }

  public getSubject(): string {
    return this.s;
  }
  public getVerb(): string {
    return this.v;
  }
  public getObject(): string {
    return this.o;
  }
  public getSentence(): string {
    return this.sentence.trim() + ".";
  }
}