class StatusBarCoin extends DrawableObject {
  IMAGES_COIN = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = 10;
    this.y = 40;
    this.width = 180;
    this.height = 50;
    this.setCoins(0);
  }

  /**
   * Sets the number of coins and updates the image accordingly.
   * @param {number} coinNumber - The number of coins to set.
   */
  setCoins(coinNumber) {
    if (coinNumber > 0) {
      this.playCoinSound();
    }
    this.coinNumber = coinNumber;
    let path = this.IMAGES_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the image index based on the current number of coins.
   * @returns {number} The index of the image corresponding to the current number of coins.
   */
  resolveImageIndex() {
    if (this.coinNumber == 0) {
      return 0;
    } else if (this.coinNumber == 1) {
      return 1;
    } else if (this.coinNumber == 2) {
      return 2;
    } else if (this.coinNumber == 3) {
      return 3;
    } else if (this.coinNumber == 4) {
      return 4;
    } else {
      return 5;
    }
  }

  /**
   * Plays the coin sound and resumes background music after a short delay.
   */
  playCoinSound() {
    coinSound.play();
    setTimeout(() => {
      coinSound.pause();
    }, 300);
    setTimeout(() => {
      music.play();
    }, 301);
  }
}
