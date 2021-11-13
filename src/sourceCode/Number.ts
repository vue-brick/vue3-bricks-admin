export default `
<div class="number">
  <count-to
      :startVal="0"
      :endVal="12313"
      :duration="2000"
      :prefix="'00,'"
      v-bind="propsDataCode"
  />
</div>
//css
.number {
  width: 100%;
  height: 100px;
  font: 80px mNumbers;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 25px
}

`
