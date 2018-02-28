<template>
    <div>
    	<yd-flexbox style="background-color:#E4213F">
            <div style="margin:20px">
            	<img class="avatar" src="@/assets/avatar.jpg">
            </div>
            <div style="display:flex;margin:auto;margin-left:50px;color:white;font-size:18px">
            	网名
            </div>
        </yd-flexbox>
        <div style="background-color:#F5F5F5;height:20px"></div>
        <div>
	    	<yd-cell-group style="margin-bottom:0">
		        <yd-cell-item arrow>
		        	<yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
            		<span slot="left">我的订单</span>
		            <span slot="right"></span>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-grids-group :rows="4">
		        <yd-grids-item>
		            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
		            <span slot="text">待付款</span>
		        </yd-grids-item>
		        <yd-grids-item>
		            <yd-icon slot="icon" name="home" color="#FF685D"></yd-icon>
		            <span slot="text">待发货</span>
		        </yd-grids-item>
		        <yd-grids-item>
		            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
		            <span slot="text">待收货</span>
		        </yd-grids-item>
		        <yd-grids-item>
		            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
		            <span slot="text">待评价</span>
		        </yd-grids-item>
		    </yd-grids-group>
		</div>
		<div style="background-color:#F5F5F5;height:20px"></div>
		<yd-cell-group>
        <yd-cell-item arrow>
            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
            <span slot="left">交易管理</span>
        </yd-cell-item>

        <yd-cell-item arrow>
            <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
            <span slot="left">地址管理</span>
        </yd-cell-item>
    </yd-cell-group>
    </div>
</template>

<script type="text/babel">
    import Tab from '@/components/Tab'
    export default {
        components: { Tab }
    }
</script>

<style scoped>
	.avatar {
		border-radius: 50%;
		width: 100px;
		height:100px;
	}
	.yd-grids-item{
		position: initial;
	}
</style>