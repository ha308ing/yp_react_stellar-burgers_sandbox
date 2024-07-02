export class Player {
  model: string = "";
  private settings: string = "";

  constructor() {}

  protected soundCheck() {}

  public play() {}

  pause() {}
}

export class VynilPlayer extends Player {
  changeDisk() {
    this.soundCheck();
  }
}
