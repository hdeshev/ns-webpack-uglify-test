
    (function(t){function NativeScriptActivity(){
        return t.call(this),global.__native(this)
    }
        return __extends(NativeScriptActivity,t),NativeScriptActivity.prototype.onCreate=function(e){this._callbacks||r.setActivityCallbacks(this),this._callbacks.onCreate(this,e,t.prototype.onCreate)}
        ,NativeScriptActivity.prototype.onSaveInstanceState=function(e){this._callbacks.onSaveInstanceState(this,e,t.prototype.onSaveInstanceState)}
        ,NativeScriptActivity.prototype.onStart=function(){this._callbacks.onStart(this,t.prototype.onStart)}
        ,NativeScriptActivity.prototype.onStop=function(){this._callbacks.onStop(this,t.prototype.onStop)}
        ,NativeScriptActivity.prototype.onDestroy=function(){this._callbacks.onDestroy(this,t.prototype.onDestroy)}
        ,NativeScriptActivity.prototype.onBackPressed=function(){this._callbacks.onBackPressed(this,t.prototype.onBackPressed)}
        ,NativeScriptActivity.prototype.onRequestPermissionsResult=function(t,e,n){this._callbacks.onRequestPermissionsResult(this,t,e,n,void 0)}
        ,NativeScriptActivity.prototype.onActivityResult=function(e,n,r){this._callbacks.onActivityResult(this,e,n,r,t.prototype.onActivityResult)}
        ,NativeScriptActivity=__decorate([JavaProxy("com.tns.NativeScriptActivity")],NativeScriptActivity)})(android.app.Activity)}
