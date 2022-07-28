# fcc-react-drum-machine
## freeCodeCamp Front End Libraries Project 3 - Build a Drum Machine

#### Requirements
1. There is an outer container with **id="drum-machine"**
2. Within #drum-machine, there is an element with **id="display"**
3. Within #drum-machine, there are **nine (9) clickable elements with class="drum-pad"**, 
**a unique id that describes the audio clip** the drum pad will be set up to trigger, and
an **inner text** that corresponds to one of the following keys on the keyboard **Q, WE, A, S, D, Z, X, C**
4. Within each .drum-pad, there should be an **HTML5 audio element which has a 
src attribute pointing to an audio clip**, with **class="clip"** and a corresponding
inner text corresponding to its parent .drump-pad (e.g. id="Q')
5. Clicking on a .drum-pad element, the audio clip contained in ints child audio
should be triggered
6. Pressing a trigger key associated with eadh .drump-pad, the audio clip contained
in its child audio element should be triggered
7. When .drum-pad is triggered, a string describing the associated audio clip is di
splayed as the inner text of the #display element.

#### Game Plan
1. App will have id of drum-machine.
2. The information regarding each audio clip will be store in a json file. Each file will be represented by an object with three properties: name, key and audio file.
3. Upon initial load, the app will fetch the aforementioned JSON file.
4. The data from the JSON file will serve as the basis for building each drum pad element. There will be a total of nine elements (9).
5. Each element will constructed as follows:
```
<div className="drum-pad">
    <audio id={item.name} className="clip" src={item.file}></audio>
    {item.name}
</div>
```
6. 