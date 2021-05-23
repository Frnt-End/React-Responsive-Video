# Full Screen Responsive Video in React.js


Simple and fast way to make a background video in React

## Start

Add your video file and import it, in this case, we added a file named 'vid-bg.mp4' inside a folder called 'vid':

##### `import BgVideo from './video/vid-bg.mp4';`

Now we will embed the video using the `<video>` html tag:


##### `<video autoPlay loop muted className="bg-vid"><source src={BgVideo} type="video/mp4" /> </video>`

## Finish

Our last step is setting the **CSS style**:


##### `.bg-vid { position: fixed; width: 100%; height: 100%; object-fit: cover; z-index: 0; }`

***

##### And that's it! no third party and no packages..  :statue_of_liberty:


***


### Learn More

In this little project, we customized the video to play automatically, in a loop and without sound. for further customization and more information, visit: [w3-tag-video](https://www.w3schools.com/tags/tag_video.asp)

### License

Copyright © 2015 @frnt-end
[nirit.website](https:///nirit.website)



[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
