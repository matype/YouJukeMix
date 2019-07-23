import { h, app } from 'hyperapp'
import axios from 'axios'
import YouTubePlayer from 'youtube-player'

const Header = (model, actions) =>
  <header class="Header">
    <div class="Header__inner">
      {Logo()}
    </div>
  </header>

const Logo = () =>
  <h1 class="Header__logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 606.07 144.45">
      <defs>
        <linearGradient id="95" x1="385.94" y1="72.22" x2="606.07" y2="72.22" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff9de1"/>
          <stop offset=".28" stop-color="#e4619e"/>
          <stop offset=".63" stop-color="#ff4492"/>
          <stop offset=".86" stop-color="#c632b8"/>
        </linearGradient>
      </defs>
      <title>YouJukeMix</title>
      <path fill="#fff" d="M25.43 75.71L0 31.45h13.52l17.82 31.14L49.2 31.45h13.53L37.19 75.71v33.66H25.43zM56.88 84.44a24.42 24.42 0 0 1 7.62-18.12 25.53 25.53 0 0 1 18.57-7.47 25.66 25.66 0 0 1 18.67 7.52 25 25 0 0 1 7.57 18.47 24.9 24.9 0 0 1-7.62 18.52 26.06 26.06 0 0 1-18.83 7.42 25 25 0 0 1-18.52-7.57q-7.46-7.46-7.46-18.77zm11.61.2q0 7.37 3.94 11.66a13.86 13.86 0 0 0 10.65 4.34 13.85 13.85 0 0 0 10.65-4.29q4-4.29 4-11.46t-4-11.46a13.87 13.87 0 0 0-10.65-4.33 13.74 13.74 0 0 0-10.55 4.34 15.78 15.78 0 0 0-4.04 11.2zM129.58 60.22v28.21q0 12.21 9.64 12.21t9.64-12.21V60.22h11.35v28.46a31.7 31.7 0 0 1-1.46 10.19 17.1 17.1 0 0 1-4.89 6.91q-5.75 5-14.63 5t-14.59-5a17.38 17.38 0 0 1-5-6.91q-1.42-3.43-1.41-10.19V60.22zM202.5 31.45v50.42q0 9-1.26 13.47a20.27 20.27 0 0 1-4.29 8.53q-5.9 6.91-15.64 6.91a26.38 26.38 0 0 1-13.78-3.84l5.75-10a14.62 14.62 0 0 0 8 2.88q5.25 0 7.27-4t2.12-13.93V31.45zM228.29 60.22v28.21q0 12.21 9.64 12.21t9.64-12.21V60.22h11.35v28.46a31.7 31.7 0 0 1-1.46 10.19 17.1 17.1 0 0 1-4.89 6.91q-5.75 5-14.63 5t-14.59-5a17.38 17.38 0 0 1-5-6.91q-1.42-3.43-1.41-10.19V60.22zM284.61 24.14v52l16-15.9h15.24L294.5 80.86l22.91 28.51h-14.73l-16.25-20.74-1.82 1.82v18.92h-11.35V24.14zM368.46 87.47h-35.23a14.94 14.94 0 0 0 3.94 9.64 12 12 0 0 0 8.93 3.53 11.63 11.63 0 0 0 7-2q2.73-2 6.21-7.47l9.59 5.35a38.09 38.09 0 0 1-4.69 6.48 25 25 0 0 1-5.3 4.44 21.29 21.29 0 0 1-6.11 2.55 29.78 29.78 0 0 1-7.12.81q-11 0-17.66-7.07t-6.66-18.87q0-11.66 6.46-18.87t17.26-7.12q10.85 0 17.16 6.91t6.26 19zm-11.66-9.29q-2.37-9.09-11.46-9.08a11.76 11.76 0 0 0-3.89.63 11.18 11.18 0 0 0-3.31 1.82 11.59 11.59 0 0 0-2.55 2.85 13.31 13.31 0 0 0-1.59 3.78z"/><path fill="url(#95)" d="M598.17 20.41c-2.61-8.4-14.23-16-25.58-17.08 0 0-25.78-3.33-76.58-3.33s-77.9 3.37-77.9 3.37c-11.37 1-22.58 8.72-25.06 17.13 0 0-7.11 17.46-7.11 51.2s7.3 53.26 7.3 53.26c2.25 8.46 13.53 16 24.91 16.8 0 0 27 2.69 77.85 2.69s76.52-2.66 76.52-2.66c11.4-.79 22.78-8.36 25.48-16.79 0 0 8.12-19.08 8.12-53.35s-7.95-51.24-7.95-51.24zm-116.22 89l-7.52-47L451.36 113 429 62.28l-8.38 47.08h-12.2l16.4-83.77 26.75 60.56 27.7-60.55L494 109.37zm36.71 0H507.3V60.22h11.35zm-.45-64.29a7 7 0 0 1-5.2 2.17 7.41 7.41 0 0 1-7.42-7.47 7.41 7.41 0 0 1 7.41-7.36 7.15 7.15 0 0 1 5.25 2.17 7 7 0 0 1 2.17 5.2 7.16 7.16 0 0 1-2.22 5.25zm51.32 64.29L555.09 91l-14.78 18.37h-13.88l21.85-26.6-17.67-22.55h13.52l11 14.33 11.15-14.33h13.93L562 82.77l21 26.6z"/>
    </svg>
  </h1>


const SearchForm = (model, actions) =>
  <div class="SearchForm">
    <input
      class="SearchForm__input"
      placeholder="Search for YouTube videos"
      type="text"
      onkeyup={e => e.keyCode === 13 ? actions.search({value: e.target.value}) : ""}
    />
  </div>

const SearchIcon = () =>
  <div class="SearchIcon">
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.8 11.333A4.538 4.538 0 0 1 2.265 6.8c0-2.5 2.034-4.533 4.533-4.533 2.5 0 4.533 2.033 4.533 4.533 0 2.499-2.033 4.533-4.533 4.533zm9.2 3.265l-3.748-3.748a6.759 6.759 0 0 0 1.347-4.05A6.799 6.799 0 1 0 0 6.8c0 3.755 3.044 6.8 6.8 6.8 1.519 0 2.918-.506 4.05-1.348L14.598 16 16 14.598z"/></svg>
  </div>

const GarbageIcon = () =>
  <div class="GarbageIcon">
    <svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M13 1H9.75l-.929-1H4.18L3.25 1H0v2h13zM1 16V4h11v12c0 1.101-.825 2-1.833 2H2.833C1.825 18 1 17.101 1 16zM3 5v12h1V5H3zm3 0v12h1V5H6zm3 0v12h1V5H9z"/></svg>
  </div>

const PlayIcon = () =>
  <div class="PlayIconWrapper">
    <div class="PlayIcon">
      <svg viewBox="0 0 10 13" xmlns="http://www.w3.org/2000/svg"><title>Rectangle</title><path d="M0 1.591C0 .483.756.067 1.695.664l7.61 4.843c.936.596.939 1.56 0 2.157l-7.61 4.843C.759 13.103 0 12.688 0 11.58V1.59z" /></svg>
    </div>
  </div>


const SearchResultsList = (model, actions) =>
  <div class="SearchResultsList">
    {model.results && model.results.map(result => SearchResult(actions, result))}
  </div>

const SearchResult = (actions, result) =>{
  return <div
    class="SearchResult">
    <img
      src={result.snippet.thumbnails.medium.url}
      class="SearchResult__image" />
    <div class="SearchResult__body">
      <p class="SearchResult__title">
        {result.snippet.title.length > 40 ? result.snippet.title.slice(0, 40) + '…' : result.snippet.title}
      </p>
      <p class="SearchResult__channel">{result.snippet.channelTitle}</p>
    </div>
    <div
      class="SearchResult__cover"
      onClick={e => actions.add(e)}
      data-videoId={result.id.videoId}
      data-title={result.snippet.title}
      data-channel={result.snippet.channelTitle}
      data-description={result.snippet.description}
      data-thumbnail={result.snippet.thumbnails.medium.url}>
        <div class="icon">+</div>
        Add to Playlist
    </div>
  </div>
}

const PlayList = (model, actions) =>
  <div class="PlayList">
    {model.upcomings.map((upcoming, index) => PlayListItem(model, actions, upcoming, index))}
  </div>

const PlayListItem = (model, actions, upcoming, index) =>
  <div
    class={model.currentIndex === index ? 'PlayListItem PlayListItem--playing' : 'PlayListItem'}
    data-index={index}
    data-videoId={upcoming.videoId}
    data-title={upcoming.title}
    data-channel={upcoming.channelTitle}
    data-description={upcoming.description}
    onClick={e => actions.handleUpcomingClick(e.currentTarget)}>
    {Upcoming(model, actions, upcoming, index)}
    {DeleteButton(actions, upcoming, index)}
  </div>

const Upcoming = (model, actions, upcoming, index) =>
  <div
    class="Upcoming">
    <div class="Upcoming__image">
      <img src={upcoming.thumbnail} />
      <div class="Upcoming__cover">
        {PlayIcon()}
      </div>
    </div>
    <div class="Upcoming__body">
      <p class="Upcoming__title">{upcoming.title}</p>
    </div>
  </div>

const DeleteButton = (actions, upcoming, index) =>
  <div
    class="DeleteButton"
    data-videoId={upcoming.videoId}
    data-index={index}
    onClick={e => actions.deletePlayList(e)}>
    {GarbageIcon()}
  </div>

const CurrentTitle = (model) =>
  <p class="CurrentTitle">{model.currentTitle}</p>

const CurrentChannel = (model) =>
  <p class="CurrentChannel">{model.currentChannel}</p>

  const CurrentDescription = (model) =>
    <p class="CurrentDescription">{model.currentDescription}</p>

const actions = {
  search: (model, data, actions) => {
    const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
    axios.get(SEARCH_URL, {
      params: {
        key: 'AIzaSyBL4ufXXJ4N2Vn0SQKfMpAZkq1jhrn66xk',
        type: 'video',
        mine: 'true',
        maxResults: '25',
        part: 'id,snippet',
        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/medium,items/snippet/channelTitle',
        q: data.value
      }
    })
    .then(res => {
      actions.setResults(res.data.items)
    })
  },
  setResults: (model, results) => ({ results }),
  add: (model, e, actions) => {
    let target = e.currentTarget
    let videoId = target.getAttribute('data-videoId')
    let title = target.getAttribute('data-title')
    let channelTitle = target.getAttribute('data-channel')
    let thumbnail = target.getAttribute('data-thumbnail')
    let description = target.getAttribute('data-description')
    if (model.upcomings.length === 0) {
      player.loadVideoById(videoId)
      actions.setCurrentTitle({currentTitle: title})
      actions.setCurrentChannel({currentChannel: channelTitle})
      actions.setCurrentDescription({currentDescription: description})
    }
    actions.setUpcoming({videoId, title, thumbnail, channelTitle, description})
  },
  setUpcoming: (model, {videoId, title, thumbnail, channelTitle, description}) => ({
    upcomings: model.upcomings.concat({videoId, title, thumbnail, channelTitle, description})
  }),
  handleUpcomingClick: (model, target, actions) => {
    let currentIndex = +target.getAttribute('data-index')
    let currentTitle = target.getAttribute('data-title')
    let currentChannel = target.getAttribute('data-channel')
    let currentDescription = target.getAttribute('data-description')
    actions.setCurrentIndex({currentIndex})
    actions.setCurrentTitle({currentTitle})
    actions.setCurrentChannel({currentChannel})
    actions.setCurrentDescription({currentDescription})
    player.loadVideoById(target.getAttribute('data-videoId'))
  },
  setCurrentIndex: (model, {currentIndex}) => ({ currentIndex }),
  setCurrentTitle: (model, {currentTitle}) => ({ currentTitle }),
  setCurrentChannel: (model, {currentChannel}) => ({ currentChannel }),
  setCurrentDescription: (model, {currentDescription}) => ({currentDescription}),
  setPlayState: (model, playState) => ({ playState }),
  playNext: (model, actions) => {
    actions.updateCurrentIndex(model)
    let index = model.currentIndex
    index++
    if (model.upcomings[index]) {
      player.loadVideoById(model.upcomings[index].videoId)
      actions.setCurrentTitle({currentTitle: model.upcomings[index].title})
      actions.setCurrentChannel({currentChannel: model.upcomings[index].channelTitle})
      actions.setCurrentDescription({currentDescription: model.upcomings[index].description})
    } else {
      player.loadVideoById(model.upcomings[0].videoId)
      actions.resetCurrentIndex(model)
      actions.setCurrentTitle({currentTitle: model.upcomings[0].title})
      actions.setCurrentChannel({currentChannel: model.upcomings[0].channelTitle})
      actions.setCurrentDescription({currentDescription: model.upcomings[0].description})
    }
  },
  updateCurrentIndex: (model) => ({ currentIndex: model.currentIndex + 1 }),
  resetCurrentIndex: (model) => ({ currentIndex: 0 }),
  deletePlayList: (model, e, actions) => {
    e.stopPropagation()
    let target = e.currentTarget
    let videoId = target.getAttribute('data-videoId')
    let index = +target.getAttribute('data-index')
    let upcomings = model.upcomings
    upcomings.map((upcoming, i) => {
      if (videoId === upcoming.videoId && index === i) {
        upcomings.splice(i, 1)
      }
    })
    if (index === model.currentIndex) {
      actions.playNext(actions)
    }
    actions.updateUpcomings(model, upcomings)
  },
  updateUpcomings: (model, {upcomings}) => ({ upcomings })
}

var player

app({
  model: {
    results: [],
    upcomings: [],
    currentIndex: 0,
    currentTitle: '',
    currentChannel: '',
    currentDescription: '',
    playerState: 'stoppped'
  },
  actions,
  subscriptions: [
    () => {
      player = YouTubePlayer('player', {
        playerVars: {
          rel: 0,
          showinfo: 0,
        },
      })
    },
    (_, actions) => {
      player.on('stateChange', e => {
        if (e.data == YT.PlayerState.PLAYING) {
          actions.setPlayState('playing')
        } else if (e.data == YT.PlayerState.PAUSED) {
          actions.setPlayState('paused')
        } else if (e.data == YT.PlayerState.ENDED) {
          actions.setPlayState('ended')
          actions.playNext(actions)
        }
      })
    },
    () => {
      document.querySelector('.SearchForm__input').focus()
    }
  ],
  view: (model, actions) =>
    <div class={model.upcomings.length === 0 ? 'App is-not-playing' : 'App is-playing'}>
      {Header(model, actions)}
      <div class="Main">
        <div class="Main__playlist">
        <div id="player" />
        <div class="CurrentInfo">
        {CurrentTitle(model)}
        {CurrentChannel(model)}
        {CurrentDescription(model)}
        </div>
        {PlayList(model, actions)}
      </div>
      <div class="Main__result">
        {SearchForm(model, actions)}
        {SearchResultsList(model, actions)}
      </div>
    </div>
  </div>
})
