returnTypeOf = function(object){
  return Object.prototype.toString.apply(object)
}

describe("NameSpace", function(){
  it("is defined", function(){
    expect(BootMap).toBeDefined()
  }),

  it("has a controller constructor function", function(){
    expect(BootMap.Controller).toBeDefined()
  }),

  it("has a view constructor function", function(){
    expect(BootMap.View).toBeDefined()
  })
})