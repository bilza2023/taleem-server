<script>
// @ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from './Logo.svelte';
import {onMount,goto} from '$lib/util';

import chqLogin from "../../lib/loginFns/chqLogin";
import logout from "../../lib/loginFns/logout";


let isLogin = false;
onMount( async ()=>{
    // debugger;
    isLogin = chqLogin();
});

</script>
            <!-- ******************************** -->
<!-- decided not to use NavBar comp -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    
    <Logo />
    </div>
            <!-- ******************************** -->
            <!-- ******************************** -->
    <div class='flex'>
    {#if isLogin}

    <NavBtn title='Payment' icon = '🚀' url='/payment'/>
    <NavBtn title='Blog' icon ='📘' url='/blog'/>
      <NavBtn2 title='Logout' icon ='🚪' clk={logout}/>
    
    {:else}

    <NavBtn title='Blog' icon ='📘' url='/blog'/>
    <NavBtn title='Payment' icon = '🚀' url='/payment'/>
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    <NavBtn title='Signup' icon ='🔓'  url='/signup'/>
    {/if}
    </div>
</div><!--outer most div-->

