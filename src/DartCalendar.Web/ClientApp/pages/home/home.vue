<template>
  <div>
    <div class="row search-row">
      <div class="col-sm">
        <div>
          <form class="form form-inline">
            <input input="text" class="form-control" placeholder="" />
            <button class="btn btn-success">Search</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-10">
       <div  style="background-color: Red;">
        <div v-for="dartEvent in dartEvents" v-bind:key="dartEvent.id">
            <div>{{dartEvent.name}}</div>
          </div>
       </div>
      </div>
      <div class="col-sm-2">
        <div  style="background-color: Green;">
        Event Calendar
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./home.ts"></script>
<style scoped lang="scss">
.search-row {
  padding-top: 5px;
  padding-bottom: 10px;
}

.border-it {
  border: 1px gray solid;
}
</style>