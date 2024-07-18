/* eslint-disable react/prop-types */
// Custom Carousel Component //

import { memo, useEffect, useRef, useState } from "react";
import anime from "animejs";
import classNames from "classnames";

export default memo(function Custom_Carousel({
  children,
  animationDuration = 5000,
  animationEasing = "linear",
  wrapperClass = "",
  trackClass = "",
  itemClass = "",
}) {
  // props
  const trackClassC = trackClass.split(" ").join(" ");
  const itemClassC = itemClass
    .split(" ")
    .map((c) => `*:${c}`)
    .join(" ");
  const wrapperClassC = wrapperClass.split(" ").join(" ");

  const wrapper = useRef(null);
  const track = useRef(null);

  const [cloned, setCloned] = useState(false);
  const [totalItems, setTotalItems] = useState({
    total: 0,
    items: [],
    itemWidth: 0,
  });

  useEffect(() => {
    const items = document.querySelectorAll("#wrapper .item");
    setTotalItems({
      total: items.length,
      items: items,
      itemWidth: items[0].clientWidth,
    });
  }, []);

  useEffect(() => {
    if (!cloned) {
      const images = Array.from(track.current.children);

      // Duplicate images for infinite effect
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        track.current.appendChild(clone);
      });
      setCloned(true);
    }

    // Animation of Carousel
    anime({
      targets: track.current,
      translateX: {
        value: -totalItems.itemWidth * totalItems.total,
        duration: animationDuration,
      },
      easing: animationEasing,
      loop: true,
    });
  }, [totalItems, cloned, animationDuration, animationEasing]);

  const trackclassnames = classNames(
    `flex flex-row *:flex *:flex-col xss:*:has-[img]:first:size-[16vh] sm:*:has-[img]:first:size-[15vh] md:*:has-[img]:first:size-[15vw] lg:*:has-[img]:first:size-[15vw] xl:*:has-[img]:first:size-[10vw]`,
    itemClassC,
    trackClassC,
  );

  return (
    <div
      className={`flex overflow-hidden ${wrapperClassC}`}
      id="wrapper"
      ref={wrapper}
    >
      <div className={`${trackclassnames}`} id="track" ref={track}>
        {children}
      </div>
    </div>
  );
});
