class SortedList {
  constructor(items,length) {
    this.items= []
    this.length= this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if(pos>=this.items.length)
    {
      throw new Error('OutOfBounds');
    }else{
    return this.items[pos]
    }
  }

  max() 
  {
    if(this.items.length==0)
    {
      throw new Error('EmptySortedList');
    }
    let max = -Infinity
    for(let i = 0;i<this.items.length;i++)
    {
      if(this.items[i]>max)
      {
        max=this.items[i]
      }
    }
  
    return max
  }

  min() 
  {
    if(this.items.length==0)
    {
      throw new Error('EmptySortedList');
    }

    let min = Infinity
    for(let i = 0;i<this.items.length;i++)
    {
      if(this.items[i]<min)
      {
        min=this.items[i]
      }
    }
    return min
  }

  sum() 
  { let sum = 0;
    for (let i =0; i<this.items.length;i++)
    {
      sum+=this.items[i]
    }
    return sum;
  }

  avg() 
  {
    if(this.length===0)
    {
      throw new Error('EmptySortedList');
    }
    else{
    return this.sum()/this.length
    }
  }
}

module.exports = SortedList;
