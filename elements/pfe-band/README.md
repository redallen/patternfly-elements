# PatternFly Element | Band container

This container element provides a set of slots in which to render banded content.

## Slots

All slots other than `pfe-band--body` are optional.  If the slot is not defined, the container tag for it will not be rendered in the template.

- `pfe-band--header`: This slot renders at the top of the container and generally contains the title, headline, and or subheadline content.  Other possible candidates include a set of social sharing links or tags that describe the content below. The recommended tag for this slot is the `header` tag with h-level or p tags contained within it.
- **Default slot**: This is the default slot and contains the bulk of the content in this element.  Paragraph text or a grid of cards or images might be rendered in this region.  Recommended tag for this slot is the `article` tag. Any content not assigned to a slot will be rendered here.
- `pfe-band--footer`: This slot is typically used for calls-to-action or footnotes and is pushed to the bottom of the container.  Recommended tags include `pfe-cta` or `footer`.
- `pfe-band--aside`: This slot is for content that should be rendered to the right or left of the default slot on desktop.  Asides often contain `pfe-card` or interest forms which provide users a little more information or context for the band.

## Attributes

<style>
    .color-preview {
        display: inline-block;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        background-color: var(--bg, #ffffff);
        border: 1px solid #444444;
    }
</style>

There are several attributes available for customizing the visual treatment of this container.

- `pfe-color`: Options include darkest, darker, accent, complement, lighter, lightest.  The band has a default value of `#dfdfdf`. Your theme will influence these colors so check there first if you are seeing inconsistencies.

    | color | hex |
    |-------|-----|
    | default | <span class="color-preview" style="--bg:#dfdfdf"></span> #dfdfdf |
    | darker | <span class="color-preview" style="--bg:#464646"></span> #464646 |
    | darkest | <span class="color-preview" style="--bg:#131313"></span> #131313 |
    | accent | <span class="color-preview" style="--bg:#fe460d"></span> #fe460d |
    | complement | <span class="color-preview" style="--bg:#0477a4"></span> #0477a4 |
    | lighter | <span class="color-preview" style="--bg:#ececec"></span> #ececec |
    | lightest | <span class="color-preview" style="--bg:#ffffff"></span> #ffffff |

- `pfe-img-src`: Optional background image applied to the entire band container.  Alignment of this image can be managed using the `--pfe-band--BackgroundPosition` variable which is set to `center center` by default.
- `pfe-size`: Optionally adjusts the padding on the container.  Accepts: `small`.

### Aside settings
The aside settings have defaults and if no attribute is defined on the element's main tag, these attributes will be injected with their default values automatically.

- `pfe-aside-desktop`: This influences where the aside is rendered at the desktop view and are indicated relative to the body content. Options are `right` or `left`. **Right is the default.**
- `pfe-aside-mobile`: This influences the position of the aside in the mobile view as well as where in the DOM the aside markup is rendered. These names are relative to the body content. Options are `top` or `bottom`. **Bottom is the default.**
- `pfe-aside-height`: This influences the height of the aside region relative to the body content. Options are `full` or `body`. A `full` height starts at the top of the band and spans the header, body, and footer regions. A `body` height spans the body and footer regions only with the header region sitting above it in the rendered view. **Body is the default.**

## Variables
There are several powerful variables available to hook into and override default styles.

- Verical and horizontal padding: `--pfe-band--Padding--vertical` and `--pfe-band--Padding--horizontal` accept size values such as px, em, rem, etc.
- Background color: Though using the `pfe-color` attribute is strongly recommended when setting the background color for the band, you can also use completely custom colors by updating the `--pfe-band--BackgroundColor` variable.  If you update this value manually, you should also update the `--pfe-broadcasted--color--text`, `--pfe-broadcasted--color--ui-link`[--visited, --hover, --focus] at the same time so that the text and links rendered on this background color show up correctly.
- Background position: This is designed for use with the `pfe-img-src` attribute to allow you to align your background image.  Default value is `center center`.
- Border: This allows the customization of a border around the entire container and is primarily designed to be used to add a top and/or bottom border line.  This variable accepts the entire border shorthand and is set to transparent by default.
- Layout: The band has a rudimentary layout system designed to be used inside the slot regions for the header, body, footer, and aside.  It uses the CSS grid spec and creates a stacked layout by default.  By updating these values, you will be able to create simple grid layouts.  Please note that these do not include fallbacks for older browsers. Possible values include: `1fr 1fr`, `repeat(3, 1fr)`, `repeat(auto-fill, minmax(300px, 1fr))`
    * `--pfe-band--layout`: Applied to `.pfe-band__container`.
    * `--pfe-band_header--layout`: Applied to `.pfe-band__header`.
    * `--pfe-band_body--layout`: Applied to `.pfe-band__body`.
    * `--pfe-band_footer--layout`: Applied to `.pfe-band__footer`.
    * `--pfe-band_aside--layout`: Applied to `.pfe-band__aside`.

## Test

    npm run test

## Build

    npm run build

## Demo

From the PFElements root directory, run:

    npm start

## Code style

Band (and all PatternFly Elements) use [Prettier][prettier] to auto-format JS and JSON.  The style rules get applied when you commit a change.  If you choose to, you can [integrate your editor][prettier-ed] with Prettier to have the style rules applied on every save.

[prettier]: https://github.com/prettier/prettier/
[prettier-ed]: https://github.com/prettier/prettier/#editor-integration
[web-component-tester]: https://github.com/Polymer/web-component-tester
