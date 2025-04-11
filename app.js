// ***** PLAYLIST DATA ******** (hardcoded for now)

const playlist = {
  playlist_name: "Look Up",
  tracks: [
    {
      chapter: 1,
      title: "Chapter 1: Chinatown Memories",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-001-COMPRESSED.mp3",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/001+Ch1-TelecomAR-ezgif.com-optimize.gif",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: "",
      duration: "3:45"
    },
    {
      chapter: 2,
      title: "Chapter 2: Look Tin Eli",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-002-COMPRESSED.mp3",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/002+Look_Tin_Eli_12017_Page_17.jpg",
      playlist: "Look Up",
      IsAR: true,
      XR_Scene: "https://cmm-cloud-2.s3.us-west-1.amazonaws.com/WALKING+TOURS/2025-04-01-CHINATOWN-XR/2025-04-01-CHINATOWN-XR-3.mp4",
      duration: "4:20"
    },
    {
      chapter: 3,
      title: "Chapter 3: Earthquake",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-003-COMPRESSED.mp3",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/003+Chinatown+front_+1906+earthquake.jpg",
      playlist: "Look Up",
      IsAR: true,
      XR_Scene: "https://cmm-cloud-2.s3.us-west-1.amazonaws.com/WALKING+TOURS/2025-04-01-CHINATOWN-XR/2025-04-01-CHINATOWN-XR-3.mp4",
      duration: "3:10"
    },
    {
      chapter: 4,
      title: "Chapter 4: Spofford Alley",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-004-COMPRESSED.mp3",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/004+Spofford+-+1908_.jpg",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: "",
      duration: "5:30"
    },
    {
      chapter: 5,
      title: "Chapter 5: Chinese Beautiful",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-005-COMPRESSED.mp3",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/005+Chinatown+souvenirs.jpg",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: "",
      duration: "2:45"
    },
    {
      chapter: 6,
      title: "Erasing Chinatown",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-006-COMPRESSED.mp3",
      duration: "2:12:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/006+6714001.jpg",
      playlist: "Look Up",
      IsAR: true,
      XR_Scene: "https://cmm-cloud-2.s3.us-west-1.amazonaws.com/WALKING+TOURS/2025-04-01-CHINATOWN-XR/XR-6.mp4"
    },
    {
      chapter: 7,
      title: "Look Up",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-007-COMPRESSED.mp3",
      duration: "2:57:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/007+ruins+over+Chiantown.jpg",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: ""
    },
    {
      chapter: 8,
      title: "The Meaning of Asian American",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-008-COMPRESSED.mp3",
      duration: "1:49:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/008+Low%2BTim.png",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: ""
    },
    {
      chapter: 9,
      title: "Look Tin Eli's Plan",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-009-COMPRESSED.mp3",
      duration: "1:05:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/009+Architect+pitcture.jpg",
      playlist: "Look Up",
      IsAR: true,
      XR_Scene: ""
    },
    {
      chapter: 10,
      title: "Securing Chinatown",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-010-COMPRESSED.mp3",
      duration: "2:48:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/010+Dragon+Gates+SF.png",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: ""
    },
    {
      chapter: 11,
      title: "Sing Chong",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-011-COMPRESSED.mp3",
      duration: "1:36:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/011+Medium+sized+JPEG+(7).jpg",
      playlist: "Look Up",
      IsAR: true,
      XR_Scene: "https://cmm-cloud-2.s3.us-west-1.amazonaws.com/WALKING+TOURS/2025-04-01-CHINATOWN-XR/XR-SCENE-11+(VR2+Output).mp4"
    },
    {
      chapter: 12,
      title: "The Spaces Between",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-012-COMPRESSED.mp3",
      duration: "4:52:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/012+Spaces+Between.png",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: ""
    },
    {
      chapter: 13,
      title: "Thank You",
      audio_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-14-CHINATOWN-AUDIO/2025-03-14-CHINATOWN-MP3S/2025-03-14-CHINATOWN-013-COMPRESSED.mp3",
      duration: "0:44:00",
      artwork_url: "https://cmm-cloud-storage.s3.us-east-2.amazonaws.com/2025-03-12-CHINATOWN-AUDIOTOUR/2025-03-12-CHINATOWN-ARTWORK/013+Block-CalMigration-logo-Off-White.png",
      playlist: "Look Up",
      IsAR: false,
      XR_Scene: ""
    }
  ]
};


// State management
const state = {
  currentTrack: 0,
  isPlaying: false,
  isXRMode: false,
  exitingXR: false,
  pendingMessages: [],
  iframeReady: false,
  volume: 1,
  isMuted: false,
  videoElement: null,
  isVideoSynced: false
};

// DOM Elements
const elements = {
  audioElement: document.getElementById('audioElement'),
  playPauseBtn: document.getElementById('playPauseBtn'),
  muteBtn: document.getElementById('muteBtn'),
  volumeSlider: document.getElementById('volumeSlider'),
  progress: document.getElementById('progress'),
  currentTime: document.getElementById('currentTime'),
  duration: document.getElementById('duration'),
  albumArt: document.getElementById('albumArt'),
  trackTitle: document.getElementById('trackTitle'),
  trackArtist: document.getElementById('trackArtist'),
  viewXRBtn: document.getElementById('viewXRBtn'),
  exitXRBtn: document.getElementById('exitXRBtn'),
  audioContent: document.getElementById('audioContent'),
  xrContent: document.getElementById('xrContent'),
  sceneContainer: document.getElementById('sceneContainer'),
  playlistContainer: document.getElementById('playlistContainer'),
  playlistTracks: document.getElementById('playlistTracks'),
  playlistClose: document.getElementById('playlistClose'),
  permissionOverlay: document.getElementById('permissionOverlay'),
  enableMotionBtn: document.getElementById('enableMotionBtn'),
  skipBtn: document.getElementById('skipMotionBtn'),
  videoFrame: document.getElementById('videoFrame'),
  menuBtn: document.getElementById('menuBtn'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  speedBtn: document.getElementById('speedBtn'),

};


// Initialize the player
async function initializePlayer() {
      
  try {
      setupEventListeners();
      populatePlaylist();
      setupAudioElement();
      checkDeviceOrientation();

          
    // Check permissions and show overlay if needed
    const hasRequestedBefore = localStorage.getItem('hasRequestedMotionPermissions');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS && !hasRequestedBefore) {
      elements.permissionOverlay.style.display = 'flex';
    } else {
      elements.permissionOverlay.style.display = 'none';
    }
      
      // Preload XR videos in background
      preloadXRVideos().catch(console.error);
      
      // Load first track
      await loadTrack(0, false);
      
      // Add message listener for iframe communication
      window.addEventListener('message', handleIframeMessages);
  } catch (error) {
      console.error('Error initializing player:', error);
  }
}




/********************************* UTILITIES ************************ */




function formatTime(seconds) {
  if (typeof seconds === 'string') {
      if (seconds.match(/^\d+:\d{2}$/)) return seconds;
      seconds = parseFloat(seconds);
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}


function handleIframeMessages(event) {

  if (event.data.type === 'aframeReady') {
      state.iframeReady = true;
      state.pendingMessages.forEach(msg => postMessageToIframe(msg));
      state.pendingMessages = [];
    }
    
  if (event.data.type === 'videoReady') {
      postMessageToIframe({
          action: 'setTime',
          time: elements.audioElement.currentTime
      });
      if (state.isPlaying) {
          postMessageToIframe({ 
              action: 'play',
              time: elements.audioElement.currentTime
          });
      }
  } else if (event.data.type === 'currentTime') {
      completeExitXRMode(event.data.time);
  }  else if (event.data.type === 'videoEnded') {
      // Video ended - reset time to 0 and play next track
      elements.audioElement.currentTime = 0;
      playNextTrack();
  }
}

// Setup event listeners
function setupEventListeners() {
  // Play/Pause
  elements.playPauseBtn.addEventListener('click', togglePlayPause);

  // Volume control
  elements.muteBtn.addEventListener('click', toggleMute);
  elements.volumeSlider.addEventListener('input', handleVolumeChange);

  // Progress bar
  elements.audioElement.addEventListener('timeupdate', updateProgress);
  elements.progress.parentElement.addEventListener('click', seekTo);

  // XR mode
  elements.viewXRBtn.addEventListener('click', enterXRMode);
  elements.exitXRBtn.addEventListener('click', exitXRMode);

  // Playlist
  elements.playlistClose.addEventListener('click', togglePlaylist);

  // Device orientation
  elements.enableMotionBtn.addEventListener('click', function() {
    // This direct function call is crucial for iOS
    requestDeviceOrientation();
  });

  elements.skipBtn.addEventListener('click', () => {
    localStorage.setItem('hasRequestedMotionPermissions', 'true');
    elements.permissionOverlay.style.display = 'none';
});

  elements.menuBtn.addEventListener('click', togglePlaylist);
  elements.prevBtn.addEventListener('click', playPreviousTrack);
  elements.nextBtn.addEventListener('click', playNextTrack);
  elements.speedBtn.addEventListener('click', togglePlaybackSpeed);

  elements.playlistTracks.addEventListener('click', (e) => {
      const trackElement = e.target.closest('.playlist-track');
      if (trackElement) {
          const index = parseInt(trackElement.dataset.index);
          loadTrack(index, true); // Enable autoplay for playlist clicks
      }
  });

  // Video frame
  elements.videoFrame.addEventListener('load', () => {
      // When iframe loads, sync with audio
      const video = elements.videoFrame.contentDocument.querySelector('video');
      if (video) {
          video.currentTime = elements.audioElement.currentTime;
          if (!elements.audioElement.paused) {
              video.play();
          }
      }
  });

//     // Keyboard shortcuts
// document.addEventListener('keydown', (e) => {
//     if (e.code === 'Space') {
//         e.preventDefault();
//         togglePlayPause();
//     } else if (e.code === 'ArrowRight') {
//         playNextTrack();
//     } else if (e.code === 'ArrowLeft') {
//         playPreviousTrack();
//     } else if (e.code === 'KeyM') {
//         toggleMute();
//     } else if (e.code === 'BracketRight') {
//         elements.audioElement.currentTime += 5;
//     } else if (e.code === 'BracketLeft') {
//         elements.audioElement.currentTime -= 5;
//     } else if (e.code === 'KeyS') {
//         togglePlaybackSpeed();
//     }
// });

}

// Audio element setup
function setupAudioElement() {
  elements.audioElement.addEventListener('ended', () => {
      state.isPlaying = false;
      updatePlayPauseButton();
      // Play next track in audio mode
      playNextTrack();
  });

  elements.audioElement.addEventListener('loadedmetadata', () => {
      elements.duration.textContent = formatTime(elements.audioElement.duration);
  });
}



/******************************* VIDEO PRELOADER ***************************** */




// Video preloader cache
const videoPreloadCache = new Map();

// Preload XR videos
async function preloadXRVideos() {
  const preloadPromises = [];
  
  for (const track of playlist.tracks) {
      if (track.IsAR && track.XR_Scene && track.XR_Scene.trim() !== "") {
          preloadPromises.push(preloadXRVideo(track.XR_Scene));
      }
  }
  
  await Promise.all(preloadPromises);
  console.log('All XR videos preloaded');
}

// Preload single XR video
async function preloadXRVideo(url) {
  if (videoPreloadCache.has(url)) {
      return true;
  }
  
  return new Promise((resolve) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.preload = 'auto';
      video.src = url;
      
      // For faster start, we can just wait for metadata
      video.addEventListener('loadedmetadata', () => {
          videoPreloadCache.set(url, true);
          resolve(true);
      });
      
      video.addEventListener('error', () => {
          console.warn('Failed to preload XR video:', url);
          resolve(false);
      });
      
      // Trigger loading
      video.load();
      
      // Fallback in case events don't fire
      setTimeout(() => {
          if (!videoPreloadCache.has(url)) {
              console.warn('Preload timeout for:', url);
              resolve(false);
          }
      }, 10000);
  });
}

// Preload current and next track's XR video
async function preloadAdjacentXRVideos(currentIndex) {
  const tracksToPreload = [];
  
  // Current track
  if (playlist.tracks[currentIndex]?.IsAR && playlist.tracks[currentIndex]?.XR_Scene) {
      tracksToPreload.push(playlist.tracks[currentIndex].XR_Scene);
  }
  
  // Next track
  const nextIndex = (currentIndex + 1) % playlist.tracks.length;
  if (playlist.tracks[nextIndex]?.IsAR && playlist.tracks[nextIndex]?.XR_Scene) {
      tracksToPreload.push(playlist.tracks[nextIndex].XR_Scene);
  }
  
  await Promise.all(tracksToPreload.map(url => preloadXRVideo(url)));
}




/****************************** XR MODE ******************************** */



async function enterXRMode() {
  const currentTrack = playlist.tracks[state.currentTrack];
  
  if (!currentTrack.IsAR || !currentTrack.XR_Scene) {
      console.warn("No XR content available");
      return;
  }

  // Show loading state
  elements.xrContent.innerHTML = '<div class="xr-loading">Loading 360° experience...</div>';
  
  try {
          // Update state FIRST
          state.isXRMode = true;

                // Setup UI
      elements.audioContent.style.display = 'none';
      elements.xrContent.style.display = 'block';
      elements.viewXRBtn.style.display = 'none';
      elements.exitXRBtn.style.display = 'flex';

      // Preload video first
      const videoReady = await preloadXRVideo(currentTrack.XR_Scene);
      if (!videoReady) throw new Error('Video failed to load');
      
      // Store playback state
      const wasPlaying = !elements.audioElement.paused;      

      
      // Setup scene
      setupXRScene(currentTrack.XR_Scene);
      
      // Restore playback if needed
      if (wasPlaying) {
          setTimeout(() => {
              postMessageToIframe({
                  action: 'play',
                  time: elements.audioElement.currentTime
              });
          }, 500);
      }
  } catch (error) {
      console.error('Failed to enter XR mode:', error);
      elements.xrContent.innerHTML = '<div class="xr-error">Failed to load 360° content</div>';
      setTimeout(() => completeExitXRMode(elements.audioElement.currentTime), 2000);
  }
}

async function exitXRMode() {
  if (!state.isXRMode) return;
  
  console.log('Exiting XR mode');
  state.isXRMode = false;

    // Update UI immediately
    elements.viewXRBtn.style.display = 'flex';
    elements.exitXRBtn.style.display = 'none';
    
  
  // Stop trying to communicate with the iframe
  state.exitingXR = true;
  
  // Get current time from iframe
  postMessageToIframe({ action: 'getCurrentTime' });
  
  // Set a timeout fallback
  setTimeout(() => {
      if (state.exitingXR) {
          completeExitXRMode(0);
      }
  }, 1000);
}

function completeExitXRMode(videoTime) {
  console.log('Completing XR exit');
  state.exitingXR = false;
  state.isXRMode = false; // Ensure state is clean

  const currentTrack = playlist.tracks[state.currentTrack];
  const showXRButton = currentTrack.IsAR && currentTrack.XR_Scene && currentTrack.XR_Scene.trim() !== "";
  
  // Update UI
  elements.audioContent.style.display = 'flex';
  elements.xrContent.style.display = 'none';
  elements.viewXRBtn.style.display = 'flex';
  elements.exitXRBtn.style.display = 'none';
  
  
  // Clean up iframe
  elements.xrContent.innerHTML = '';

  // Check if we're at the end of the track
  const atEnd = videoTime >= (elements.audioElement.duration - 0.5); // 0.5 second threshold

  // Reset to beginning if at end or if this was triggered by video ended
  const newTime = atEnd ? 0 : videoTime;
  elements.audioElement.currentTime = newTime;
  
  if (!atEnd) {
      elements.audioElement.currentTime = videoTime;
      if (state.isPlaying) {
          elements.audioElement.play().catch(console.error);
      }
  } else {
      // At end - ensure paused state
      elements.audioElement.currentTime = 0;
      state.isPlaying = false;
      updatePlayPauseButton();
  }

    // Reset XR mode state
    state.isXRMode = false;
}


function setupXRScene(videoUrl) {
  // Clear previous iframe
  elements.xrContent.innerHTML = '';
  
  // Create new iframe
  const iframe = document.createElement('iframe');
  iframe.className = 'video-frame';
  iframe.allowFullscreen = true;
  elements.xrContent.appendChild(iframe);
  
  // Set up load handler
  iframe.onload = () => {
      state.iframeReady = true;
      console.log('XR iframe loaded');
  };

  const aframeHTML = `
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
          <title>360 Video</title>
          <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
          <style>body { margin: 0; overflow: hidden; }</style>
      </head>
      <body>
          <a-scene device-orientation-permission-ui
                    vr-mode-ui="enabled: false"> 
              <a-assets>
                  <video id="xrVideo"
                          src="${videoUrl}"
                         crossorigin="anonymous"
                         playsinline
                         webkit-playsinline
                         muted
                         autoplay
                         preload="auto"
                         xr-layer>
                  </video>
              </a-assets>
              
              <a-videosphere src="#xrVideo" rotation="0 -90 0"></a-videosphere>
            
      
               <!-- Camera setup for natural movement -->
              <a-entity position="0 1.6 0">
                  <a-camera
                      look-controls="pointerLockEnabled: false;
                                  reverseMouseDrag: false;
                                  touchEnabled: true;
                                  magicWindowTrackingEnabled: true">
                  </a-camera>
                  <a-cursor></a-cursor>
              </a-entity>

              
              <script>
                  const video = document.getElementById('xrVideo');


                  
                  
                  // Notify parent when ready
                  function notifyReady() {
                      if (window.parent.state && window.parent.state.exitingXR) return;
                      window.parent.postMessage({ 
                          type: 'videoReady',
                          duration: video.duration
                      }, '*');
                  }
                  
                  video.addEventListener('canplaythrough', notifyReady);
                  if (video.readyState > 3) notifyReady();
                  
                  // Handle video ended event
                  video.addEventListener('ended', () => {
                      window.parent.postMessage({
                          type: 'videoEnded'
                      }, '*');
                  });
                  
                  // Handle parent messages
                  window.addEventListener('message', (event) => {
                      if (!video) return;
                      
                      switch(event.data.action) {
                          case 'play':
                              video.currentTime = event.data.time || 0;
                              video.play().catch(e => console.log('Video play error:', e));
                              break;
                          case 'pause':
                              video.pause();
                              break;
                          case 'setTime':
                              video.currentTime = event.data.time;
                              break;
                          case 'getCurrentTime':
                              window.parent.postMessage({
                                  type: 'currentTime',
                                  time: video.currentTime
                              }, '*');
                              break;
                      }
                  });
              </script>
          </a-scene>
      </body>
      </html>
  `;
  
  iframe.srcdoc = aframeHTML;
  iframe.style.zIndex = '100'; // Ensure iframe stays below buttons
  state.iframeReady = false;
  
}

                  //   // iOS requires direct user interaction to play video
                  //   function handleFirstInteraction() {
                  //     document.removeEventListener('touchstart', handleFirstInteraction);
                  //     document.removeEventListener('click', handleFirstInteraction);
                      
                  //     video.play().catch(e => console.error('Video play error:', e));
                  // }
                  
                  // document.addEventListener('touchstart', handleFirstInteraction, { once: true });
                  // document.addEventListener('click', handleFirstInteraction, { once: true });

function postMessageToIframe(message) {
  if (!state.iframeReady) {
    state.pendingMessages.push(message); // Queue messages
    return;
  }
  const iframe = document.querySelector('.video-frame');
  iframe?.contentWindow?.postMessage(message, '*');
}


/********************************* PLAYER CONTROLS **************************** */

// Unified play/pause control
function togglePlayPause() {
  state.isPlaying = !state.isPlaying;
  updatePlayPauseButton();
  
  if (state.isPlaying) {
      elements.audioElement.play().catch(console.error);
      if (state.isXRMode) {
          postMessageToIframe({
              action: 'play',
              time: elements.audioElement.currentTime
          });
      }
  } else {
      elements.audioElement.pause();
      if (state.isXRMode) {
          postMessageToIframe({ action: 'pause' });
      }
  }
}

// Track navigation
async function playNextTrack() {
  if (!playlist?.tracks?.length) return;

  try {
      // Show loading indicator
      elements.playPauseBtn.innerHTML = '⏳';
      
      // Exit XR mode if currently in it
      if (state.isXRMode) {
          await exitXRMode();
      }

      const nextTrack = (state.currentTrack + 1) % playlist.tracks.length;
      await loadTrack(nextTrack, true); // Pass true to autoplay

       // Ensure we start from beginning
       elements.audioElement.currentTime = 0;
      
      // Auto-play the new track in audio mode
      await elements.audioElement.play();
      state.isPlaying = true;
      updatePlayPauseButton();
      
      // Update UI to show current track
      highlightCurrentTrack();
  } catch (error) {
      console.error('Error playing next track:', error);
      state.isPlaying = false;
      updatePlayPauseButton();
  }
}

// Helper function to highlight current track in playlist
function highlightCurrentTrack() {
  const tracks = elements.playlistTracks.querySelectorAll('.playlist-track');
  tracks.forEach((track, index) => {
      if (index === state.currentTrack) {
          track.classList.add('active');
      } else {
          track.classList.remove('active');
      }
  });
}
async function playPreviousTrack() {
  if (!playlist?.tracks?.length) return;

  // If we're more than 3 seconds into the track, restart it instead
  if (elements.audioElement.currentTime > 3) {
      elements.audioElement.currentTime = 0;
      updateProgress();
      return;
  }
  
  const prevTrack = (state.currentTrack - 1 + playlist.tracks.length) % playlist.tracks.length;
  await loadTrack(prevTrack);

   // Auto-play the new track
   try {
      await elements.audioElement.play();
      state.isPlaying = true;
      updatePlayPauseButton();
      
      // If in XR mode, sync the video
      if (state.isXRMode) {
          postMessageToIframe({
              action: 'play',
              time: elements.audioElement.currentTime
          });
      }
  } catch (error) {
      console.error('Error autoplaying previous track:', error);
  }

  // if (state.isPlaying) {
  //     elements.audioElement.play().catch(console.error);
  // }
}


// Volume control
function toggleMute() {
  state.isMuted = !state.isMuted;
  elements.audioElement.muted = state.isMuted;
  if (state.videoElement) {
      state.videoElement.muted = state.isMuted;
  }
  elements.muteBtn.innerHTML = state.isMuted ? '<i class="fas fa-volume-mute">' : '<i class="fas fa-volume-up"></i>';
}

function handleVolumeChange(e) {
  const volume = e.target.value;
  elements.audioElement.volume = volume;
  if (state.videoElement) {
      state.videoElement.volume = volume;
  }
  state.volume = volume;
  elements.muteBtn.innerHTML = volume > 0 ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute">';
}

// Playback speed control
function togglePlaybackSpeed() {
  const speeds = [1, 1.5, 2];
  const currentSpeed = elements.audioElement.playbackRate;
  const currentIndex = speeds.indexOf(currentSpeed);
  const nextIndex = (currentIndex + 1) % speeds.length;
  const newSpeed = speeds[nextIndex];
  
  elements.audioElement.playbackRate = newSpeed;
  if (state.videoElement) {
      state.videoElement.playbackRate = newSpeed;
  }
  
  elements.speedBtn.textContent = `${newSpeed}x`;
  
  // Show speed change feedback
  const feedback = document.createElement('div');
  feedback.textContent = `Playback speed: ${newSpeed}x`;
  feedback.style.position = 'absolute';
  feedback.style.bottom = '60px';
  feedback.style.left = '50%';
  feedback.style.transform = 'translateX(-50%)';
  feedback.style.backgroundColor = 'rgba(0,0,0,0.7)';
  feedback.style.color = 'white';
  feedback.style.padding = '5px 10px';
  feedback.style.borderRadius = '5px';
  feedback.style.zIndex = '100';
  elements.playerContainer.appendChild(feedback);
  
  setTimeout(() => {
      feedback.style.opacity = '0';
      feedback.style.transition = 'opacity 0.5s';
      setTimeout(() => feedback.remove(), 500);
  }, 1000);
}

// Update seekTo function to handle iframe
function seekTo(e) {
  const progressBar = e.currentTarget;
  const clickPosition = e.offsetX / progressBar.offsetWidth;
  const newTime = clickPosition * elements.audioElement.duration;
  
  elements.audioElement.currentTime = newTime;
  
  if (state.isXRMode) {
      postMessageToIframe({
          action: 'setTime',
          time: newTime
      });
  }
}

function cleanupXRScene() {
  elements.sceneContainer.innerHTML = '';
}

function syncVideoWithAudio() {
  if (state.videoElement && elements.audioElement) {
      state.videoElement.currentTime = elements.audioElement.currentTime;
      if (state.isPlaying) {
          state.videoElement.play().catch(error => {
              console.error('Error playing video:', error);
          });
      }
      state.isVideoSynced = true;
  }
}

// Update progress bar
function updateProgress() {
  const currentTime = elements.audioElement.currentTime;
  const duration = elements.audioElement.duration || playlist.tracks[state.currentTrack].duration;
  
  if (duration) {
      const progressPercent = (currentTime / duration) * 100;
      elements.progress.style.width = `${progressPercent}%`;
      elements.currentTime.textContent = formatTime(currentTime);
  }
  
  // Sync video time if in XR mode
  if (state.isXRMode) {
      postMessageToIframe({
          action: 'setTime',
          time: currentTime
      });
  }
}

// Helper to get video time (will be async in real implementation)
function getVideoCurrentTime() {
  // In real implementation, this would use postMessage
  return elements.audioElement.currentTime; // Fallback
}


function updatePlayPauseButton() {
  elements.playPauseBtn.innerHTML = state.isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}




/******************************* PLAYLIST MANAGEMENT ***************************** */




// Playlist management
function populatePlaylist() {
  elements.playlistTracks.innerHTML = playlist.tracks.map((track, index) => `
      <div class="playlist-track" data-index="${index}">
          <div><p>${track.title}</p></div>

             ${track.IsAR && track.XR_Scene && track.XR_Scene.trim() !== "" ? 
            '<span class="xr-badge">360°</span>' : ''}
      </div>
  `).join('');

  elements.playlistTracks.addEventListener('click', (e) => {
      const trackElement = e.target.closest('.playlist-track');
      if (trackElement) {
          const index = parseInt(trackElement.dataset.index);
          loadTrack(index);
      }
  });
}

async function loadTrack(index, shouldAutoplay = false) {
  
  const track = playlist.tracks[index];
  if (!track) return; // Safety check

  state.currentTrack = index;
  state.isPlaying = false;

  // Reset XR mode if switching tracks
  if (state.isXRMode) {
      await exitXRMode(); // Make sure we wait for exit to complete
  }

  elements.audioElement.src = track.audio_url;
  elements.albumArt.src = track.artwork_url;
  elements.trackTitle.textContent = `Chapter ${track.chapter}: ${track.title}`;
  elements.trackArtist.textContent = `Ni de Aquí, Ni de Allá`;
  elements.duration.textContent = track.duration || '0:00';

  // elements.audioElement.playbackRate = 1;
  // elements.speedBtn.textContent = '1x';

      // // Update XR button visibility - only if not in XR mode
      // if (!state.isXRMode) {
      //     const showXRButton = track.IsAR && track.XR_Scene && track.XR_Scene.trim() !== "";
      //     elements.viewXRBtn.style.display = showXRButton ? 'block' : 'none';
      //     elements.exitXRBtn.style.display = 'none';
      // }

// Show View 360° button only if track has XR content AND we're not in XR mode
const showXRButton = track.IsAR && track.XR_Scene && track.XR_Scene.trim() !== "";
elements.viewXRBtn.style.display = (showXRButton && !state.isXRMode) ? 'flex' : 'none';
elements.exitXRBtn.style.display = state.isXRMode ? 'flex' : 'none';


  // Wait for audio to be ready
  await new Promise((resolve) => {
      const onCanPlay = () => {
          elements.audioElement.removeEventListener('canplaythrough', onCanPlay);
          resolve();
      };
      elements.audioElement.addEventListener('canplaythrough', onCanPlay);
      elements.audioElement.load();
  });

  // Only autoplay if explicitly requested
  if (shouldAutoplay) {
      try {
          await elements.audioElement.play();
          state.isPlaying = true;
      } catch (error) {
          console.error('Autoplay blocked:', error);
          state.isPlaying = false;
      }
  }

  preloadAdjacentXRVideos(index).catch(console.error);

  updatePlayPauseButton();
  // togglePlaylist();

      // // Preload video metadata if XR is available
      // if (track.IsAR && track.XR_Scene) {
      //     const video = document.createElement('video');
      //     video.src = track.XR_Scene;
      //     video.load();
      // }
}

function togglePlaylist() {
  elements.playlistContainer.classList.toggle('open');
  
  // Update menu button state
  if (elements.playlistContainer.classList.contains('open')) {
      elements.menuBtn.textContent = '✕';
      elements.menuBtn.style.fontSize = '1.5rem';
  } else {
      elements.menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}



/************************** DEVICE ORIENTATION ******************************* */



// Device orientation
function checkDeviceOrientation() {
  // Only show overlay on iOS Safari that supports the API
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  const hasRequestedBefore = localStorage.getItem('hasRequestedMotionPermissions');
  
  if (isIOS && 
      typeof DeviceOrientationEvent !== 'undefined' && 
      typeof DeviceOrientationEvent.requestPermission === 'function' && 
      !hasRequestedBefore) {
    elements.permissionOverlay.style.display = 'flex';
  } else {
    elements.permissionOverlay.style.display = 'none';
  }
}

function requestDeviceOrientation() {
  // This must be called directly from a click handler
  if (typeof DeviceOrientationEvent !== 'undefined' && 
      typeof DeviceOrientationEvent.requestPermission === 'function') {
    
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          localStorage.setItem('hasRequestedMotionPermissions', 'true');
          elements.permissionOverlay.style.display = 'none';
          
          // Also request motion permission if available
          if (typeof DeviceMotionEvent !== 'undefined' && 
              typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission();
          }
        }
      })
      .catch(console.error);
  } else {
    // Non-iOS or older browser
    localStorage.setItem('hasRequestedMotionPermissions', 'true');
    elements.permissionOverlay.style.display = 'none';
  }
}

function showPermissionFeedback(message) {
  // Remove any existing feedback first
  const existingFeedback = document.querySelector('.permission-feedback');
  if (existingFeedback) existingFeedback.remove();
  
  const feedback = document.createElement('div');
  feedback.className = 'permission-feedback';
  feedback.textContent = message;
  elements.permissionOverlay.appendChild(feedback);
  
  setTimeout(() => {
    feedback.style.opacity = '0';
    setTimeout(() => feedback.remove(), 500);
  }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePlayer);