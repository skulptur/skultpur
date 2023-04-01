import { tween, bounceInOut } from "kween";

tween({
  duration: 1000, // in milliseconds
  ease: bounceInOut,
  onUpdate: (value, progress) => {
    // value is eased, progress is linear
    console.log(value, progress);
  },
});
