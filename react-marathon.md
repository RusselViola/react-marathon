#### Getting Started

This exercise is designed to take you through creating a multi-component stateless app from the ground up, step by step, while collaborating on the creation of components.

## Setup

From your challenges directory, run the following:

```sh
$ et get react-marathon
$ cd react-marathon
$ npm install
$ webpack-dev-server
```
If you go to [localhost:8080][localhost-8080], there will be nothing displayed on the page and there should be no errors in your console.

### Step 1

The first step is to create the architecture for our list of playlists, of which the component will be named `PlaylistCollection` (trust me, this is better than `PlaylistList`). Let's create a `<div>` within our App constant in our `App.js` component. This div will contain a `PlaylistCollection` component that has not been created yet, but we will need to pass in `playlists` to the component from `data` in order to use them in our `PlaylistCollection` component through props.

This portion of the app will take a third of the page, so be sure to give the `<div>` an appropriate class name. (Remember Foundation?)

### Step 2

Let's create our `PlaylistCollection.js` component in our `src/components` folder of our application. This component will take in `props` passed down from our `App.js` component. We can now use the data from `playlists` to map out individual `Playlist` components (which we have not created yet) and assign it to a `playlists` React fragment. This `PlaylistList.js` component will return a <ul> element that solely returns the `playlists` fragment.

Don't forget to import react and export PlaylistList from this component!

### Step 3
We're going to render a few `Playlist` components in our `PlaylistCollection` component, so now let's build the structure of our `Playlist` component. Create your `/src/components/Playlist.js` file and create a constant `Playlist` that will take in `props` and return the name of the playlist as an `<li>` element.

**Note: After this step, you should see your Playlists listed in localhost:8080**

### Step 4
Now let's work on getting our songs to appear for a given playlist. Let's go back to `src/components/App.js` and prepare our `SongList` component, which will be similarly structured like our `PlaylistCollection` component.

### Step 5
Continuing with our list of songs, let's now create our `SongList` component. This will also take in props given from `App.js`, map them into `Song` components, and return a `<ul>` element with the list of our `Song` components.

### Step 6
Now let's create our `Song` component. This will be very similar to our `Playlist` component, taking in props and returning an `<li>` element with the respective song name.

**Note: After this step, you should see your Songs listed in localhost:8080**

### Step 7
Finally, let's work on showing the details for a selected song. Using the `songs` and `selectedSongId` in our `App.js` file, let's prepare another `<div>`, but this time, only pass in the data for a `SelectedSong`.

### Step 8
We have the `App.js` file set up to take in our `SelectedSong` component. Create the `.js` file for the component which will return a list of `<li>` elements containing all the information for the selected song within a `<ul>` element.

**Note: After this step, you should see your Selected Song listed in localhost:8080**

### Step 9
We need to visually see which playlist is being played. Starting from the `App.js` file, pass in the `selectedPlaylistId` to the `PlaylistList` component and then through to the `Playlist` component (We'll need to assign the `id` of a playlist to an `id` property of a given Playlist component, we unfortunately cannot gain access to the key). Use the variable to modify the className of the `<li>` component so that it is blank `""` for the unselected playlist and `"selected"` for the selected playlist.

### Step 10
Also, let's have the selected song have an asterisk display before the song name in the `SongList` component. Let's do this by passing in the `selectedSongId` into our `SongList` component, and then modifying name of the song accordingly in our `SongList.js` file. Be sure to use a new variable so that the song name is not permanently modified.

### Step 11
Last but not least, let's add a super cool button to each of our songs on our SongList. This button will alert the user, `"Song was clicked"`, well, when a song is clicked on.
