import React from 'react'
import Hero from './hero/index'
import HeroCarousel from './heroCarousel/index'
import Collection from './collection/index'
import Names from './names/index'
import Explore from './explore/index'
import Search from './search/index'
import Logo from './logos/index'
import Instasquad from './instasquad/index'
function index() {
  return (
    <>
    <Hero/>
    <HeroCarousel/>
    <Collection/>
    <Names/>
    <Explore/>
    <Search/>
    <Logo/>
    <Instasquad/>
    </>
  )
}

export default index