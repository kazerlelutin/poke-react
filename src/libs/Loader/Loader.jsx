import classes from './Loader.module.css';

export default function Loader(){
    return <div class={classes.container}>
    <div class={classes.pokeball}>
      <div class={classes.pokeballPartBottom} />
      <div class={classes.pokeballShadow} />
      <div class={classes.belt} />
      <div class={classes.beltLoop} />
      <div class={classes.beltBg} />
      <div class={classes.beltLoopInside} />
      <div class={classes.beltLoopButton} />
      <div class={classes.pokeballLight} />
    </div>
    <div class={classes.pokeballGroundShadow} />
  </div>
}