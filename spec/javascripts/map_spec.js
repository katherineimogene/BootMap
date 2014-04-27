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

describe("Controller", function(){
  beforeEach(function(){
    controller = new BootMap.Controller
    mapStub = {}
    osmStub = {}
  })

  it("has a new map function", function(){
    expect(controller.newMap()).toBeDefined()
  }),

  it("creates a new map object", function(){
    expect(returnTypeOf(controller.newMap())).toBe(returnTypeOf(mapStub))
  }),

  it("initializes an OpenStreetMap layer", function(){
    expect(returnTypeOf(controller.osmInitializer())).toBe(returnTypeOf(osmStub))
  })

})