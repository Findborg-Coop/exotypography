<template lang="jade">
div.et-list
  slot

</template>

<style type="stylus">
.et-list {
    display: block;
    padding: 8px 0;
    list-style: none;
}
.et-list__item, .et-list__item .et-list__item-primary-content {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.et-list__item {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: .04em;
    line-height: 1;
    min-height: 48px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding: 16px;
    cursor: default;
    color: rgba(0, 0, 0, .87);
    overflow: hidden;
}
.et-list__item .et-list__item-primary-content {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex-grow: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    text-decoration: none;
}
.et-list__item .et-list__item-primary-content .et-list__item-icon {
    margin-right: 32px;
}
.et-list__item .et-list__item-primary-content .et-list__item-avatar {
    margin-right: 16px;
}
.et-list__item .et-list__item-secondary-content {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-left: 16px;
}
.et-list__item .et-list__item-secondary-content .et-list__item-secondary-action label {
    display: inline;
}
.et-list__item .et-list__item-secondary-content .et-list__item-secondary-info {
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    color: rgba(0, 0, 0, .54);
}
.et-list__item .et-list__item-secondary-content .et-list__item-sub-header {
    padding: 0 0 0 16px;
}
.et-list__item-icon, .et-list__item-icon.material-icons {
    height: 24px;
    width: 24px;
    font-size: 24px;
    box-sizing: border-box;
    color: #757575;
}
.et-list__item-avatar, .et-list__item-avatar.material-icons {
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #757575;
    font-size: 40px;
    color: #fff;
}
.et-list__item--two-line {
    height: 72px;
}
.et-list__item--two-line .et-list__item-primary-content {
    height: 36px;
    line-height: 20px;
    display: block;
}
.et-list__item--two-line .et-list__item-primary-content .et-list__item-avatar {
    float: left;
}
.et-list__item--two-line .et-list__item-primary-content .et-list__item-icon {
    float: left;
    margin-top: 6px;
}
.et-list__item--two-line .et-list__item-primary-content .et-list__item-secondary-content {
    height: 36px;
}
.et-list__item--two-line .et-list__item-primary-content .et-list__item-sub-title {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 18px;
    color: rgba(0, 0, 0, .54);
    display: block;
    padding: 0;
}
.et-list__item--three-line {
    height: 88px;
}
.et-list__item--three-line .et-list__item-primary-content {
    height: 52px;
    line-height: 20px;
    display: block;
}
.et-list__item--three-line .et-list__item-primary-content .et-list__item-avatar, .et-list__item--three-line .et-list__item-primary-content .et-list__item-icon {
    float: left;
}
.et-list__item--three-line .et-list__item-secondary-content {
    height: 52px;
}
.et-list__item--three-line .et-list__item-text-body {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 18px;
    height: 52px;
    color: rgba(0, 0, 0, .54);
    display: block;
    padding: 0;
}
</style>