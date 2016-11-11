
// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/Jennifer/Files/Amy/HackHofstra/conf/routes
// @DATE:Thu Nov 10 23:32:31 EST 2016


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
