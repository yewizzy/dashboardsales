<template>
  <div class=" d-flex main-container">
    <div class="sidebar">
      <div class="header-box px-2 pt-3 pb-4">
        <h1 class="fs-4"><span class="bg-white text-dark rounded shadow px-2 me-2">BL</span><span class="text-white"> Sales</span></h1>
      </div>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class=""></i>Dashboard</a></li>
          <li><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class=""></i>User</a></li>
          <li><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class=""></i>Sales</a></li>
          <li><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class=""></i>Report</a></li>

        </ul>
    <hr class="h-color mx-2">
    <ul class="list-unstyled px-2">
      <li class=""><a href="#"><i class=""></i>Settings</a></li>
    </ul>
    </div>
      <div class="content">
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Business name</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Profile</a>
        </li>
       
        
        
      </ul>
      
    </div>
  </div>
</nav>


      </div>
  </div>
</template>





<style scoped>
body{
  background-color:#eee ;
}
.sidebar{
  background: #2A4142;
  width: 30%;
}
.sidebar li.active{
  background: #eee;
  border-radius: 8px;
}
.sidebar li a{
  color: #70A95E;
}
.content{
  min-height: 100vh;
  width: 100%;
}
hr .h-color{
background: #eee;
}
</style>