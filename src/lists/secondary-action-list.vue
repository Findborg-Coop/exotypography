<template>
<li class="et-list__item">
    <span class="et-list__item-primary-content">
      <i class="material-icons  et-list__item-avatar"><slot name="icon">person</slot></i>
      <slot>Your list content.</slot>
    </span>
    <span class="et-list__item-secondary-action">
     <slot name="action-icon"> <a href="#"><i class="material-icons">star</i></a></slot>
    </span>
  </li>


</template>

<style>
.demo-list-action {
  width: 500px;
}
</style>
