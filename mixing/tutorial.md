# RGB Mixing	
This page lets you play with the RGB scheme, combining red, green, and blue light to make any color.
The sliders control the red green and blue lights, each ranging from 0 (off) to 255 (maximum). 

## Pure Red Light

<f-slider-data :sliders="[
   { title: 'Red', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(data.value[0],0,0)"/>
  </f-scene>
</f-slider-data>

## Pure Green Light

<f-slider-data :sliders="[
   { title: 'Green', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(0,data.value[0],0)"/>
  </f-scene>
</f-slider-data>

## Pure Blue Light

<f-slider-data :sliders="[
   { title: 'Blue', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(0,0,data.value[0])"/>
  </f-scene>
</f-slider-data>


## Grey Light
The red, green and blue lights have equal value.

<f-slider-data :sliders="[
   { title: 'Gray', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(data.value[0],data.value[0],data.value[0])"/>
  </f-scene>

</f-slider-data>

## Light

<f-rgb-data red="100" green="100" blue="100">
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(...data.value)" />
  </f-scene>
</f-rgb-data>


