# react-hls

`react-hls` is a simple hls/rtmp live stream player.
It will use [hls.js](https://github.com/dailymotion/hls.js) to play your hls live stream if your browser support `html 5 video` and `MediaSource Extension`. Otherwise it will downgrade to `Flash` play your `rtmp` live stream.

## Todo
- [x] Start the project
- [x] Write base component structor
- [x] Support Hls live stream playing ability
- [ ] Support Rtmp/Flv live stream
- [ ] downgrad solution
- [ ] bugs & Optimization :)

## Tutorial

```javascript
import ReactHLS from 'react-hls';

// In your render function
<ReactHLS url={"your hls http url"} />
```


## Properties

- url `String` `required`

    the hls url that you want to play

- autoplay `Boolean`

    autoplay when component is ready default to `false`

- constrols `Boolean`

    whether or not showing the playback controls default to `false`

- width `Number`

    video width

- height `Number`

    video height

- hlsConfig `Object`

    `hls.js` config , you can see all config [here](https://github.com/dailymotion/hls.js/blob/master/doc/API.md#fine-tuning)

- videoProps `Object`

    All video tag attributes supported. You can check [all attributes here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
