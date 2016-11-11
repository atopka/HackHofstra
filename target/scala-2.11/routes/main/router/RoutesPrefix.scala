
// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/Taylor/Programs/HackHofstra/conf/routes
// @DATE:Thu Nov 10 20:51:38 EST 2016


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
