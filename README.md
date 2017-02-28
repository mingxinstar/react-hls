# react-hls

react-hls is a simple hls/rtmp live stream player. It will use [hls.js](https://github.com/dailymotion/hls.js) to play your hls live stream if your browser support `html 5 video` and `MediaSource Extension`. Otherwise it will downgrade to `Flash` play your `rtmp` live stream.

## Todo
- [x] Start the project
- [x] Write base component structor
- [x] Support Hls live stream playing ability
- [ ] Support Rtmp/Flv live stream
- [ ] bugs & Optimization :)

## Tutorial

```javascript
import ReactHLS from 'react-hls';

// In your render function
<ReactHLS url={"you hls http url"} />
```
