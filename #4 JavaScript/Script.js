			var start, end;
			
			function randomcolor()
			{
				var code=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
				var color="#";
				for(var i=0;i<6;i++)
					{color+=code[Math.floor(Math.random()*16)];}
				return color;
			}
			
			function appear()
			{
				setTimeout(	function()
					{
					if(Math.random()<0.5) document.getElementById("shape").style.borderRadius="50%";
					else	document.getElementById("shape").style.borderRadius=0;
					var wid=Math.random()*200+50;
					document.getElementById("shape").style.height=wid;
					document.getElementById("shape").style.width=wid;
					document.getElementById("shape").style.top=Math.random()*450;
					document.getElementById("shape").style.left=Math.random()*1100;
					document.getElementById("shape").style.backgroundColor=randomcolor();
					document.getElementById("shape").style.display="block";
					start=new Date().getTime();
					}
				,Math.random()*3000);
			}
			
			appear();
			
			document.getElementById("shape").onclick=function()
				{
				end=new Date().getTime();
				document.getElementById("shape").style.display="none";
				document.getElementById("disptime").innerHTML= (end-start)/1000 + " s";
				appear();
				}