module.exports = function multiply(first, second)
{
  	if(second.length > first.length)
	{
		var temp = second;
		second = first;
		first = temp;
	}
	
	var firstArr = first.split('');
	var secondArr = second.split('');
	var multiply = 0;
	var memory = 0;
	var summands = [];

	var i = secondArr.length - 1;
	while(i >= 0)
	{
		var str = new String();
		memory = 0;
		
		var j = firstArr.length - 1;
		while(j >= 0)
		{
			multiply = secondArr[i] * firstArr[j] + memory;
			
			str += String(multiply % 10);
			
			if(multiply < 10)
			{
				memory = 0;
			}
			else
			{
				memory = Math.floor(multiply / 10);
			}
			
			j--;
		}
		if(memory != 0)
		{
			str += String(memory);
		}
		
		var arr = str.split('');
		arr.reverse();
		str = arr.join('');
		
		summands.push(str);
		
		i--;
	}
	
	
	var currentStr = summands[0].split('');
	var sum = 0;
	var flag = false;
	
	for(var i = 0; i < summands.length - 1; i++)
	{
		var prev = summands[i].split('');
		var next = summands[i+1].split('');
		memory = 0;
		
		if((prev.length == next.length && flag == false) || (prev.length == next.length - 1 && flag == true))
		{
			for(var j = prev.length - 1; j >= 0; j--)
			{
				if(next[j+1] == undefined)
				{
					continue;
				}
				
				sum = Number(currentStr[j]) + Number(next[j+1]) + memory;
				
				currentStr[j] = String(sum % 10);
					
				if(sum < 10)
				{
					memory = 0;
				}
				else
				{
					memory = 1;
				}
			}
			
			if (memory == 1)
			{
				var x = Number(next[0]) + memory;
					
				if (x < 10)
				{
					currentStr.unshift(String(x));
					flag = false;
				}
				else
				{
					currentStr.unshift('1', '0');
					flag = true;
				}
			}
			else
			{
				currentStr.unshift(next[0]);
				flag = false;
			}
		}
		
		else if(prev.length == next.length - 1 && flag == false)
		{
			for(var j = prev.length - 1; j >= 0; j--)
			{
				if(next[j+2] == undefined)
				{
					continue;
				}
				
				sum = Number(currentStr[j]) + Number(next[j+2]) + memory;
				
				currentStr[j] = String(sum % 10);
					
				if(sum < 10)
				{
					memory = 0;
				}
				else
				{
					memory = 1;
				}
			}
			
			if (memory == 1)
			{
				var x = Number(next[1]) + memory;
					
				if (x < 10)
				{
					currentStr.unshift(next[0], String(x));
					flag = false;
				}
				else
				{
					currentStr.unshift('0');
					
					var y = Number(next[0]) + memory;
					
					if(y < 10)
					{
						currentStr.unshift(String(y));
						flag = false;
					}
					else
					{
						currentStr.unshift('1', '0');
						flag = true;
					}
				}
			}
			else
			{
				currentStr.unshift(next[0], next[1]);
				flag = false;
			}
		}
		
		else 
		{
			for(var j = prev.length - 1; j >= 0; j--)
			{
				if(next[j] == undefined)
				{
					continue;
				}
				
				sum = Number(currentStr[j]) + Number(next[j]) + memory;
				
				currentStr[j] = String(sum % 10);
					
				if(sum < 10)
				{
					memory = 0;
				}
				else
				{
					memory = 1;
				}
			}
			
			if (memory == 1)
			{
				currentStr.unshift('1');
				flag = true;
			}
			else
			{
				flag = false;
			}
		}
	}

	return currentStr.join('');
}
