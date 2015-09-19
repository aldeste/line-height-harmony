# line-height-harmony
Algorithm generating line-heights based on a harmonic ratio for SCSS

The function requires two values on use; `font-size` and `width`.
The `font-size` is the font-size we're applying the algorithm to.
The `width` is the width of the text area. In a real world scenario this isn't always a known factor, so I've found that setting it to the breakpoint width or container width creates a great uniform rythm.
```
.awesome-o {
    line-height: line-height-harmony(1em, 550px);
}

/* .awesome-o output */

.awesome-o {
    line-height: 1.56261;
}
```

Supported units are PX, EM, REM and blank.

## Configure
We assume you're using the golden ratio your harmonic rythm and a 16px root font size.

To change the options, all you have to do is to change the values in the `$line-height-harmony-settings` at any time.
```
$line-height-harmony-settings: (
    ratio: 1.61803398875,
    font-size-root: 16px
);
```

It is recommended that you define both of these options as the defaults might change. You can always change them when using the function.

### ratio
The ratio is the magical number for which you lay out your design. It's commonly used in relation to font size increases, picture size differences and similar.
We're using the golden ratio as a default.

If you're using another ratio for specific areas, you can set it as the third parameter in the function, or the `$ratio` parameter.
```
.awesome-o {
    line-height: line-height-harmony(1em, 550px, 1.3333334);
}

/* .awesome-o output */

.awesome-o {
    line-height: 1.41152;
}
```
### font-size-root
Your root font size is used to calculate em-px conversions, and lays the foundation of the algorithm.
We assume 16px as a default. If you want to change the root, all you have to do is to insert it as the `$font-size-root` parameter, or the fourth parameter.

It's important to remember that if you're using em's for this parameter, you still need to declare your root in the settings earlier so it's possible to convert acurately to pixels in the algorithm.
```
.awesome-o {
    line-height: line-height-harmony(1em, 550px, $font-size-root: 2em);
}

/* .awesome-o output */

.awesome-o {
    line-height: 1.37241;
}
```

### fallback-font-size-unit and fallback-width-unit
These are the default values if you input units without values.
If you try to use any size without defining it's measurement unit, this is what it'll default to.
If you don't set these options, we assume you're using EM for font size, and PX for breakpoints. 

```
$line-height-harmony-settings: (
    ratio: 1.61803398875,
    font-size-root: 16px,
    fallback-font-size-unit: em,
    fallback-width-unit: px
);

.awesome-o {
    line-height: line-height-harmony(1, 550);
}

/* .awesome-o output */

.awesome-o {
    line-height: 1.56261;
}
```

## The algorithm
The algorithm used is a slightly modified version of the [original.](www.pearsonified.com/2011/12/golden-ratio-typography.php) Unlike the original,
[unitless units](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/) are used for line-height.

Have fun.
