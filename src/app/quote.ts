export class Quote {
    public showDescription: boolean;
    constructor(
      public id: number,
      public description: string,
      public name: string,
      public submitter: string,
      public initialVote: number,
      public finalVote: number,
      public completeDate: Date) {
      this.showDescription = false;
    }
}
