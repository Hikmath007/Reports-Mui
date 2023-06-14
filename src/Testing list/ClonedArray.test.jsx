const ClonedArray=require('./ClonedArray')
test('properly runs an Array',()=>{
    const array=[1,2,3]
    expect(ClonedArray(array)).toEqual(array)
})