class ThrowableObject extends MoveableObject {
  splash = false;
  movingInterval;
  rotationInterval;
  splashInterval;
  bottle = [];

  IMAGES_ROTATION = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(x, y) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.IMAGES_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.throw(x, y);
  }

  /**
   * Throws the object with given coordinates.
   * @param {number} x - The x-coordinate to throw the object to.
   * @param {number} y - The y-coordinate to throw the object to.
   */
  throw(x, y) {
    this.speedY = 20;
    this.applyGravity();
    this.movingInterval = setInterval(() => {
      this.x += 18;
    }, 25);
    this.rotationInterval = setInterval(() => {
      if (!this.splash) {
        this.playAnimation(this.IMAGES_ROTATION);
      }
    }, 1000 / 120);
  }

  /**
   * Plays the splash animation when the object hits water.
   */
  playSplash() {
    splashSound.play();
    this.speedY = -38;
    clearInterval(this.rotationInterval);
    clearInterval(this.movingInterval);
    this.splashInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_SPLASH);
    }, 1000 / 60);
    setTimeout(() => {
      clearInterval(this.splashInterval);
    }, this.IMAGES_SPLASH.length * 20);
  }
}
