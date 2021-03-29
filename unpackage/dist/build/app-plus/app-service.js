var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'back-body'])
Z([[7],[3,'backShowFlag']])
Z([[2,'=='],[[7],[3,'pageNameFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'showFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-calendar-item__weeks-box data-v-ece5bd58']],[[2,'?:'],[[6],[[7],[3,'weeks']],[3,'disable']],[1,'uni-calendar-item--disable'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'calendar']],[3,'fullDate']],[[6],[[7],[3,'weeks']],[3,'fullDate']]],[[6],[[7],[3,'weeks']],[3,'isDay']]],[1,'uni-calendar-item--isDay'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'calendar']],[3,'fullDate']],[[6],[[7],[3,'weeks']],[3,'fullDate']]],[[2,'!'],[[6],[[7],[3,'weeks']],[3,'isDay']]]],[1,'uni-calendar-item--checked'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'weeks']],[3,'multiple']],[1,'uni-calendar-item--multiple'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'choiceDate']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'weeks']]]]]]]]]]])
Z([3,'uni-calendar-item__weeks-box-item data-v-ece5bd58'])
Z([[2,'&&'],[[7],[3,'selected']],[[6],[[7],[3,'weeks']],[3,'extraInfo']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'lunar']]],[[2,'!'],[[6],[[7],[3,'weeks']],[3,'extraInfo']]]],[[6],[[7],[3,'weeks']],[3,'isDay']]])
Z([[2,'&&'],[[7],[3,'lunar']],[[2,'!'],[[6],[[7],[3,'weeks']],[3,'extraInfo']]]])
Z([[2,'&&'],[[6],[[7],[3,'weeks']],[3,'extraInfo']],[[6],[[6],[[7],[3,'weeks']],[3,'extraInfo']],[3,'info']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'uni-calendar data-v-6c1ed70b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'clean']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'insert']]],[[7],[3,'show']]])
Z([[2,'||'],[[7],[3,'insert']],[[7],[3,'show']]])
Z([[4],[[5],[[5],[[5],[1,'uni-calendar__content data-v-6c1ed70b']],[[2,'?:'],[[2,'!'],[[7],[3,'insert']]],[1,'uni-calendar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'aniMaskShow']],[1,'uni-calendar--ani-show'],[1,'']]]])
Z([[2,'!'],[[7],[3,'insert']]])
Z([3,'weekIndex'])
Z([3,'item'])
Z([[7],[3,'weeks']])
Z(z[7])
Z([3,'weeksIndex'])
Z([3,'weeks'])
Z([[7],[3,'item']])
Z(z[11])
Z([3,'__l'])
Z(z[0])
Z([[7],[3,'calendar']])
Z([3,'data-v-6c1ed70b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'choiceDate']]]]]]]]])
Z([[7],[3,'lunar']])
Z([[7],[3,'selected']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'138a9022-1-'],[[7],[3,'weekIndex']]],[1,'-']],[[7],[3,'weeksIndex']]])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'1f013760-1'])
Z([[2,'=='],[[7],[3,'errorFlag']],[1,0]])
Z([3,'chooseLine-block'])
Z([[2,'=='],[[7],[3,'showProvinceFlag']],[1,1]])
Z(z[8])
Z([3,'picker-block'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'pickerHeight']]],[1,';']])
Z([3,'select-block'])
Z([[2,'>'],[[6],[[7],[3,'provinceList']],[3,'length']],[1,0]])
Z(z[13])
Z([[2,'>'],[[6],[[7],[3,'companyList']],[3,'length']],[1,0]])
Z(z[15])
Z([[2,'>'],[[6],[[7],[3,'substationList']],[3,'length']],[1,0]])
Z(z[17])
Z([[2,'>'],[[6],[[7],[3,'lineList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'53540bf0-1'])
Z([3,'condition-block'])
Z([[2,'=='],[[7],[3,'chooseDateTypeFlag']],[1,1]])
Z(z[0])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]]])
Z([3,'calendar'])
Z([1,false])
Z([1,true])
Z([3,'53540bf0-2'])
Z([[2,'=='],[[7],[3,'chooseDateFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'chooseLineFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-block'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'basicInfo']],[3,'state']],[1,1]],[[2,'!='],[[6],[[7],[3,'basicInfo']],[3,'flow']],[[2,'-'],[1,1]]]])
Z(z[1])
Z([3,'data-third-block'])
Z([[7],[3,'thirdName']])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'0e0cfd60-1'])
Z([[2,'=='],[[7],[3,'errorFlag']],[1,0]])
Z(z[0])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]]])
Z([3,'calendar'])
Z([1,false])
Z([1,true])
Z([3,'0e0cfd60-2'])
Z(z[0])
Z([3,'line'])
Z([3,'ec-canvas vue-ref'])
Z([3,'lineChart'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'picHeight']]],[1,';']])
Z([3,'0e0cfd60-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'312a6f38-1'])
Z([3,'content-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([3,'choose-block'])
Z([[2,'=='],[[7],[3,'chooseFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'chooseFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'6bb5fe80-1'])
Z([3,'setNew-block'])
Z([[2,'=='],[[7],[3,'seeFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'seeAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'41ac91e0-1'])
Z([3,'text_block'])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'85a5e400-1'])
Z([3,'content-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'17902cae-1'])
Z([3,'text_block'])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'history-block'])
Z([[2,'>'],[[6],[[7],[3,'statisticsList']],[3,'length']],[1,0]])
Z([3,'__e'])
Z(z[2])
Z([3,'sroll-block'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'queryStatistics']]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[1,'touchEnd']]]]]]]]])
Z([[7],[3,'scrollFlag']])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollHeight']]],[1,';']])
Z([3,'__i0__'])
Z([3,'statistics'])
Z([[7],[3,'statisticsList']])
Z(z[2])
Z([3,'sroll-block-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpToTerminalHistory']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'statisticsList']],[1,'']],[[7],[3,'__i0__']]],[1,'time']]]]]]]]]]]]]]])
Z([3,'sroll-block-content-line-text'])
Z([3,'true'])
Z([[2,'!='],[[6],[[7],[3,'statistics']],[3,'eventDescribe']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'statistics']],[3,'steadyDescribe']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^callback']],[[4],[[5],[[4],[[5],[1,'callback']]]]]]]]])
Z([3,'loading'])
Z([1,true])
Z([1,1])
Z([3,'8dd740cc-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-body'])
Z([3,'data-tab'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,1]])
Z([[2,'!='],[[7],[3,'transientShowNum']],[1,0]])
Z([3,'__e'])
Z([3,'tab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,1]]]]]]]]]]])
Z(z[3])
Z([[2,'=='],[[7],[3,'tabNum']],[1,2]])
Z([[2,'!='],[[7],[3,'steadyShowNum']],[1,0]])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,2]]]]]]]]]]])
Z(z[9])
Z([[2,'=='],[[7],[3,'tabNum']],[1,3]])
Z([[2,'!='],[[7],[3,'terminalShowNum']],[1,0]])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,3]]]]]]]]]]])
Z(z[15])
Z([[2,'=='],[[7],[3,'pullFlag']],[1,1]])
Z(z[4])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTabBySwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollHeight']]],[1,';']])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'transient-block'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'transientTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'transientTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'transientTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[26])
Z([[2,'>'],[[6],[[7],[3,'transientList']],[3,'length']],[1,0]])
Z(z[4])
Z(z[4])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'queryTransientList']]]]]]]],[[4],[[5],[[5],[1,'lower-threshold']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'transientScrollMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollFlag']])
Z(z[26])
Z([3,'transientListIndex'])
Z([3,'transient'])
Z([[7],[3,'transientList']])
Z(z[4])
Z([3,'transient-event-block'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpToTransientDetails']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[[7],[3,'transientListIndex']]],[1,'$2']]]],[[4],[[5],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'transientList']],[1,'']],[[7],[3,'transientListIndex']]],[1,'eventDetailIndex']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'transientList']],[1,'']],[[7],[3,'transientListIndex']]],[1,'eventMsgIndex']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'transientList']],[1,'']],[[7],[3,'transientListIndex']]],[1,'state']]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'transient']],[3,'state']],[1,0]])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[30])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'steadyTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'steadyTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'steadyTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[26])
Z([[2,'>'],[[6],[[7],[3,'steadyList']],[3,'length']],[1,0]])
Z(z[4])
Z(z[4])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'querySteadyList']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'steadyScrollMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[38])
Z(z[26])
Z([3,'steadyListIndex'])
Z([3,'steady'])
Z([[7],[3,'steadyList']])
Z(z[4])
Z([3,'steady-event-block'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpToSteady']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[[7],[3,'steadyListIndex']]],[1,'$2']]]],[[4],[[5],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'steadyList']],[1,'']],[[7],[3,'steadyListIndex']]],[1,'showTime']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'steadyList']],[1,'']],[[7],[3,'steadyListIndex']]],[1,'steadyIndex']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'steadyList']],[1,'']],[[7],[3,'steadyListIndex']]],[1,'state']]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'steady']],[3,'state']],[1,0]])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[30])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'terminalTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'terminalTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'terminalTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[26])
Z([[2,'>'],[[6],[[7],[3,'terminalList']],[3,'length']],[1,0]])
Z(z[4])
Z(z[4])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'queryTerminalList']]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'terminalScrollMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[38])
Z(z[26])
Z([3,'terminalListIndex'])
Z([3,'terminal'])
Z([[7],[3,'terminalList']])
Z(z[4])
Z(z[63])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpToTerminal']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[[7],[3,'terminalListIndex']]],[1,'$2']]]],[[4],[[5],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'terminalList']],[1,'']],[[7],[3,'terminalListIndex']]],[1,'showTime']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'terminalList']],[1,'']],[[7],[3,'terminalListIndex']]],[1,'devMsgIndex']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'terminalList']],[1,'']],[[7],[3,'terminalListIndex']]],[1,'state']]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'terminal']],[3,'state']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'5e722040-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([[7],[3,'backShowFlag']])
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'showFlag']])
Z([3,'35a7246c-1'])
Z([3,'content-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'loginType']],[1,1]])
Z([[2,'=='],[[7],[3,'seeFlag']],[1,1]])
Z(z[8])
Z([[2,'&&'],[[2,'=='],[[7],[3,'vercodeFlag']],[1,0]],[[2,'=='],[[7],[3,'loginType']],[1,0]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'vercodeFlag']],[1,1]],[[2,'=='],[[7],[3,'loginType']],[1,0]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'vercodeFlag']],[1,0]],[[2,'=='],[[7],[3,'loginType']],[1,1]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'vercodeFlag']],[1,1]],[[2,'=='],[[7],[3,'loginType']],[1,1]]])
Z([[2,'=='],[[7],[3,'loginType']],[1,0]])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lower-block'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToModifyPassword']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'../../static/pic/modify_password.png'])
Z([3,'修改密码'])
Z([3,'8e55f700-1'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToModifyUserPhoneNum']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'../../static/pic/change_phoneNum.png'])
Z([3,'账号绑定手机号码更换'])
Z([3,'8e55f700-2'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToUserAgreement']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'../../static/pic/user_agreement.png'])
Z([3,'用户协议'])
Z([3,'8e55f700-3'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToSystemIntroduce']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'../../static/pic/sys_introduce.png'])
Z([3,'系统介绍'])
Z([3,'8e55f700-4'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToCompanyIntroduce']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'../../static/pic/company_introduce.png'])
Z([3,'公司简介'])
Z([3,'8e55f700-5'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToSetNewMessage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'../../static/pic/set_new_message.png'])
Z([3,'新消息提醒'])
Z([3,'8e55f700-6'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToUs']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'../../static/pic/inner_buy.png'])
Z([3,'关于我们'])
Z([3,'8e55f700-7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'a7af84c0-1'])
Z([3,'text_block'])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'508263a4-1'])
Z([3,'setNew-block'])
Z([[2,'=='],[[7],[3,'seeFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'seeAgainFlag']],[1,1]])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'c62332c0-1'])
Z([3,'text_block'])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'nextFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'87c82f78-1'])
Z([3,'setNew-block'])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'e9bbf18c-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTabBySwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'swiperHeight']]],[1,';']])
Z([3,'steady-block'])
Z(z[0])
Z([3,'sroll-block-line-one'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToConditionSteady']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'sroll-block-line-one-text'])
Z([[2,'!='],[[7],[3,'steadyDate']],[1,'申请']])
Z(z[9])
Z([[2,'=='],[[7],[3,'steadyDate']],[1,'申请']])
Z([3,'apply-line'])
Z([[2,'=='],[[7],[3,'typesIndex']],[1,0]])
Z([[2,'=='],[[7],[3,'typesIndex']],[1,1]])
Z([[2,'>'],[[6],[[7],[3,'steadyList']],[3,'length']],[1,0]])
Z(z[0])
Z(z[0])
Z([3,'scroll-view-block'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'querySteadyList']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'setScrollFlag']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollFlag']])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollHeight']]],[1,';']])
Z([3,'__i0__'])
Z([3,'steady'])
Z([[7],[3,'steadyList']])
Z([[2,'=='],[[6],[[7],[3,'steady']],[3,'state']],[1,1]])
Z([3,'transient-block'])
Z(z[0])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpToConditionTransient']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[8])
Z([[2,'!='],[[7],[3,'transientDate']],[1,'申请']])
Z(z[31])
Z([[2,'=='],[[7],[3,'transientDateChoose']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'userInfo']],[3,'roleCode']],[1,0]])
Z([[2,'=='],[[7],[3,'transientDate']],[1,'申请']])
Z(z[12])
Z(z[13])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'403dbaac-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'7293da20-1'])
Z([3,'setNew-block'])
Z([[2,'=='],[[7],[3,'seeFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'seeAgainFlag']],[1,1]])
Z([3,'phone-block'])
Z([[2,'=='],[[7],[3,'resetFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'sendAgainFlag']],[1,1]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,0]])
Z([[2,'=='],[[7],[3,'doneFlag']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'133a9744-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'07b63420-1'])
Z([3,'__e'])
Z([[7],[3,'current']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTabBySwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollHeight']]],[1,';']])
Z(z[0])
Z([3,'line'])
Z([3,'ec-canvas vue-ref'])
Z([3,'lineChart'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'picHeight']]],[1,';']])
Z([3,'07b63420-2'])
Z(z[0])
Z([3,'line2'])
Z(z[12])
Z([3,'lineChart2'])
Z(z[14])
Z([3,'07b63420-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'5f597c40-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'c22fdec4-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'e2f7a684-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'98dcc080-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'0618e19c-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'759b550e-1'])
Z([[2,'=='],[[7],[3,'errorFlag']],[1,0]])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollHeight']]],[1,';']])
Z([[2,'>'],[[6],[[6],[[7],[3,'statisticsDetail']],[3,'eventInfo']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'steadyTargetList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'07a1dec0-1'])
Z([[2,'=='],[[7],[3,'errorFlag']],[1,0]])
Z(z[0])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]]])
Z([3,'calendar'])
Z([1,false])
Z([1,true])
Z([3,'07a1dec0-2'])
Z(z[0])
Z([3,'line'])
Z([3,'ec-canvas vue-ref'])
Z([3,'lineChart'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'picHeight']]],[1,';']])
Z([3,'07a1dec0-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'1abc17d8-1'])
Z([3,'__i0__'])
Z([3,'dev'])
Z([[7],[3,'devStatusList']])
Z([3,'terminal-status-all-each-block'])
Z([[2,'=='],[[6],[[7],[3,'dev']],[3,'comInfo']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'dev']],[3,'comInfo']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'35f97d40-1'])
Z([[2,'=='],[[7],[3,'errorFlag']],[1,0]])
Z([[2,'>'],[[7],[3,'backNumber']],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[2,'!='],[[7],[3,'sagReason']],[1,null]],[[2,'!='],[[7],[3,'sagReason']],[1,'']]],[[2,'!='],[[7],[3,'sagReason']],[[7],[3,'undefind']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([[7],[3,'showFlag']])
Z([3,'3e6f5010-1'])
Z([[6],[[7],[3,'wave']],[3,'instantWaveUrl']])
Z([[6],[[7],[3,'wave']],[3,'rmsWaveUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'pageName']])
Z([[7],[3,'pageNameFlag']])
Z([3,'35f45240-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__l'])
Z([[7],[3,'errorMsg']])
Z([[7],[3,'showFlag']])
Z([3,'7ccfe8de-1'])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^valueList']],[[4],[[5],[[4],[[5],[1,'bindKeyEvent']]]]]]]]])
Z([3,'7ccfe8de-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/back.wxml','./components/keyboard.wxml','./components/loading/loading.wxml','./components/mpvue-echarts/src/echarts.wxml','./components/personalModule.wxml','./components/uni-calendar/uni-calendar-item.wxml','./components/uni-calendar/uni-calendar.wxml','./components/xuan-loading/xuan-loading.wxml','./pages/chooseLine/chooseLine.wxml','./pages/companyIntroduce/companyIntroduce.wxml','./pages/condition/condition.wxml','./pages/data/data.wxml','./pages/dataIntegrityDetails/dataIntegrityDetails.wxml','./pages/fastLogin/fastLogin.wxml','./pages/fastLoginSetPassword/fastLoginSetPassword.wxml','./pages/fastLoginVercode/fastLoginVercode.wxml','./pages/forgetPassword/forgetPassword.wxml','./pages/forgetPasswordVercode/forgetPasswordVercode.wxml','./pages/history/history.wxml','./pages/index/index.wxml','./pages/information/information.wxml','./pages/levelUp/levelUp.wxml','./pages/login/login.wxml','./pages/me/me.wxml','./pages/modifyPassword/modifyPassword.wxml','./pages/modifyPasswordSetpassword/modifyPasswordSetpassword.wxml','./pages/modifyUserPhoneNum/modifyUserPhoneNum.wxml','./pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.wxml','./pages/myApply/myApply.wxml','./pages/preview/preview.wxml','./pages/privacyAgreement/privacyAgreement.wxml','./pages/report/report.wxml','./pages/setNewMessage/setNewMessage.wxml','./pages/setNewPassword/setNewPassword.wxml','./pages/setting/setting.wxml','./pages/spectrum/spectrum.wxml','./pages/steady/steady.wxml','./pages/steadyDetails/steadyDetails.wxml','./pages/steadyIndex/steadyIndex.wxml','./pages/systemIntroduce/systemIntroduce.wxml','./pages/terminal/terminal.wxml','./pages/terminalDetails/terminalDetails.wxml','./pages/terminalHistory/terminalHistory.wxml','./pages/terminalStatus/terminalStatus.wxml','./pages/terminalStatusAll/terminalStatusAll.wxml','./pages/transientDetails/transientDetails.wxml','./pages/transientWave/transientWave.wxml','./pages/us/us.wxml','./pages/userAgreement/userAgreement.wxml','./pages/vercode/vercode.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var fE=_v()
_(xC,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_v()
_(r,cI)
if(_oz(z,0,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aL=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var tM=_n('view')
_rz(z,tM,'class',3,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,4,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,5,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,6,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(tM,xQ)
if(_oz(z,7,e,s,gg)){xQ.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
_(aL,tM)
_(r,aL)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fS=_mz(z,'view',['catchtouchmove',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,3,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,4,e,s,gg)){hU.wxVkey=1
var oV=_n('view')
_rz(z,oV,'class',5,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,6,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_v()
_(e2,o4)
var x5=function(f7,o6,c8,gg){
var o0=_mz(z,'uni-calendar-item',['bind:__l',15,'bind:change',1,'calendar',2,'class',3,'data-event-opts',4,'lunar',5,'selected',6,'vueId',7,'weeks',8],[],f7,o6,gg)
_(c8,o0)
return c8
}
o4.wxXCkey=4
_2z(z,13,x5,t1,aZ,gg,o4,'weeks','weeksIndex','weeksIndex')
return e2
}
oX.wxXCkey=4
_2z(z,9,lY,e,s,gg,oX,'item','weekIndex','weekIndex')
cW.wxXCkey=1
_(hU,oV)
}
cT.wxXCkey=1
hU.wxXCkey=1
hU.wxXCkey=3
_(r,fS)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oBB=_n('slot')
_(r,oBB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aDB=_n('view')
var eFB=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(aDB,eFB)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,6,e,s,gg)){tEB.wxVkey=1
var bGB=_n('view')
_rz(z,bGB,'class',7,e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,8,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,9,e,s,gg)){xIB.wxVkey=1
var oJB=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var cLB=_n('view')
_rz(z,cLB,'class',12,e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,13,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,14,e,s,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(cLB,cOB)
if(_oz(z,15,e,s,gg)){cOB.wxVkey=1
}
var oPB=_v()
_(cLB,oPB)
if(_oz(z,16,e,s,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cLB,lQB)
if(_oz(z,17,e,s,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(cLB,aRB)
if(_oz(z,18,e,s,gg)){aRB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
cOB.wxXCkey=1
oPB.wxXCkey=1
lQB.wxXCkey=1
aRB.wxXCkey=1
_(oJB,cLB)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,19,e,s,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
_(xIB,oJB)
}
else{xIB.wxVkey=2
}
oHB.wxXCkey=1
xIB.wxXCkey=1
_(tEB,bGB)
}
else{tEB.wxVkey=2
}
tEB.wxXCkey=1
_(r,aDB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var bUB=_n('view')
var oVB=_mz(z,'back',['bind:__l',0,'vueId',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_n('view')
_rz(z,xWB,'class',2,e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,3,e,s,gg)){oXB.wxVkey=1
}
var h1B=_mz(z,'uni-calendar',['bind:__l',4,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'insert',5,'range',6,'vueId',7],[],e,s,gg)
_(xWB,h1B)
var fYB=_v()
_(xWB,fYB)
if(_oz(z,12,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(xWB,cZB)
if(_oz(z,13,e,s,gg)){cZB.wxVkey=1
}
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
_(bUB,xWB)
_(r,bUB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var c3B=_n('view')
_rz(z,c3B,'class',0,e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,1,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(c3B,l5B)
if(_oz(z,2,e,s,gg)){l5B.wxVkey=1
var a6B=_n('view')
_rz(z,a6B,'class',3,e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,4,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(a6B,e8B)
if(_oz(z,5,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(a6B,b9B)
if(_oz(z,6,e,s,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(a6B,o0B)
if(_oz(z,7,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(a6B,xAC)
if(_oz(z,8,e,s,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(a6B,oBC)
if(_oz(z,9,e,s,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(a6B,fCC)
if(_oz(z,10,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(a6B,cDC)
if(_oz(z,11,e,s,gg)){cDC.wxVkey=1
}
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
fCC.wxXCkey=1
cDC.wxXCkey=1
_(l5B,a6B)
}
else{l5B.wxVkey=2
}
o4B.wxXCkey=1
l5B.wxXCkey=1
_(r,c3B)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oFC=_n('view')
var oHC=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(oFC,oHC)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,4,e,s,gg)){cGC.wxVkey=1
var lIC=_mz(z,'uni-calendar',['bind:__l',5,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'insert',5,'range',6,'vueId',7],[],e,s,gg)
_(cGC,lIC)
var aJC=_mz(z,'mpvue-echarts',['bind:__l',13,'canvasId',1,'class',2,'data-ref',3,'style',4,'vueId',5],[],e,s,gg)
_(cGC,aJC)
}
else{cGC.wxVkey=2
}
cGC.wxXCkey=1
cGC.wxXCkey=3
_(r,oFC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var eLC=_n('view')
var bMC=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(eLC,bMC)
var oNC=_n('view')
_rz(z,oNC,'class',6,e,s,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,7,e,s,gg)){xOC.wxVkey=1
}
var cRC=_n('view')
_rz(z,cRC,'class',8,e,s,gg)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,9,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(cRC,oTC)
if(_oz(z,10,e,s,gg)){oTC.wxVkey=1
}
hSC.wxXCkey=1
oTC.wxXCkey=1
_(oNC,cRC)
var oPC=_v()
_(oNC,oPC)
if(_oz(z,11,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(oNC,fQC)
if(_oz(z,12,e,s,gg)){fQC.wxVkey=1
}
xOC.wxXCkey=1
oPC.wxXCkey=1
fQC.wxXCkey=1
_(eLC,oNC)
_(r,eLC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oVC=_n('view')
var lWC=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(oVC,lWC)
var aXC=_n('view')
_rz(z,aXC,'class',6,e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,7,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(aXC,eZC)
if(_oz(z,8,e,s,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(aXC,b1C)
if(_oz(z,9,e,s,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(aXC,o2C)
if(_oz(z,10,e,s,gg)){o2C.wxVkey=1
}
tYC.wxXCkey=1
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
_(oVC,aXC)
_(r,oVC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var o4C=_n('view')
var f5C=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(o4C,f5C)
var c6C=_n('view')
_rz(z,c6C,'class',6,e,s,gg)
var c9C=_n('view')
_rz(z,c9C,'class',7,e,s,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,8,e,s,gg)){o0C.wxVkey=1
}
var lAD=_v()
_(c9C,lAD)
if(_oz(z,9,e,s,gg)){lAD.wxVkey=1
}
var aBD=_v()
_(c9C,aBD)
if(_oz(z,10,e,s,gg)){aBD.wxVkey=1
}
o0C.wxXCkey=1
lAD.wxXCkey=1
aBD.wxXCkey=1
_(c6C,c9C)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,11,e,s,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,12,e,s,gg)){o8C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
_(o4C,c6C)
_(r,o4C)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var eDD=_n('view')
var bED=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(eDD,bED)
var oFD=_n('view')
_rz(z,oFD,'class',6,e,s,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,7,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,8,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(oFD,fID)
if(_oz(z,9,e,s,gg)){fID.wxVkey=1
}
xGD.wxXCkey=1
oHD.wxXCkey=1
fID.wxXCkey=1
_(eDD,oFD)
_(r,eDD)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var hKD=_n('view')
var oLD=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(hKD,oLD)
var cMD=_n('view')
_rz(z,cMD,'class',6,e,s,gg)
var aPD=_n('view')
_rz(z,aPD,'class',7,e,s,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,8,e,s,gg)){tQD.wxVkey=1
}
var eRD=_v()
_(aPD,eRD)
if(_oz(z,9,e,s,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(aPD,bSD)
if(_oz(z,10,e,s,gg)){bSD.wxVkey=1
}
tQD.wxXCkey=1
eRD.wxXCkey=1
bSD.wxXCkey=1
_(cMD,aPD)
var oND=_v()
_(cMD,oND)
if(_oz(z,11,e,s,gg)){oND.wxVkey=1
}
var lOD=_v()
_(cMD,lOD)
if(_oz(z,12,e,s,gg)){lOD.wxVkey=1
}
oND.wxXCkey=1
lOD.wxXCkey=1
_(hKD,cMD)
_(r,hKD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,1,e,s,gg)){oVD.wxVkey=1
var fWD=_mz(z,'scroll-view',['bindscrolltolower',2,'bindtouchend',1,'class',2,'data-event-opts',3,'scrollY',4,'style',5],[],e,s,gg)
var cXD=_v()
_(fWD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],c1D,oZD,gg)
var t5D=_mz(z,'scroll-view',['class',14,'scrollY',1],[],c1D,oZD,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,16,c1D,oZD,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,17,c1D,oZD,gg)){b7D.wxVkey=1
}
e6D.wxXCkey=1
b7D.wxXCkey=1
_(a4D,t5D)
_(o2D,a4D)
return o2D
}
cXD.wxXCkey=2
_2z(z,10,hYD,e,s,gg,cXD,'statistics','__i0__','')
_(oVD,fWD)
}
else{oVD.wxVkey=2
}
oVD.wxXCkey=1
_(r,xUD)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var x9D=_mz(z,'loading',['bind:__l',0,'bind:callback',1,'class',1,'custom',2,'data-event-opts',3,'data-ref',4,'shadeClick',5,'type',6,'vueId',7],[],e,s,gg)
_(r,x9D)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var fAE=_n('view')
_rz(z,fAE,'class',0,e,s,gg)
var hCE=_n('view')
_rz(z,hCE,'class',1,e,s,gg)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,2,e,s,gg)){oDE.wxVkey=1
var lGE=_v()
_(oDE,lGE)
if(_oz(z,3,e,s,gg)){lGE.wxVkey=1
}
lGE.wxXCkey=1
}
else{oDE.wxVkey=2
var aHE=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var tIE=_v()
_(aHE,tIE)
if(_oz(z,7,e,s,gg)){tIE.wxVkey=1
}
tIE.wxXCkey=1
_(oDE,aHE)
}
var cEE=_v()
_(hCE,cEE)
if(_oz(z,8,e,s,gg)){cEE.wxVkey=1
var eJE=_v()
_(cEE,eJE)
if(_oz(z,9,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
}
else{cEE.wxVkey=2
var bKE=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,13,e,s,gg)){oLE.wxVkey=1
}
oLE.wxXCkey=1
_(cEE,bKE)
}
var oFE=_v()
_(hCE,oFE)
if(_oz(z,14,e,s,gg)){oFE.wxVkey=1
var xME=_v()
_(oFE,xME)
if(_oz(z,15,e,s,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
}
else{oFE.wxVkey=2
var oNE=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,19,e,s,gg)){fOE.wxVkey=1
}
fOE.wxXCkey=1
_(oFE,oNE)
}
oDE.wxXCkey=1
cEE.wxXCkey=1
oFE.wxXCkey=1
_(fAE,hCE)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,20,e,s,gg)){cBE.wxVkey=1
}
var cPE=_mz(z,'swiper',['bindchange',21,'current',1,'data-event-opts',2,'duration',3,'skipHiddenItemLayout',4,'style',5],[],e,s,gg)
var hQE=_mz(z,'view',['bindtouchend',27,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,33,e,s,gg)){oRE.wxVkey=1
var cSE=_mz(z,'scroll-view',['bindlowerThreshold',34,'bindscroll',1,'bindscrolltolower',2,'data-event-opts',3,'scrollY',4,'style',5],[],e,s,gg)
var oTE=_v()
_(cSE,oTE)
var lUE=function(tWE,aVE,eXE,gg){
var oZE=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],tWE,aVE,gg)
var x1E=_v()
_(oZE,x1E)
if(_oz(z,46,tWE,aVE,gg)){x1E.wxVkey=1
}
x1E.wxXCkey=1
_(eXE,oZE)
return eXE
}
oTE.wxXCkey=2
_2z(z,42,lUE,e,s,gg,oTE,'transient','transientListIndex','')
_(oRE,cSE)
}
else{oRE.wxVkey=2
}
oRE.wxXCkey=1
_(cPE,hQE)
var o2E=_mz(z,'view',['bindtouchend',47,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,53,e,s,gg)){f3E.wxVkey=1
var c4E=_mz(z,'scroll-view',['bindscroll',54,'bindscrolltolower',1,'data-event-opts',2,'scrollY',3,'style',4],[],e,s,gg)
var h5E=_v()
_(c4E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_mz(z,'view',['bindtap',62,'class',1,'data-event-opts',2],[],o8E,c7E,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,65,o8E,c7E,gg)){eBF.wxVkey=1
}
eBF.wxXCkey=1
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=2
_2z(z,61,o6E,e,s,gg,h5E,'steady','steadyListIndex','')
_(f3E,c4E)
}
else{f3E.wxVkey=2
}
f3E.wxXCkey=1
_(cPE,o2E)
var bCF=_mz(z,'view',['bindtouchend',66,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,72,e,s,gg)){oDF.wxVkey=1
var xEF=_mz(z,'scroll-view',['bindscroll',73,'bindscrolltolower',1,'data-event-opts',2,'scrollY',3,'style',4],[],e,s,gg)
var oFF=_v()
_(xEF,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'view',['bindtap',81,'class',1,'data-event-opts',2],[],hIF,cHF,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,84,hIF,cHF,gg)){lMF.wxVkey=1
}
lMF.wxXCkey=1
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=2
_2z(z,80,fGF,e,s,gg,oFF,'terminal','terminalListIndex','')
_(oDF,xEF)
}
else{oDF.wxVkey=2
}
oDF.wxXCkey=1
_(cPE,bCF)
_(fAE,cPE)
cBE.wxXCkey=1
_(r,fAE)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var tOF=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(r,tOF)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var bQF=_n('view')
_rz(z,bQF,'class',0,e,s,gg)
var oRF=_mz(z,'back',['backShowFlag',1,'bind:__l',1,'errorMsg',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(bQF,oRF)
var xSF=_n('view')
_rz(z,xSF,'class',6,e,s,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,7,e,s,gg)){oTF.wxVkey=1
}
var fUF=_v()
_(xSF,fUF)
if(_oz(z,8,e,s,gg)){fUF.wxVkey=1
var t3F=_v()
_(fUF,t3F)
if(_oz(z,9,e,s,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
}
var cVF=_v()
_(xSF,cVF)
if(_oz(z,10,e,s,gg)){cVF.wxVkey=1
}
var hWF=_v()
_(xSF,hWF)
if(_oz(z,11,e,s,gg)){hWF.wxVkey=1
}
var oXF=_v()
_(xSF,oXF)
if(_oz(z,12,e,s,gg)){oXF.wxVkey=1
}
var cYF=_v()
_(xSF,cYF)
if(_oz(z,13,e,s,gg)){cYF.wxVkey=1
}
var oZF=_v()
_(xSF,oZF)
if(_oz(z,14,e,s,gg)){oZF.wxVkey=1
}
var l1F=_v()
_(xSF,l1F)
if(_oz(z,15,e,s,gg)){l1F.wxVkey=1
}
var a2F=_v()
_(xSF,a2F)
if(_oz(z,16,e,s,gg)){a2F.wxVkey=1
}
oTF.wxXCkey=1
fUF.wxXCkey=1
cVF.wxXCkey=1
hWF.wxXCkey=1
oXF.wxXCkey=1
cYF.wxXCkey=1
oZF.wxXCkey=1
l1F.wxXCkey=1
a2F.wxXCkey=1
_(bQF,xSF)
_(r,bQF)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var b5F=_n('view')
_rz(z,b5F,'class',0,e,s,gg)
var o6F=_mz(z,'view',['bindtap',1,'data-event-opts',1],[],e,s,gg)
var x7F=_mz(z,'personal-module',['bind:__l',3,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(o6F,x7F)
_(b5F,o6F)
var o8F=_mz(z,'view',['bindtap',7,'data-event-opts',1],[],e,s,gg)
var f9F=_mz(z,'personal-module',['bind:__l',9,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(o8F,f9F)
_(b5F,o8F)
var c0F=_mz(z,'view',['bindtap',13,'data-event-opts',1],[],e,s,gg)
var hAG=_mz(z,'personal-module',['bind:__l',15,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(c0F,hAG)
_(b5F,c0F)
var oBG=_mz(z,'view',['bindtap',19,'data-event-opts',1],[],e,s,gg)
var cCG=_mz(z,'personal-module',['bind:__l',21,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(oBG,cCG)
_(b5F,oBG)
var oDG=_mz(z,'view',['bindtap',25,'data-event-opts',1],[],e,s,gg)
var lEG=_mz(z,'personal-module',['bind:__l',27,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(oDG,lEG)
_(b5F,oDG)
var aFG=_mz(z,'view',['bindtap',31,'data-event-opts',1],[],e,s,gg)
var tGG=_mz(z,'personal-module',['bind:__l',33,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(aFG,tGG)
_(b5F,aFG)
var eHG=_mz(z,'view',['bindtap',37,'data-event-opts',1],[],e,s,gg)
var bIG=_mz(z,'personal-module',['bind:__l',39,'imgsrc',1,'name',2,'vueId',3],[],e,s,gg)
_(eHG,bIG)
_(b5F,eHG)
_(r,b5F)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var xKG=_n('view')
var oLG=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(xKG,oLG)
var fMG=_n('view')
_rz(z,fMG,'class',6,e,s,gg)
var oPG=_n('view')
_rz(z,oPG,'class',7,e,s,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,8,e,s,gg)){cQG.wxVkey=1
}
var oRG=_v()
_(oPG,oRG)
if(_oz(z,9,e,s,gg)){oRG.wxVkey=1
}
var lSG=_v()
_(oPG,lSG)
if(_oz(z,10,e,s,gg)){lSG.wxVkey=1
}
cQG.wxXCkey=1
oRG.wxXCkey=1
lSG.wxXCkey=1
_(fMG,oPG)
var cNG=_v()
_(fMG,cNG)
if(_oz(z,11,e,s,gg)){cNG.wxVkey=1
}
var hOG=_v()
_(fMG,hOG)
if(_oz(z,12,e,s,gg)){hOG.wxVkey=1
}
cNG.wxXCkey=1
hOG.wxXCkey=1
_(xKG,fMG)
_(r,xKG)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var tUG=_n('view')
var eVG=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(tUG,eVG)
var bWG=_n('view')
_rz(z,bWG,'class',6,e,s,gg)
var oXG=_v()
_(bWG,oXG)
if(_oz(z,7,e,s,gg)){oXG.wxVkey=1
}
var xYG=_v()
_(bWG,xYG)
if(_oz(z,8,e,s,gg)){xYG.wxVkey=1
}
var c2G=_n('view')
_rz(z,c2G,'class',9,e,s,gg)
var h3G=_v()
_(c2G,h3G)
if(_oz(z,10,e,s,gg)){h3G.wxVkey=1
}
var o4G=_v()
_(c2G,o4G)
if(_oz(z,11,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(c2G,c5G)
if(_oz(z,12,e,s,gg)){c5G.wxVkey=1
}
h3G.wxXCkey=1
o4G.wxXCkey=1
c5G.wxXCkey=1
_(bWG,c2G)
var oZG=_v()
_(bWG,oZG)
if(_oz(z,13,e,s,gg)){oZG.wxVkey=1
}
var f1G=_v()
_(bWG,f1G)
if(_oz(z,14,e,s,gg)){f1G.wxVkey=1
}
oXG.wxXCkey=1
xYG.wxXCkey=1
oZG.wxXCkey=1
f1G.wxXCkey=1
_(tUG,bWG)
_(r,tUG)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var l7G=_n('view')
var a8G=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(l7G,a8G)
var t9G=_n('view')
_rz(z,t9G,'class',6,e,s,gg)
var oBH=_n('view')
_rz(z,oBH,'class',7,e,s,gg)
var xCH=_v()
_(oBH,xCH)
if(_oz(z,8,e,s,gg)){xCH.wxVkey=1
}
var oDH=_v()
_(oBH,oDH)
if(_oz(z,9,e,s,gg)){oDH.wxVkey=1
}
var fEH=_v()
_(oBH,fEH)
if(_oz(z,10,e,s,gg)){fEH.wxVkey=1
}
xCH.wxXCkey=1
oDH.wxXCkey=1
fEH.wxXCkey=1
_(t9G,oBH)
var e0G=_v()
_(t9G,e0G)
if(_oz(z,11,e,s,gg)){e0G.wxVkey=1
}
var bAH=_v()
_(t9G,bAH)
if(_oz(z,12,e,s,gg)){bAH.wxVkey=1
}
e0G.wxXCkey=1
bAH.wxXCkey=1
_(l7G,t9G)
_(r,l7G)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var hGH=_n('view')
var oHH=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(hGH,oHH)
var cIH=_n('view')
_rz(z,cIH,'class',6,e,s,gg)
var aLH=_n('view')
_rz(z,aLH,'class',7,e,s,gg)
var tMH=_v()
_(aLH,tMH)
if(_oz(z,8,e,s,gg)){tMH.wxVkey=1
}
var eNH=_v()
_(aLH,eNH)
if(_oz(z,9,e,s,gg)){eNH.wxVkey=1
}
var bOH=_v()
_(aLH,bOH)
if(_oz(z,10,e,s,gg)){bOH.wxVkey=1
}
tMH.wxXCkey=1
eNH.wxXCkey=1
bOH.wxXCkey=1
_(cIH,aLH)
var oJH=_v()
_(cIH,oJH)
if(_oz(z,11,e,s,gg)){oJH.wxVkey=1
}
var lKH=_v()
_(cIH,lKH)
if(_oz(z,12,e,s,gg)){lKH.wxVkey=1
}
oJH.wxXCkey=1
lKH.wxXCkey=1
_(hGH,cIH)
_(r,hGH)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var xQH=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(r,xQH)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var hUH=_mz(z,'swiper',['bindchange',0,'current',1,'data-event-opts',1,'style',2],[],e,s,gg)
var oVH=_n('view')
_rz(z,oVH,'class',4,e,s,gg)
var lYH=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var aZH=_n('view')
_rz(z,aZH,'class',8,e,s,gg)
var t1H=_v()
_(aZH,t1H)
if(_oz(z,9,e,s,gg)){t1H.wxVkey=1
}
var e2H=_v()
_(aZH,e2H)
if(_oz(z,10,e,s,gg)){e2H.wxVkey=1
}
t1H.wxXCkey=1
e2H.wxXCkey=1
_(lYH,aZH)
_(oVH,lYH)
var cWH=_v()
_(oVH,cWH)
if(_oz(z,11,e,s,gg)){cWH.wxVkey=1
var b3H=_n('view')
_rz(z,b3H,'class',12,e,s,gg)
var o4H=_v()
_(b3H,o4H)
if(_oz(z,13,e,s,gg)){o4H.wxVkey=1
}
var x5H=_v()
_(b3H,x5H)
if(_oz(z,14,e,s,gg)){x5H.wxVkey=1
}
o4H.wxXCkey=1
x5H.wxXCkey=1
_(cWH,b3H)
}
var oXH=_v()
_(oVH,oXH)
if(_oz(z,15,e,s,gg)){oXH.wxVkey=1
var o6H=_mz(z,'scroll-view',['bindscrolltolower',16,'bindtouchend',1,'class',2,'data-event-opts',3,'scrollY',4,'style',5],[],e,s,gg)
var f7H=_v()
_(o6H,f7H)
var c8H=function(o0H,h9H,cAI,gg){
var lCI=_v()
_(cAI,lCI)
if(_oz(z,25,o0H,h9H,gg)){lCI.wxVkey=1
}
lCI.wxXCkey=1
return cAI
}
f7H.wxXCkey=2
_2z(z,24,c8H,e,s,gg,f7H,'steady','__i0__','')
_(oXH,o6H)
}
else{oXH.wxVkey=2
}
cWH.wxXCkey=1
oXH.wxXCkey=1
_(hUH,oVH)
var aDI=_n('view')
_rz(z,aDI,'class',26,e,s,gg)
var bGI=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],e,s,gg)
var oHI=_n('view')
_rz(z,oHI,'class',30,e,s,gg)
var xII=_v()
_(oHI,xII)
if(_oz(z,31,e,s,gg)){xII.wxVkey=1
}
var oJI=_v()
_(oHI,oJI)
if(_oz(z,32,e,s,gg)){oJI.wxVkey=1
}
xII.wxXCkey=1
oJI.wxXCkey=1
_(bGI,oHI)
_(aDI,bGI)
var tEI=_v()
_(aDI,tEI)
if(_oz(z,33,e,s,gg)){tEI.wxVkey=1
var fKI=_v()
_(tEI,fKI)
if(_oz(z,34,e,s,gg)){fKI.wxVkey=1
}
fKI.wxXCkey=1
}
var eFI=_v()
_(aDI,eFI)
if(_oz(z,35,e,s,gg)){eFI.wxVkey=1
var cLI=_n('view')
_rz(z,cLI,'class',36,e,s,gg)
var hMI=_v()
_(cLI,hMI)
if(_oz(z,37,e,s,gg)){hMI.wxVkey=1
}
var oNI=_v()
_(cLI,oNI)
if(_oz(z,38,e,s,gg)){oNI.wxVkey=1
}
hMI.wxXCkey=1
oNI.wxXCkey=1
_(eFI,cLI)
}
tEI.wxXCkey=1
eFI.wxXCkey=1
_(hUH,aDI)
_(r,hUH)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oPI=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(r,oPI)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var aRI=_n('view')
var tSI=_mz(z,'back',['bind:__l',0,'errorMsg',1,'pageName',1,'pageNameFlag',2,'showFlag',3,'vueId',4],[],e,s,gg)
_(aRI,tSI)
var eTI=_n('view')
_rz(z,eTI,'class',6,e,s,gg)
var bUI=_v()
_(eTI,bUI)
if(_oz(z,7,e,s,gg)){bUI.wxVkey=1
}
var oVI=_v()
_(eTI,oVI)
if(_oz(z,8,e,s,gg)){oVI.wxVkey=1
}
var fYI=_n('view')
_rz(z,fYI,'class',9,e,s,gg)
var cZI=_v()
_(fYI,cZI)
if(_oz(z,10,e,s,gg)){cZI.wxVkey=1
}
var h1I=_v()
_(fYI,h1I)
if(_oz(z,11,e,s,gg)){h1I.wxVkey=1
}
var o2I=_v()
_(fYI,o2I)
if(_oz(z,12,e,s,gg)){o2I.wxVkey=1
}
cZI.wxXCkey=1
h1I.wxXCkey=1
o2I.wxXCkey=1
_(eTI,fYI)
var xWI=_v()
_(eTI,xWI)
if(_oz(z,13,e,s,gg)){xWI.wxVkey=1
}
var oXI=_v()
_(eTI,oXI)
if(_oz(z,14,e,s,gg)){oXI.wxVkey=1
}
bUI.wxXCkey=1
oVI.wxXCkey=1
xWI.wxXCkey=1
oXI.wxXCkey=1
_(aRI,eTI)
_(r,aRI)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var o4I=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'showFlag',2,'vueId',3],[],e,s,gg)
_(r,o4I)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var a6I=_n('view')
var t7I=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(a6I,t7I)
var e8I=_mz(z,'swiper',['bindchange',4,'current',1,'data-event-opts',2,'duration',3,'skipHiddenItemLayout',4,'style',5],[],e,s,gg)
var b9I=_mz(z,'mpvue-echarts',['bind:__l',10,'canvasId',1,'class',2,'data-ref',3,'style',4,'vueId',5],[],e,s,gg)
_(e8I,b9I)
var o0I=_mz(z,'mpvue-echarts',['bind:__l',16,'canvasId',1,'class',2,'data-ref',3,'style',4,'vueId',5],[],e,s,gg)
_(e8I,o0I)
_(a6I,e8I)
_(r,a6I)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var oBJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(r,oBJ)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var cDJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(r,cDJ)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var oFJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(r,oFJ)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var lIJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'showFlag',2,'vueId',3],[],e,s,gg)
_(r,lIJ)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var tKJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'showFlag',2,'vueId',3],[],e,s,gg)
_(r,tKJ)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var bMJ=_n('view')
var xOJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(bMJ,xOJ)
var oNJ=_v()
_(bMJ,oNJ)
if(_oz(z,4,e,s,gg)){oNJ.wxVkey=1
var oPJ=_mz(z,'scroll-view',['scrollY',5,'style',1],[],e,s,gg)
var fQJ=_v()
_(oPJ,fQJ)
if(_oz(z,7,e,s,gg)){fQJ.wxVkey=1
}
var cRJ=_v()
_(oPJ,cRJ)
if(_oz(z,8,e,s,gg)){cRJ.wxVkey=1
}
fQJ.wxXCkey=1
cRJ.wxXCkey=1
_(oNJ,oPJ)
}
else{oNJ.wxVkey=2
}
oNJ.wxXCkey=1
_(r,bMJ)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oTJ=_n('view')
var oVJ=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(oTJ,oVJ)
var cUJ=_v()
_(oTJ,cUJ)
if(_oz(z,4,e,s,gg)){cUJ.wxVkey=1
var lWJ=_mz(z,'uni-calendar',['bind:__l',5,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'insert',5,'range',6,'vueId',7],[],e,s,gg)
_(cUJ,lWJ)
var aXJ=_mz(z,'mpvue-echarts',['bind:__l',13,'canvasId',1,'class',2,'data-ref',3,'style',4,'vueId',5],[],e,s,gg)
_(cUJ,aXJ)
}
else{cUJ.wxVkey=2
}
cUJ.wxXCkey=1
cUJ.wxXCkey=3
_(r,oTJ)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var eZJ=_n('view')
var b1J=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(eZJ,b1J)
var o2J=_v()
_(eZJ,o2J)
var x3J=function(f5J,o4J,c6J,gg){
var o8J=_n('view')
_rz(z,o8J,'class',7,f5J,o4J,gg)
var c9J=_v()
_(o8J,c9J)
if(_oz(z,8,f5J,o4J,gg)){c9J.wxVkey=1
}
var o0J=_v()
_(o8J,o0J)
if(_oz(z,9,f5J,o4J,gg)){o0J.wxVkey=1
}
c9J.wxXCkey=1
o0J.wxXCkey=1
_(c6J,o8J)
return c6J
}
o2J.wxXCkey=2
_2z(z,6,x3J,e,s,gg,o2J,'dev','__i0__','')
_(r,eZJ)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var aBK=_n('view')
var eDK=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'showFlag',2,'vueId',3],[],e,s,gg)
_(aBK,eDK)
var tCK=_v()
_(aBK,tCK)
if(_oz(z,5,e,s,gg)){tCK.wxVkey=1
var bEK=_v()
_(tCK,bEK)
if(_oz(z,6,e,s,gg)){bEK.wxVkey=1
var oFK=_v()
_(bEK,oFK)
if(_oz(z,7,e,s,gg)){oFK.wxVkey=1
}
oFK.wxXCkey=1
}
bEK.wxXCkey=1
}
else{tCK.wxVkey=2
}
tCK.wxXCkey=1
_(r,aBK)
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var oHK=_n('view')
var hKK=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'showFlag',2,'vueId',3],[],e,s,gg)
_(oHK,hKK)
var fIK=_v()
_(oHK,fIK)
if(_oz(z,5,e,s,gg)){fIK.wxVkey=1
}
var cJK=_v()
_(oHK,cJK)
if(_oz(z,6,e,s,gg)){cJK.wxVkey=1
}
fIK.wxXCkey=1
cJK.wxXCkey=1
_(r,oHK)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var cMK=_mz(z,'back',['bind:__l',0,'pageName',1,'pageNameFlag',1,'vueId',2],[],e,s,gg)
_(r,cMK)
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var aPK=_n('view')
_rz(z,aPK,'class',0,e,s,gg)
var tQK=_mz(z,'back',['bind:__l',1,'errorMsg',1,'showFlag',2,'vueId',3],[],e,s,gg)
_(aPK,tQK)
var eRK=_mz(z,'keyboard',['bind:__l',5,'bind:valueList',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(aPK,eRK)
_(r,aPK)
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/spectrum/spectrum","pages/condition/condition","pages/dataIntegrityDetails/dataIntegrityDetails","pages/terminalStatus/terminalStatus","pages/chooseLine/chooseLine","pages/index/index","pages/report/report","pages/information/information","pages/me/me","pages/levelUp/levelUp","pages/transientDetails/transientDetails","pages/preview/preview","pages/vercode/vercode","pages/forgetPassword/forgetPassword","pages/forgetPasswordVercode/forgetPasswordVercode","pages/setNewPassword/setNewPassword","pages/fastLogin/fastLogin","pages/fastLoginVercode/fastLoginVercode","pages/fastLoginSetPassword/fastLoginSetPassword","pages/data/data","pages/history/history","pages/userAgreement/userAgreement","pages/privacyAgreement/privacyAgreement","pages/modifyPassword/modifyPassword","pages/modifyPasswordSetpassword/modifyPasswordSetpassword","pages/modifyUserPhoneNum/modifyUserPhoneNum","pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum","pages/systemIntroduce/systemIntroduce","pages/companyIntroduce/companyIntroduce","pages/setting/setting","pages/steady/steady","pages/steadyDetails/steadyDetails","pages/steadyIndex/steadyIndex","pages/terminal/terminal","pages/terminalDetails/terminalDetails","pages/myApply/myApply","pages/setNewMessage/setNewMessage","pages/terminalHistory/terminalHistory","pages/transientWave/transientWave","pages/us/us","pages/terminalStatusAll/terminalStatusAll"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#3982FC","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/information/information","iconPath":"static/pic/information.png","selectedIconPath":"static/pic/information_click.png","text":"信息"},{"pagePath":"pages/data/data","iconPath":"static/pic/data.png","selectedIconPath":"static/pic/data_click.png","text":"实时数据"},{"pagePath":"pages/history/history","iconPath":"static/pic/history.png","selectedIconPath":"static/pic/history_click.png","text":"历史数据"},{"pagePath":"pages/report/report","iconPath":"static/pic/report.png","selectedIconPath":"static/pic/report_click.png","text":"报表任务"},{"pagePath":"pages/me/me","iconPath":"static/pic/me.png","selectedIconPath":"static/pic/me_click.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"灿能云","compilerVersion":"2.6.5","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/back.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/back.wxml']=$gwx('./components/back.wxml');

__wxAppCode__['components/keyboard.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/keyboard.wxml']=$gwx('./components/keyboard.wxml');

__wxAppCode__['components/loading/loading.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/loading/loading.wxml']=$gwx('./components/loading/loading.wxml');

__wxAppCode__['components/mpvue-echarts/src/echarts.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mpvue-echarts/src/echarts.wxml']=$gwx('./components/mpvue-echarts/src/echarts.wxml');

__wxAppCode__['components/personalModule.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/personalModule.wxml']=$gwx('./components/personalModule.wxml');

__wxAppCode__['components/uni-calendar/uni-calendar-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-calendar/uni-calendar-item.wxml']=$gwx('./components/uni-calendar/uni-calendar-item.wxml');

__wxAppCode__['components/uni-calendar/uni-calendar.json']={"component":true,"usingComponents":{"uni-calendar-item":"/components/uni-calendar/uni-calendar-item"}};
__wxAppCode__['components/uni-calendar/uni-calendar.wxml']=$gwx('./components/uni-calendar/uni-calendar.wxml');

__wxAppCode__['components/xuan-loading/xuan-loading.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/xuan-loading/xuan-loading.wxml']=$gwx('./components/xuan-loading/xuan-loading.wxml');

__wxAppCode__['pages/chooseLine/chooseLine.json']={"usingComponents":{"back":"/components/back","uni-calendar":"/components/uni-calendar/uni-calendar"}};
__wxAppCode__['pages/chooseLine/chooseLine.wxml']=$gwx('./pages/chooseLine/chooseLine.wxml');

__wxAppCode__['pages/companyIntroduce/companyIntroduce.json']={"navigationStyle":"default","navigationBarTitleText":"公司简介","titleNView":{"type":"default","titleText":"公司简介"},"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/companyIntroduce/companyIntroduce.wxml']=$gwx('./pages/companyIntroduce/companyIntroduce.wxml');

__wxAppCode__['pages/condition/condition.json']={"usingComponents":{"uni-calendar":"/components/uni-calendar/uni-calendar","back":"/components/back"}};
__wxAppCode__['pages/condition/condition.wxml']=$gwx('./pages/condition/condition.wxml');

__wxAppCode__['pages/data/data.json']={"usingComponents":{}};
__wxAppCode__['pages/data/data.wxml']=$gwx('./pages/data/data.wxml');

__wxAppCode__['pages/dataIntegrityDetails/dataIntegrityDetails.json']={"usingComponents":{"uni-calendar":"/components/uni-calendar/uni-calendar","back":"/components/back","mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/dataIntegrityDetails/dataIntegrityDetails.wxml']=$gwx('./pages/dataIntegrityDetails/dataIntegrityDetails.wxml');

__wxAppCode__['pages/fastLogin/fastLogin.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/fastLogin/fastLogin.wxml']=$gwx('./pages/fastLogin/fastLogin.wxml');

__wxAppCode__['pages/fastLoginSetPassword/fastLoginSetPassword.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/fastLoginSetPassword/fastLoginSetPassword.wxml']=$gwx('./pages/fastLoginSetPassword/fastLoginSetPassword.wxml');

__wxAppCode__['pages/fastLoginVercode/fastLoginVercode.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/fastLoginVercode/fastLoginVercode.wxml']=$gwx('./pages/fastLoginVercode/fastLoginVercode.wxml');

__wxAppCode__['pages/forgetPassword/forgetPassword.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/forgetPassword/forgetPassword.wxml']=$gwx('./pages/forgetPassword/forgetPassword.wxml');

__wxAppCode__['pages/forgetPasswordVercode/forgetPasswordVercode.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/forgetPasswordVercode/forgetPasswordVercode.wxml']=$gwx('./pages/forgetPasswordVercode/forgetPasswordVercode.wxml');

__wxAppCode__['pages/history/history.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/history/history.wxml']=$gwx('./pages/history/history.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{"loading":"/components/xuan-loading/xuan-loading"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/information/information.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/information/information.wxml']=$gwx('./pages/information/information.wxml');

__wxAppCode__['pages/levelUp/levelUp.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/levelUp/levelUp.wxml']=$gwx('./pages/levelUp/levelUp.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/me/me.json']={"usingComponents":{"personal-module":"/components/personalModule"}};
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/modifyPassword/modifyPassword.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/modifyPassword/modifyPassword.wxml']=$gwx('./pages/modifyPassword/modifyPassword.wxml');

__wxAppCode__['pages/modifyPasswordSetpassword/modifyPasswordSetpassword.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/modifyPasswordSetpassword/modifyPasswordSetpassword.wxml']=$gwx('./pages/modifyPasswordSetpassword/modifyPasswordSetpassword.wxml');

__wxAppCode__['pages/modifyUserPhoneNum/modifyUserPhoneNum.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/modifyUserPhoneNum/modifyUserPhoneNum.wxml']=$gwx('./pages/modifyUserPhoneNum/modifyUserPhoneNum.wxml');

__wxAppCode__['pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.wxml']=$gwx('./pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.wxml');

__wxAppCode__['pages/myApply/myApply.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/myApply/myApply.wxml']=$gwx('./pages/myApply/myApply.wxml');

__wxAppCode__['pages/preview/preview.json']={"usingComponents":{}};
__wxAppCode__['pages/preview/preview.wxml']=$gwx('./pages/preview/preview.wxml');

__wxAppCode__['pages/privacyAgreement/privacyAgreement.json']={"navigationStyle":"default","navigationBarTitleText":"隐私协议","titleNView":{"type":"default","titleText":"隐私协议"},"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/privacyAgreement/privacyAgreement.wxml']=$gwx('./pages/privacyAgreement/privacyAgreement.wxml');

__wxAppCode__['pages/report/report.json']={"usingComponents":{"uni-calendar":"/components/uni-calendar/uni-calendar"}};
__wxAppCode__['pages/report/report.wxml']=$gwx('./pages/report/report.wxml');

__wxAppCode__['pages/setNewMessage/setNewMessage.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/setNewMessage/setNewMessage.wxml']=$gwx('./pages/setNewMessage/setNewMessage.wxml');

__wxAppCode__['pages/setNewPassword/setNewPassword.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/setNewPassword/setNewPassword.wxml']=$gwx('./pages/setNewPassword/setNewPassword.wxml');

__wxAppCode__['pages/setting/setting.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/setting/setting.wxml']=$gwx('./pages/setting/setting.wxml');

__wxAppCode__['pages/spectrum/spectrum.json']={"usingComponents":{"back":"/components/back","mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/spectrum/spectrum.wxml']=$gwx('./pages/spectrum/spectrum.wxml');

__wxAppCode__['pages/steady/steady.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/steady/steady.wxml']=$gwx('./pages/steady/steady.wxml');

__wxAppCode__['pages/steadyDetails/steadyDetails.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/steadyDetails/steadyDetails.wxml']=$gwx('./pages/steadyDetails/steadyDetails.wxml');

__wxAppCode__['pages/steadyIndex/steadyIndex.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/steadyIndex/steadyIndex.wxml']=$gwx('./pages/steadyIndex/steadyIndex.wxml');

__wxAppCode__['pages/systemIntroduce/systemIntroduce.json']={"navigationStyle":"default","navigationBarTitleText":"系统介绍","titleNView":{"type":"default","titleText":"系统介绍"},"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/systemIntroduce/systemIntroduce.wxml']=$gwx('./pages/systemIntroduce/systemIntroduce.wxml');

__wxAppCode__['pages/terminal/terminal.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/terminal/terminal.wxml']=$gwx('./pages/terminal/terminal.wxml');

__wxAppCode__['pages/terminalDetails/terminalDetails.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/terminalDetails/terminalDetails.wxml']=$gwx('./pages/terminalDetails/terminalDetails.wxml');

__wxAppCode__['pages/terminalHistory/terminalHistory.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/terminalHistory/terminalHistory.wxml']=$gwx('./pages/terminalHistory/terminalHistory.wxml');

__wxAppCode__['pages/terminalStatus/terminalStatus.json']={"usingComponents":{"uni-calendar":"/components/uni-calendar/uni-calendar","back":"/components/back","mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/terminalStatus/terminalStatus.wxml']=$gwx('./pages/terminalStatus/terminalStatus.wxml');

__wxAppCode__['pages/terminalStatusAll/terminalStatusAll.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/terminalStatusAll/terminalStatusAll.wxml']=$gwx('./pages/terminalStatusAll/terminalStatusAll.wxml');

__wxAppCode__['pages/transientDetails/transientDetails.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/transientDetails/transientDetails.wxml']=$gwx('./pages/transientDetails/transientDetails.wxml');

__wxAppCode__['pages/transientWave/transientWave.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/transientWave/transientWave.wxml']=$gwx('./pages/transientWave/transientWave.wxml');

__wxAppCode__['pages/us/us.json']={"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/us/us.wxml']=$gwx('./pages/us/us.wxml');

__wxAppCode__['pages/userAgreement/userAgreement.json']={"navigationStyle":"default","navigationBarTitleText":"用户协议","titleNView":{"type":"default","titleText":"用户协议"},"usingComponents":{"back":"/components/back"}};
__wxAppCode__['pages/userAgreement/userAgreement.wxml']=$gwx('./pages/userAgreement/userAgreement.wxml');

__wxAppCode__['pages/vercode/vercode.json']={"usingComponents":{"back":"/components/back","keyboard":"/components/keyboard"}};
__wxAppCode__['pages/vercode/vercode.wxml']=$gwx('./pages/vercode/vercode.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0007":function(t,e,n){"use strict";n.r(e);var o=n("dcd9");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var r,u,i,l,c=n("f0c5"),s=Object(c["a"])(o["default"],r,u,!1,null,null,null,!1,i,l);e["default"]=s.exports},"7b78":function(t,e,n){"use strict";(function(t,e,o){n("986c"),n("921b");var a=l(n("66fd")),r=l(n("0007")),u=l(n("1441")),i=l(n("d9f0"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.config.productionTip=!1,a.default.prototype.devCode="2aaecd0b124df819eda75e639a1f91fd",a.default.prototype.serverUrl="http://112.4.156.196:8040/shiningCloud",a.default.prototype.key="f81804778c89c779",a.default.prototype.getCid=function(){var n=this,o=plus.push.getClientInfo().clientid;if(null!=o&&"null"!=o&&""!=o&&void 0!=o){t.setStorageSync("cid",o),e("log","setCid:"+o," at main.js:20");var a=u.default.Encrypt(o,"f81804778c89c779");t.setStorageSync("cidAES",a),e("log","cidAES:"+a," at main.js:23")}else setTimeout(function(){n.getCid()},50)},a.default.prototype.setBadge=function(t){plus.runtime.setBadgeNumber(t)},a.default.prototype.setNum=function(t,e,n){plus.runtime.setBadgeNumber(t,{title:e,content:n})},a.default.prototype.createMessage=function(t,e,n){plus.push.createMessage(n,e,{cover:!1,title:t})},a.default.prototype.cid=function(){var e=this,n=t.getStorageSync("cidAES");if(null!=n&&"null"!=n&&""!=n&&void 0!=n)return n;setTimeout(function(){return e.cid()},500)},a.default.prototype.judgeLogin=function(){if(t.getStorageSync("userInfo").userId&&t.getStorageSync("userInfo").phone)return!0;t.showModal({title:"登录出现异常",content:"请重新登录",success:function(e){return e.confirm?(t.clearStorageSync(),t.redirectTo({url:"/pages/login/login"}),!1):!e.cancel&&void 0}})},a.default.prototype.showError=function(t,e){return i.default.judgeError(t,e)},a.default.prototype.formatTime_mills=function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),r=e.getHours()<10?"0"+e.getHours():e.getHours(),u=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),l=e.getMilliseconds()<10?"00"+e.getMilliseconds():e.getMilliseconds()<100?"0"+e.getMilliseconds():e.getMilliseconds();return n+"-"+o+"-"+a+" "+r+":"+u+":"+i+"."+l},a.default.prototype.formatTime_second=function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate(),r=e.getHours()<10?"0"+e.getHours():e.getHours(),u=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+"-"+o+"-"+a+" "+r+":"+u+":"+i},a.default.prototype.formatTime=function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,a=e.getDate()<10?"0"+e.getDate():e.getDate();return n+"-"+o+"-"+a},r.default.mpType="app";var d=new a.default(c({},r.default));o(d).$mount()}).call(this,n("6e42")["default"],n("0de9")["default"],n("6e42")["createApp"])},b577:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){var e=this,n=function(e){if("string"==typeof e.payload){var n=JSON.parse(e.payload);n.transmissionContent?(t.$emit("tabNum",n.transmissionContent),t.removeStorageSync("tabNum"),t.setStorageSync("tabNum",n.transmissionContent)):(t.$emit("tabNum",e.payload),t.removeStorageSync("tabNum"),t.setStorageSync("tabNum",e.payload))}else e.payload.tabNum&&(t.$emit("tabNum",e.payload.tabNum),t.removeStorageSync("tabNum"),t.setStorageSync("tabNum",e.payload.tabNum));t.switchTab({url:"../information/information"})},o=function(t){if(t.payload&&t.payload.transmissionContent){var n=t.payload;n.local=1,e.createMessage(t.payload.title,JSON.stringify(n),t.payload.content)}else{n=JSON.parse(t.payload);if(n.local&&1==n.local)return;n.local=1,e.createMessage(t.title,JSON.stringify(n),t.content)}};plus.push.addEventListener("click",n),plus.push.addEventListener("receive",o)},onShow:function(){n("log","App Show"," at App.vue:56")},onHide:function(){this.setBadge(t.getStorageSync("allNum"))}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},dcd9:function(t,e,n){"use strict";n.r(e);var o=n("b577"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a}},[["7b78","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, u = n[0], i = n[1], l = n[2], s = 0, p = []; s < u.length; s++) {
      r = u[s], a[r] && p.push(a[r][0]), a[r] = 0;
    }

    for (o in i) {
      Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }

    d && d(n);

    while (p.length) {
      p.shift()();
    }

    return c.push.apply(c, l || []), t();
  }

  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], o = !0, r = 1; r < t.length; r++) {
        var u = t[r];
        0 !== a[u] && (o = !1);
      }

      o && (c.splice(n--, 1), e = i(i.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      c = [];

  function u(e) {
    return i.p + "" + e + ".js";
  }

  function i(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
  }

  i.e = function (e) {
    var n = [],
        t = {
      "components/back": 1,
      "components/mpvue-echarts/src/echarts": 1,
      "components/uni-calendar/uni-calendar": 1,
      "components/xuan-loading/xuan-loading": 1,
      "components/personalModule": 1,
      "components/keyboard": 1,
      "components/uni-calendar/uni-calendar-item": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/back": "components/back",
        "components/mpvue-echarts/src/echarts": "components/mpvue-echarts/src/echarts",
        "components/uni-calendar/uni-calendar": "components/uni-calendar/uni-calendar",
        "components/loading/loading": "components/loading/loading",
        "components/xuan-loading/xuan-loading": "components/xuan-loading/xuan-loading",
        "components/personalModule": "components/personalModule",
        "components/keyboard": "components/keyboard",
        "components/uni-calendar/uni-calendar-item": "components/uni-calendar/uni-calendar-item"
      }[e] || e) + ".wxss", a = i.p + o, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
        var l = c[u],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === o || s === a)) return n();
      }

      var p = document.getElementsByTagName("style");

      for (u = 0; u < p.length; u++) {
        l = p[u], s = l.getAttribute("data-href");
        if (s === o || s === a) return n();
      }

      var d = document.createElement("link");
      d.rel = "stylesheet", d.type = "text/css", d.onload = n, d.onerror = function (n) {
        var o = n && n.target && n.target.src || a,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], d.parentNode.removeChild(d), t(c);
      }, d.href = a;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(d);
    }).then(function () {
      r[e] = 0;
    }));
    var o = a[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var c = new Promise(function (n, t) {
        o = a[e] = [n, t];
      });
      n.push(o[2] = c);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.src = u(e), l = function l(n) {
        s.onerror = s.onload = null, clearTimeout(p);
        var t = a[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, t[1](c);
          }

          a[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, i.m = e, i.c = o, i.d = function (e, n, t) {
    i.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, n) {
    if (1 & n && (e = i(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (i.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      i.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, i.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(n, "a", n), n;
  }, i.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, i.p = "/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = n, l = l.slice();

  for (var p = 0; p < l.length; p++) {
    n(l[p]);
  }

  var d = s;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[a]["apply"](console,e);var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(o.length>1){var l=o.pop();s=o.join("---COMMA---"),0===l.indexOf(" at ")?s+=l:s+="---COMMA---"+l}else s=o[0];console[a](s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},1441:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("2c86"));function r(t){return t&&t.__esModule?t:{default:t}}function a(e,n){var r=i.default.enc.Utf8.parse(n),a=i.default.AES.decrypt(e,r,{mode:i.default.mode.ECB,padding:i.default.pad.Pkcs7}),o=a.toString(i.default.enc.Utf8);return t("log","decryptedStr",o.toString()," at static\\js\\aes.js:18"),o.toString()}function o(t,e){var n=i.default.enc.Utf8.parse(e),r=i.default.AES.encrypt(t,n,{mode:i.default.mode.ECB,padding:i.default.pad.Pkcs7});return r.toString()}var s={Decrypt:a,Encrypt:o};e.default=s}).call(this,n("0de9")["default"])},"2c86":function(t,e,n){"use strict";(function(e,n){t.exports=n()})(0,function(){var t=t||function(t,e){var n=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),i={},r=i.lib={},a=r.Base=function(){return{extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=e?n:4*t.length},toString:function(t){return(t||l).stringify(this)},concat:function(t){var e=this.words,n=t.words,i=this.sigBytes,r=t.sigBytes;if(this.clamp(),i%4)for(var a=0;a<r;a++){var o=n[a>>>2]>>>24-a%4*8&255;e[i+a>>>2]|=o<<24-(i+a)%4*8}else for(a=0;a<r;a+=4)e[i+a>>>2]=n[a>>>2];return this.sigBytes+=r,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n,i=[],r=function(e){e=e;var n=987654321,i=4294967295;return function(){n=36969*(65535&n)+(n>>16)&i,e=18e3*(65535&e)+(e>>16)&i;var r=(n<<16)+e&i;return r/=4294967296,r+=.5,r*(t.random()>.5?1:-1)}},a=0;a<e;a+=4){var s=r(4294967296*(n||t.random()));n=987654071*s(),i.push(4294967296*s()|0)}return new o.init(i,e)}}),s=i.enc={},l=s.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,i=[],r=0;r<n;r++){var a=e[r>>>2]>>>24-r%4*8&255;i.push((a>>>4).toString(16)),i.push((15&a).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,n=[],i=0;i<e;i+=2)n[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new o.init(n,e/2)}},u=s.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,i=[],r=0;r<n;r++){var a=e[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(a))}return i.join("")},parse:function(t){for(var e=t.length,n=[],i=0;i<e;i++)n[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new o.init(n,e)}},c=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},h=r.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=c.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,i=n.words,r=n.sigBytes,a=this.blockSize,s=4*a,l=r/s;l=e?t.ceil(l):t.max((0|l)-this._minBufferSize,0);var u=l*a,c=t.min(4*u,r);if(u){for(var h=0;h<u;h+=a)this._doProcessBlock(i,h);var f=i.splice(0,u);n.sigBytes-=c}return new o.init(f,c)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),f=(r.Hasher=h.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new f.HMAC.init(t,n).finalize(e)}}}),i.algo={});return i}(Math);return function(){var e=t,n=e.lib,i=n.WordArray,r=e.enc;r.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,i=this._map;t.clamp();for(var r=[],a=0;a<n;a+=3)for(var o=e[a>>>2]>>>24-a%4*8&255,s=e[a+1>>>2]>>>24-(a+1)%4*8&255,l=e[a+2>>>2]>>>24-(a+2)%4*8&255,u=o<<16|s<<8|l,c=0;c<4&&a+.75*c<n;c++)r.push(i.charAt(u>>>6*(3-c)&63));var h=i.charAt(64);if(h)while(r.length%4)r.push(h);return r.join("")},parse:function(t){var e=t.length,n=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var r=0;r<n.length;r++)i[n.charCodeAt(r)]=r}var o=n.charAt(64);if(o){var s=t.indexOf(o);-1!==s&&(e=s)}return a(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(t,e,n){for(var r=[],a=0,o=0;o<e;o++)if(o%4){var s=n[t.charCodeAt(o-1)]<<o%4*2,l=n[t.charCodeAt(o)]>>>6-o%4*2;r[a>>>2]|=(s|l)<<24-a%4*8,a++}return i.create(r,a)}}(),function(e){var n=t,i=n.lib,r=i.WordArray,a=i.Hasher,o=n.algo,s=[];(function(){for(var t=0;t<64;t++)s[t]=4294967296*e.abs(e.sin(t+1))|0})();var l=o.MD5=a.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var n=0;n<16;n++){var i=e+n,r=t[i];t[i]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8)}var a=this._hash.words,o=t[e+0],l=t[e+1],d=t[e+2],p=t[e+3],g=t[e+4],v=t[e+5],m=t[e+6],y=t[e+7],_=t[e+8],b=t[e+9],x=t[e+10],w=t[e+11],S=t[e+12],k=t[e+13],M=t[e+14],D=t[e+15],A=a[0],C=a[1],I=a[2],T=a[3];A=u(A,C,I,T,o,7,s[0]),T=u(T,A,C,I,l,12,s[1]),I=u(I,T,A,C,d,17,s[2]),C=u(C,I,T,A,p,22,s[3]),A=u(A,C,I,T,g,7,s[4]),T=u(T,A,C,I,v,12,s[5]),I=u(I,T,A,C,m,17,s[6]),C=u(C,I,T,A,y,22,s[7]),A=u(A,C,I,T,_,7,s[8]),T=u(T,A,C,I,b,12,s[9]),I=u(I,T,A,C,x,17,s[10]),C=u(C,I,T,A,w,22,s[11]),A=u(A,C,I,T,S,7,s[12]),T=u(T,A,C,I,k,12,s[13]),I=u(I,T,A,C,M,17,s[14]),C=u(C,I,T,A,D,22,s[15]),A=c(A,C,I,T,l,5,s[16]),T=c(T,A,C,I,m,9,s[17]),I=c(I,T,A,C,w,14,s[18]),C=c(C,I,T,A,o,20,s[19]),A=c(A,C,I,T,v,5,s[20]),T=c(T,A,C,I,x,9,s[21]),I=c(I,T,A,C,D,14,s[22]),C=c(C,I,T,A,g,20,s[23]),A=c(A,C,I,T,b,5,s[24]),T=c(T,A,C,I,M,9,s[25]),I=c(I,T,A,C,p,14,s[26]),C=c(C,I,T,A,_,20,s[27]),A=c(A,C,I,T,k,5,s[28]),T=c(T,A,C,I,d,9,s[29]),I=c(I,T,A,C,y,14,s[30]),C=c(C,I,T,A,S,20,s[31]),A=h(A,C,I,T,v,4,s[32]),T=h(T,A,C,I,_,11,s[33]),I=h(I,T,A,C,w,16,s[34]),C=h(C,I,T,A,M,23,s[35]),A=h(A,C,I,T,l,4,s[36]),T=h(T,A,C,I,g,11,s[37]),I=h(I,T,A,C,y,16,s[38]),C=h(C,I,T,A,x,23,s[39]),A=h(A,C,I,T,k,4,s[40]),T=h(T,A,C,I,o,11,s[41]),I=h(I,T,A,C,p,16,s[42]),C=h(C,I,T,A,m,23,s[43]),A=h(A,C,I,T,b,4,s[44]),T=h(T,A,C,I,S,11,s[45]),I=h(I,T,A,C,D,16,s[46]),C=h(C,I,T,A,d,23,s[47]),A=f(A,C,I,T,o,6,s[48]),T=f(T,A,C,I,y,10,s[49]),I=f(I,T,A,C,M,15,s[50]),C=f(C,I,T,A,v,21,s[51]),A=f(A,C,I,T,S,6,s[52]),T=f(T,A,C,I,p,10,s[53]),I=f(I,T,A,C,x,15,s[54]),C=f(C,I,T,A,l,21,s[55]),A=f(A,C,I,T,_,6,s[56]),T=f(T,A,C,I,D,10,s[57]),I=f(I,T,A,C,m,15,s[58]),C=f(C,I,T,A,k,21,s[59]),A=f(A,C,I,T,g,6,s[60]),T=f(T,A,C,I,w,10,s[61]),I=f(I,T,A,C,d,15,s[62]),C=f(C,I,T,A,b,21,s[63]),a[0]=a[0]+A|0,a[1]=a[1]+C|0,a[2]=a[2]+I|0,a[3]=a[3]+T|0},_doFinalize:function(){var t=this._data,n=t.words,i=8*this._nDataBytes,r=8*t.sigBytes;n[r>>>5]|=128<<24-r%32;var a=e.floor(i/4294967296),o=i;n[15+(r+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),n[14+(r+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t.sigBytes=4*(n.length+1),this._process();for(var s=this._hash,l=s.words,u=0;u<4;u++){var c=l[u];l[u]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return s},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}});function u(t,e,n,i,r,a,o){var s=t+(e&n|~e&i)+r+o;return(s<<a|s>>>32-a)+e}function c(t,e,n,i,r,a,o){var s=t+(e&i|n&~i)+r+o;return(s<<a|s>>>32-a)+e}function h(t,e,n,i,r,a,o){var s=t+(e^n^i)+r+o;return(s<<a|s>>>32-a)+e}function f(t,e,n,i,r,a,o){var s=t+(n^(e|~i))+r+o;return(s<<a|s>>>32-a)+e}n.MD5=a._createHelper(l),n.HmacMD5=a._createHmacHelper(l)}(Math),function(){var e=t,n=e.lib,i=n.WordArray,r=n.Hasher,a=e.algo,o=[],s=a.SHA1=r.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=this._hash.words,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],u=0;u<80;u++){if(u<16)o[u]=0|t[e+u];else{var c=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=c<<1|c>>>31}var h=(i<<5|i>>>27)+l+o[u];h+=u<20?1518500249+(r&a|~r&s):u<40?1859775393+(r^a^s):u<60?(r&a|r&s|a&s)-1894007588:(r^a^s)-899497514,l=s,s=a,a=r<<30|r>>>2,r=i,i=h}n[0]=n[0]+i|0,n[1]=n[1]+r|0,n[2]=n[2]+a|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=Math.floor(n/4294967296),e[15+(i+64>>>9<<4)]=n,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA1=r._createHelper(s),e.HmacSHA1=r._createHmacHelper(s)}(),function(e){var n=t,i=n.lib,r=i.WordArray,a=i.Hasher,o=n.algo,s=[],l=[];(function(){function t(t){for(var n=e.sqrt(t),i=2;i<=n;i++)if(!(t%i))return!1;return!0}function n(t){return 4294967296*(t-(0|t))|0}var i=2,r=0;while(r<64)t(i)&&(r<8&&(s[r]=n(e.pow(i,.5))),l[r]=n(e.pow(i,1/3)),r++),i++})();var u=[],c=o.SHA256=a.extend({_doReset:function(){this._hash=new r.init(s.slice(0))},_doProcessBlock:function(t,e){for(var n=this._hash.words,i=n[0],r=n[1],a=n[2],o=n[3],s=n[4],c=n[5],h=n[6],f=n[7],d=0;d<64;d++){if(d<16)u[d]=0|t[e+d];else{var p=u[d-15],g=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,v=u[d-2],m=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;u[d]=g+u[d-7]+m+u[d-16]}var y=s&c^~s&h,_=i&r^i&a^r&a,b=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),x=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),w=f+x+y+l[d]+u[d],S=b+_;f=h,h=c,c=s,s=o+w|0,o=a,a=r,r=i,i=w+S|0}n[0]=n[0]+i|0,n[1]=n[1]+r|0,n[2]=n[2]+a|0,n[3]=n[3]+o|0,n[4]=n[4]+s|0,n[5]=n[5]+c|0,n[6]=n[6]+h|0,n[7]=n[7]+f|0},_doFinalize:function(){var t=this._data,n=t.words,i=8*this._nDataBytes,r=8*t.sigBytes;return n[r>>>5]|=128<<24-r%32,n[14+(r+64>>>9<<4)]=e.floor(i/4294967296),n[15+(r+64>>>9<<4)]=i,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}});n.SHA256=a._createHelper(c),n.HmacSHA256=a._createHmacHelper(c)}(Math),function(){var e=t,n=e.lib,i=n.WordArray,r=e.enc;r.Utf16=r.Utf16BE={stringify:function(t){for(var e=t.words,n=t.sigBytes,i=[],r=0;r<n;r+=2){var a=e[r>>>2]>>>16-r%4*8&65535;i.push(String.fromCharCode(a))}return i.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>1]|=t.charCodeAt(r)<<16-r%2*16;return i.create(n,2*e)}};function a(t){return t<<8&4278255360|t>>>8&16711935}r.Utf16LE={stringify:function(t){for(var e=t.words,n=t.sigBytes,i=[],r=0;r<n;r+=2){var o=a(e[r>>>2]>>>16-r%4*8&65535);i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>1]|=a(t.charCodeAt(r)<<16-r%2*16);return i.create(n,2*e)}}}(),function(){if("function"==typeof ArrayBuffer){var e=t,n=e.lib,i=n.WordArray,r=i.init,a=i.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!==typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var e=t.byteLength,n=[],i=0;i<e;i++)n[i>>>2]|=t[i]<<24-i%4*8;r.call(this,n,e)}else r.apply(this,arguments)};a.prototype=i}}(),
/** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
function(e){var n=t,i=n.lib,r=i.WordArray,a=i.Hasher,o=n.algo,s=r.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),l=r.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),u=r.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),c=r.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),h=r.create([0,1518500249,1859775393,2400959708,2840853838]),f=r.create([1352829926,1548603684,1836072691,2053994217,0]),d=o.RIPEMD160=a.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=0;n<16;n++){var i=e+n,r=t[i];t[i]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8)}var a,o,d,b,x,w,S,k,M,D,A,C=this._hash.words,I=h.words,T=f.words,O=s.words,P=l.words,E=u.words,L=c.words;w=a=C[0],S=o=C[1],k=d=C[2],M=b=C[3],D=x=C[4];for(n=0;n<80;n+=1)A=a+t[e+O[n]]|0,A+=n<16?p(o,d,b)+I[0]:n<32?g(o,d,b)+I[1]:n<48?v(o,d,b)+I[2]:n<64?m(o,d,b)+I[3]:y(o,d,b)+I[4],A|=0,A=_(A,E[n]),A=A+x|0,a=x,x=b,b=_(d,10),d=o,o=A,A=w+t[e+P[n]]|0,A+=n<16?y(S,k,M)+T[0]:n<32?m(S,k,M)+T[1]:n<48?v(S,k,M)+T[2]:n<64?g(S,k,M)+T[3]:p(S,k,M)+T[4],A|=0,A=_(A,L[n]),A=A+D|0,w=D,D=M,M=_(k,10),k=S,S=A;A=C[1]+d+M|0,C[1]=C[2]+b+D|0,C[2]=C[3]+x+w|0,C[3]=C[4]+a+S|0,C[4]=C[0]+o+k|0,C[0]=A},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();for(var r=this._hash,a=r.words,o=0;o<5;o++){var s=a[o];a[o]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return r},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}});function p(t,e,n){return t^e^n}function g(t,e,n){return t&e|~t&n}function v(t,e,n){return(t|~e)^n}function m(t,e,n){return t&n|e&~n}function y(t,e,n){return t^(e|~n)}function _(t,e){return t<<e|t>>>32-e}n.RIPEMD160=a._createHelper(d),n.HmacRIPEMD160=a._createHmacHelper(d)}(Math),function(){var e=t,n=e.lib,i=n.Base,r=e.enc,a=r.Utf8,o=e.algo;o.HMAC=i.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=a.parse(e));var n=t.blockSize,i=4*n;e.sigBytes>i&&(e=t.finalize(e)),e.clamp();for(var r=this._oKey=e.clone(),o=this._iKey=e.clone(),s=r.words,l=o.words,u=0;u<n;u++)s[u]^=1549556828,l[u]^=909522486;r.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,n=e.finalize(t);e.reset();var i=e.finalize(this._oKey.clone().concat(n));return i}})}(),function(){var e=t,n=e.lib,i=n.Base,r=n.WordArray,a=e.algo,o=a.SHA1,s=a.HMAC,l=a.PBKDF2=i.extend({cfg:i.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){var n=this.cfg,i=s.create(n.hasher,t),a=r.create(),o=r.create([1]),l=a.words,u=o.words,c=n.keySize,h=n.iterations;while(l.length<c){var f=i.update(e).finalize(o);i.reset();for(var d=f.words,p=d.length,g=f,v=1;v<h;v++){g=i.finalize(g),i.reset();for(var m=g.words,y=0;y<p;y++)d[y]^=m[y]}a.concat(f),u[0]++}return a.sigBytes=4*c,a}});e.PBKDF2=function(t,e,n){return l.create(n).compute(t,e)}}(),function(){var e=t,n=e.lib,i=n.Base,r=n.WordArray,a=e.algo,o=a.MD5,s=a.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){var n=this.cfg,i=n.hasher.create(),a=r.create(),o=a.words,s=n.keySize,l=n.iterations;while(o.length<s){u&&i.update(u);var u=i.update(t).finalize(e);i.reset();for(var c=1;c<l;c++)u=i.finalize(u),i.reset();a.concat(u)}return a.sigBytes=4*s,a}});e.EvpKDF=function(t,e,n){return s.create(n).compute(t,e)}}(),function(){var e=t,n=e.lib,i=n.WordArray,r=e.algo,a=r.SHA256,o=r.SHA224=a.extend({_doReset:function(){this._hash=new i.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=a._doFinalize.call(this);return t.sigBytes-=4,t}});e.SHA224=a._createHelper(o),e.HmacSHA224=a._createHmacHelper(o)}(),function(e){var n=t,i=n.lib,r=i.Base,a=i.WordArray,o=n.x64={};o.Word=r.extend({init:function(t,e){this.high=t,this.low=e}}),o.WordArray=r.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=e?n:8*t.length},toX32:function(){for(var t=this.words,e=t.length,n=[],i=0;i<e;i++){var r=t[i];n.push(r.high),n.push(r.low)}return a.create(n,this.sigBytes)},clone:function(){for(var t=r.clone.call(this),e=t.words=this.words.slice(0),n=e.length,i=0;i<n;i++)e[i]=e[i].clone();return t}})}(),function(e){var n=t,i=n.lib,r=i.WordArray,a=i.Hasher,o=n.x64,s=o.Word,l=n.algo,u=[],c=[],h=[];(function(){for(var t=1,e=0,n=0;n<24;n++){u[t+5*e]=(n+1)*(n+2)/2%64;var i=e%5,r=(2*t+3*e)%5;t=i,e=r}for(t=0;t<5;t++)for(e=0;e<5;e++)c[t+5*e]=e+(2*t+3*e)%5*5;for(var a=1,o=0;o<24;o++){for(var l=0,f=0,d=0;d<7;d++){if(1&a){var p=(1<<d)-1;p<32?f^=1<<p:l^=1<<p-32}128&a?a=a<<1^113:a<<=1}h[o]=s.create(l,f)}})();var f=[];(function(){for(var t=0;t<25;t++)f[t]=s.create()})();var d=l.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new s.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var n=this._state,i=this.blockSize/2,r=0;r<i;r++){var a=t[e+2*r],o=t[e+2*r+1];a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);var s=n[r];s.high^=o,s.low^=a}for(var l=0;l<24;l++){for(var d=0;d<5;d++){for(var p=0,g=0,v=0;v<5;v++){s=n[d+5*v];p^=s.high,g^=s.low}var m=f[d];m.high=p,m.low=g}for(d=0;d<5;d++){var y=f[(d+4)%5],_=f[(d+1)%5],b=_.high,x=_.low;for(p=y.high^(b<<1|x>>>31),g=y.low^(x<<1|b>>>31),v=0;v<5;v++){s=n[d+5*v];s.high^=p,s.low^=g}}for(var w=1;w<25;w++){s=n[w];var S=s.high,k=s.low,M=u[w];if(M<32)p=S<<M|k>>>32-M,g=k<<M|S>>>32-M;else p=k<<M-32|S>>>64-M,g=S<<M-32|k>>>64-M;var D=f[c[w]];D.high=p,D.low=g}var A=f[0],C=n[0];A.high=C.high,A.low=C.low;for(d=0;d<5;d++)for(v=0;v<5;v++){w=d+5*v,s=n[w];var I=f[w],T=f[(d+1)%5+5*v],O=f[(d+2)%5+5*v];s.high=I.high^~T.high&O.high,s.low=I.low^~T.low&O.low}s=n[0];var P=h[l];s.high^=P.high,s.low^=P.low}},_doFinalize:function(){var t=this._data,n=t.words,i=(this._nDataBytes,8*t.sigBytes),a=32*this.blockSize;n[i>>>5]|=1<<24-i%32,n[(e.ceil((i+1)/a)*a>>>5)-1]|=128,t.sigBytes=4*n.length,this._process();for(var o=this._state,s=this.cfg.outputLength/8,l=s/8,u=[],c=0;c<l;c++){var h=o[c],f=h.high,d=h.low;f=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),d=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),u.push(d),u.push(f)}return new r.init(u,s)},clone:function(){for(var t=a.clone.call(this),e=t._state=this._state.slice(0),n=0;n<25;n++)e[n]=e[n].clone();return t}});n.SHA3=a._createHelper(d),n.HmacSHA3=a._createHmacHelper(d)}(Math),function(){var e=t,n=e.lib,i=n.Hasher,r=e.x64,a=r.Word,o=r.WordArray,s=e.algo;function l(){return a.create.apply(a,arguments)}var u=[l(1116352408,3609767458),l(1899447441,602891725),l(3049323471,3964484399),l(3921009573,2173295548),l(961987163,4081628472),l(1508970993,3053834265),l(2453635748,2937671579),l(2870763221,3664609560),l(3624381080,2734883394),l(310598401,1164996542),l(607225278,1323610764),l(1426881987,3590304994),l(1925078388,4068182383),l(2162078206,991336113),l(2614888103,633803317),l(3248222580,3479774868),l(3835390401,2666613458),l(4022224774,944711139),l(264347078,2341262773),l(604807628,2007800933),l(770255983,1495990901),l(1249150122,1856431235),l(1555081692,3175218132),l(1996064986,2198950837),l(2554220882,3999719339),l(2821834349,766784016),l(2952996808,2566594879),l(3210313671,3203337956),l(3336571891,1034457026),l(3584528711,2466948901),l(113926993,3758326383),l(338241895,168717936),l(666307205,1188179964),l(773529912,1546045734),l(1294757372,1522805485),l(1396182291,2643833823),l(1695183700,2343527390),l(1986661051,1014477480),l(2177026350,1206759142),l(2456956037,344077627),l(2730485921,1290863460),l(2820302411,3158454273),l(3259730800,3505952657),l(3345764771,106217008),l(3516065817,3606008344),l(3600352804,1432725776),l(4094571909,1467031594),l(275423344,851169720),l(430227734,3100823752),l(506948616,1363258195),l(659060556,3750685593),l(883997877,3785050280),l(958139571,3318307427),l(1322822218,3812723403),l(1537002063,2003034995),l(1747873779,3602036899),l(1955562222,1575990012),l(2024104815,1125592928),l(2227730452,2716904306),l(2361852424,442776044),l(2428436474,593698344),l(2756734187,3733110249),l(3204031479,2999351573),l(3329325298,3815920427),l(3391569614,3928383900),l(3515267271,566280711),l(3940187606,3454069534),l(4118630271,4000239992),l(116418474,1914138554),l(174292421,2731055270),l(289380356,3203993006),l(460393269,320620315),l(685471733,587496836),l(852142971,1086792851),l(1017036298,365543100),l(1126000580,2618297676),l(1288033470,3409855158),l(1501505948,4234509866),l(1607167915,987167468),l(1816402316,1246189591)],c=[];(function(){for(var t=0;t<80;t++)c[t]=l()})();var h=s.SHA512=i.extend({_doReset:function(){this._hash=new o.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var n=this._hash.words,i=n[0],r=n[1],a=n[2],o=n[3],s=n[4],l=n[5],h=n[6],f=n[7],d=i.high,p=i.low,g=r.high,v=r.low,m=a.high,y=a.low,_=o.high,b=o.low,x=s.high,w=s.low,S=l.high,k=l.low,M=h.high,D=h.low,A=f.high,C=f.low,I=d,T=p,O=g,P=v,E=m,L=y,B=_,N=b,R=x,z=w,$=S,F=k,H=M,j=D,V=A,W=C,U=0;U<80;U++){var G=c[U];if(U<16)var q=G.high=0|t[e+2*U],X=G.low=0|t[e+2*U+1];else{var Y=c[U-15],Z=Y.high,K=Y.low,J=(Z>>>1|K<<31)^(Z>>>8|K<<24)^Z>>>7,Q=(K>>>1|Z<<31)^(K>>>8|Z<<24)^(K>>>7|Z<<25),tt=c[U-2],et=tt.high,nt=tt.low,it=(et>>>19|nt<<13)^(et<<3|nt>>>29)^et>>>6,rt=(nt>>>19|et<<13)^(nt<<3|et>>>29)^(nt>>>6|et<<26),at=c[U-7],ot=at.high,st=at.low,lt=c[U-16],ut=lt.high,ct=lt.low;X=Q+st,q=J+ot+(X>>>0<Q>>>0?1:0),X=X+rt,q=q+it+(X>>>0<rt>>>0?1:0),X=X+ct,q=q+ut+(X>>>0<ct>>>0?1:0);G.high=q,G.low=X}var ht=R&$^~R&H,ft=z&F^~z&j,dt=I&O^I&E^O&E,pt=T&P^T&L^P&L,gt=(I>>>28|T<<4)^(I<<30|T>>>2)^(I<<25|T>>>7),vt=(T>>>28|I<<4)^(T<<30|I>>>2)^(T<<25|I>>>7),mt=(R>>>14|z<<18)^(R>>>18|z<<14)^(R<<23|z>>>9),yt=(z>>>14|R<<18)^(z>>>18|R<<14)^(z<<23|R>>>9),_t=u[U],bt=_t.high,xt=_t.low,wt=W+yt,St=V+mt+(wt>>>0<W>>>0?1:0),kt=(wt=wt+ft,St=St+ht+(wt>>>0<ft>>>0?1:0),wt=wt+xt,St=St+bt+(wt>>>0<xt>>>0?1:0),wt=wt+X,St=St+q+(wt>>>0<X>>>0?1:0),vt+pt),Mt=gt+dt+(kt>>>0<vt>>>0?1:0);V=H,W=j,H=$,j=F,$=R,F=z,z=N+wt|0,R=B+St+(z>>>0<N>>>0?1:0)|0,B=E,N=L,E=O,L=P,O=I,P=T,T=wt+kt|0,I=St+Mt+(T>>>0<wt>>>0?1:0)|0}p=i.low=p+T,i.high=d+I+(p>>>0<T>>>0?1:0),v=r.low=v+P,r.high=g+O+(v>>>0<P>>>0?1:0),y=a.low=y+L,a.high=m+E+(y>>>0<L>>>0?1:0),b=o.low=b+N,o.high=_+B+(b>>>0<N>>>0?1:0),w=s.low=w+z,s.high=x+R+(w>>>0<z>>>0?1:0),k=l.low=k+F,l.high=S+$+(k>>>0<F>>>0?1:0),D=h.low=D+j,h.high=M+H+(D>>>0<j>>>0?1:0),C=f.low=C+W,f.high=A+V+(C>>>0<W>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[30+(i+128>>>10<<5)]=Math.floor(n/4294967296),e[31+(i+128>>>10<<5)]=n,t.sigBytes=4*e.length,this._process();var r=this._hash.toX32();return r},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});e.SHA512=i._createHelper(h),e.HmacSHA512=i._createHmacHelper(h)}(),function(){var e=t,n=e.x64,i=n.Word,r=n.WordArray,a=e.algo,o=a.SHA512,s=a.SHA384=o.extend({_doReset:function(){this._hash=new r.init([new i.init(3418070365,3238371032),new i.init(1654270250,914150663),new i.init(2438529370,812702999),new i.init(355462360,4144912697),new i.init(1731405415,4290775857),new i.init(2394180231,1750603025),new i.init(3675008525,1694076839),new i.init(1203062813,3204075428)])},_doFinalize:function(){var t=o._doFinalize.call(this);return t.sigBytes-=16,t}});e.SHA384=o._createHelper(s),e.HmacSHA384=o._createHmacHelper(s)}(),t.lib.Cipher||function(e){var n=t,i=n.lib,r=i.Base,a=i.WordArray,o=i.BufferedBlockAlgorithm,s=n.enc,l=(s.Utf8,s.Base64),u=n.algo,c=u.EvpKDF,h=i.Cipher=o.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,n){this.cfg=this.cfg.extend(n),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?S:b}return function(e){return{encrypt:function(n,i,r){return t(i).encrypt(e,n,i,r)},decrypt:function(n,i,r){return t(i).decrypt(e,n,i,r)}}}}()}),f=(i.StreamCipher=h.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),n.mode={}),d=i.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=f.CBC=function(){var t=d.extend();function n(t,n,i){var r=this._iv;if(r){var a=r;this._iv=e}else a=this._prevBlock;for(var o=0;o<i;o++)t[n+o]^=a[o]}return t.Encryptor=t.extend({processBlock:function(t,e){var i=this._cipher,r=i.blockSize;n.call(this,t,e,r),i.encryptBlock(t,e),this._prevBlock=t.slice(e,e+r)}}),t.Decryptor=t.extend({processBlock:function(t,e){var i=this._cipher,r=i.blockSize,a=t.slice(e,e+r);i.decryptBlock(t,e),n.call(this,t,e,r),this._prevBlock=a}}),t}(),g=n.pad={},v=g.Pkcs7={pad:function(t,e){for(var n=4*e,i=n-t.sigBytes%n,r=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(r);var l=a.create(o,i);t.concat(l)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},m=(i.BlockCipher=h.extend({cfg:h.cfg.extend({mode:p,padding:v}),reset:function(){h.reset.call(this);var t=this.cfg,e=t.iv,n=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var i=n.createEncryptor;else{i=n.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==i?this._mode.init(this,e&&e.words):(this._mode=i.call(n,this,e&&e.words),this._mode.__creator=i)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{e=this._process(!0);t.unpad(e)}return e},blockSize:4}),i.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=n.format={},_=y.OpenSSL={stringify:function(t){var e=t.ciphertext,n=t.salt;if(n)var i=a.create([1398893684,1701076831]).concat(n).concat(e);else i=e;return i.toString(l)},parse:function(t){var e=l.parse(t),n=e.words;if(1398893684==n[0]&&1701076831==n[1]){var i=a.create(n.slice(2,4));n.splice(0,4),e.sigBytes-=16}return m.create({ciphertext:e,salt:i})}},b=i.SerializableCipher=r.extend({cfg:r.extend({format:_}),encrypt:function(t,e,n,i){i=this.cfg.extend(i);var r=t.createEncryptor(n,i),a=r.finalize(e),o=r.cfg;return m.create({ciphertext:a,key:n,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,n,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var r=t.createDecryptor(n,i).finalize(e.ciphertext);return r},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),x=n.kdf={},w=x.OpenSSL={execute:function(t,e,n,i){i||(i=a.random(8));var r=c.create({keySize:e+n}).compute(t,i),o=a.create(r.words.slice(e),4*n);return r.sigBytes=4*e,m.create({key:r,iv:o,salt:i})}},S=i.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:w}),encrypt:function(t,e,n,i){i=this.cfg.extend(i);var r=i.kdf.execute(n,t.keySize,t.ivSize);i.iv=r.iv;var a=b.encrypt.call(this,t,e,r.key,i);return a.mixIn(r),a},decrypt:function(t,e,n,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var r=i.kdf.execute(n,t.keySize,t.ivSize,e.salt);i.iv=r.iv;var a=b.decrypt.call(this,t,e,r.key,i);return a}})}(),t.mode.CFB=function(){var e=t.lib.BlockCipherMode.extend();function n(t,e,n,i){var r=this._iv;if(r){var a=r.slice(0);this._iv=void 0}else a=this._prevBlock;i.encryptBlock(a,0);for(var o=0;o<n;o++)t[e+o]^=a[o]}return e.Encryptor=e.extend({processBlock:function(t,e){var i=this._cipher,r=i.blockSize;n.call(this,t,e,r,i),this._prevBlock=t.slice(e,e+r)}}),e.Decryptor=e.extend({processBlock:function(t,e){var i=this._cipher,r=i.blockSize,a=t.slice(e,e+r);n.call(this,t,e,r,i),this._prevBlock=a}}),e}(),t.mode.ECB=function(){var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),e.Decryptor=e.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),e}(),t.pad.AnsiX923={pad:function(t,e){var n=t.sigBytes,i=4*e,r=i-n%i,a=n+r-1;t.clamp(),t.words[a>>>2]|=r<<24-a%4*8,t.sigBytes+=r},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},t.pad.Iso10126={pad:function(e,n){var i=4*n,r=i-e.sigBytes%i;e.concat(t.lib.WordArray.random(r-1)).concat(t.lib.WordArray.create([r<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},t.pad.Iso97971={pad:function(e,n){e.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(e,n)},unpad:function(e){t.pad.ZeroPadding.unpad(e),e.sigBytes--}},t.mode.OFB=function(){var e=t.lib.BlockCipherMode.extend(),n=e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize,r=this._iv,a=this._keystream;r&&(a=this._keystream=r.slice(0),this._iv=void 0),n.encryptBlock(a,0);for(var o=0;o<i;o++)t[e+o]^=a[o]}});return e.Decryptor=n,e}(),t.pad.NoPadding={pad:function(){},unpad:function(){}},function(e){var n=t,i=n.lib,r=i.CipherParams,a=n.enc,o=a.Hex,s=n.format;s.Hex={stringify:function(t){return t.ciphertext.toString(o)},parse:function(t){var e=o.parse(t);return r.create({ciphertext:e})}}}(),function(){var e=t,n=e.lib,i=n.BlockCipher,r=e.algo,a=[],o=[],s=[],l=[],u=[],c=[],h=[],f=[],d=[],p=[];(function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var n=0,i=0;for(e=0;e<256;e++){var r=i^i<<1^i<<2^i<<3^i<<4;r=r>>>8^255&r^99,a[n]=r,o[r]=n;var g=t[n],v=t[g],m=t[v],y=257*t[r]^16843008*r;s[n]=y<<24|y>>>8,l[n]=y<<16|y>>>16,u[n]=y<<8|y>>>24,c[n]=y;y=16843009*m^65537*v^257*g^16843008*n;h[r]=y<<24|y>>>8,f[r]=y<<16|y>>>16,d[r]=y<<8|y>>>24,p[r]=y,n?(n=g^t[t[t[m^g]]],i^=t[t[i]]):n=i=1}})();var g=[0,1,2,4,8,16,32,64,128,27,54],v=r.AES=i.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,n=t.sigBytes/4,i=this._nRounds=n+6,r=4*(i+1),o=this._keySchedule=[],s=0;s<r;s++)if(s<n)o[s]=e[s];else{var l=o[s-1];s%n?n>6&&s%n==4&&(l=a[l>>>24]<<24|a[l>>>16&255]<<16|a[l>>>8&255]<<8|a[255&l]):(l=l<<8|l>>>24,l=a[l>>>24]<<24|a[l>>>16&255]<<16|a[l>>>8&255]<<8|a[255&l],l^=g[s/n|0]<<24),o[s]=o[s-n]^l}for(var u=this._invKeySchedule=[],c=0;c<r;c++){s=r-c;if(c%4)l=o[s];else l=o[s-4];u[c]=c<4||s<=4?l:h[a[l>>>24]]^f[a[l>>>16&255]]^d[a[l>>>8&255]]^p[a[255&l]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,l,u,c,a)},decryptBlock:function(t,e){var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,h,f,d,p,o);n=t[e+1];t[e+1]=t[e+3],t[e+3]=n},_doCryptBlock:function(t,e,n,i,r,a,o,s){for(var l=this._nRounds,u=t[e]^n[0],c=t[e+1]^n[1],h=t[e+2]^n[2],f=t[e+3]^n[3],d=4,p=1;p<l;p++){var g=i[u>>>24]^r[c>>>16&255]^a[h>>>8&255]^o[255&f]^n[d++],v=i[c>>>24]^r[h>>>16&255]^a[f>>>8&255]^o[255&u]^n[d++],m=i[h>>>24]^r[f>>>16&255]^a[u>>>8&255]^o[255&c]^n[d++],y=i[f>>>24]^r[u>>>16&255]^a[c>>>8&255]^o[255&h]^n[d++];u=g,c=v,h=m,f=y}g=(s[u>>>24]<<24|s[c>>>16&255]<<16|s[h>>>8&255]<<8|s[255&f])^n[d++],v=(s[c>>>24]<<24|s[h>>>16&255]<<16|s[f>>>8&255]<<8|s[255&u])^n[d++],m=(s[h>>>24]<<24|s[f>>>16&255]<<16|s[u>>>8&255]<<8|s[255&c])^n[d++],y=(s[f>>>24]<<24|s[u>>>16&255]<<16|s[c>>>8&255]<<8|s[255&h])^n[d++];t[e]=g,t[e+1]=v,t[e+2]=m,t[e+3]=y},keySize:8});e.AES=i._createHelper(v)}(),function(){var e=t,n=e.lib,i=n.WordArray,r=n.BlockCipher,a=e.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],s=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],l=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],u=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],c=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=a.DES=r.extend({_doReset:function(){for(var t=this._key,e=t.words,n=[],i=0;i<56;i++){var r=o[i]-1;n[i]=e[r>>>5]>>>31-r%32&1}for(var a=this._subKeys=[],u=0;u<16;u++){var c=a[u]=[],h=l[u];for(i=0;i<24;i++)c[i/6|0]|=n[(s[i]-1+h)%28]<<31-i%6,c[4+(i/6|0)]|=n[28+(s[i+24]-1+h)%28]<<31-i%6;c[0]=c[0]<<1|c[0]>>>31;for(i=1;i<7;i++)c[i]=c[i]>>>4*(i-1)+3;c[7]=c[7]<<5|c[7]>>>27}var f=this._invSubKeys=[];for(i=0;i<16;i++)f[i]=a[15-i]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,e,n){this._lBlock=t[e],this._rBlock=t[e+1],f.call(this,4,252645135),f.call(this,16,65535),d.call(this,2,858993459),d.call(this,8,16711935),f.call(this,1,1431655765);for(var i=0;i<16;i++){for(var r=n[i],a=this._lBlock,o=this._rBlock,s=0,l=0;l<8;l++)s|=u[l][((o^r[l])&c[l])>>>0];this._lBlock=o,this._rBlock=a^s}var h=this._lBlock;this._lBlock=this._rBlock,this._rBlock=h,f.call(this,1,1431655765),d.call(this,8,16711935),d.call(this,2,858993459),f.call(this,16,65535),f.call(this,4,252645135),t[e]=this._lBlock,t[e+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function f(t,e){var n=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=n,this._lBlock^=n<<t}function d(t,e){var n=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=n,this._rBlock^=n<<t}e.DES=r._createHelper(h);var p=a.TripleDES=r.extend({_doReset:function(){var t=this._key,e=t.words;this._des1=h.createEncryptor(i.create(e.slice(0,2))),this._des2=h.createEncryptor(i.create(e.slice(2,4))),this._des3=h.createEncryptor(i.create(e.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});e.TripleDES=r._createHelper(p)}(),function(){var e=t,n=e.lib,i=n.StreamCipher,r=e.algo,a=r.RC4=i.extend({_doReset:function(){for(var t=this._key,e=t.words,n=t.sigBytes,i=this._S=[],r=0;r<256;r++)i[r]=r;r=0;for(var a=0;r<256;r++){var o=r%n,s=e[o>>>2]>>>24-o%4*8&255;a=(a+i[r]+s)%256;var l=i[r];i[r]=i[a],i[a]=l}this._i=this._j=0},_doProcessBlock:function(t,e){t[e]^=o.call(this)},keySize:8,ivSize:0});function o(){for(var t=this._S,e=this._i,n=this._j,i=0,r=0;r<4;r++){e=(e+1)%256,n=(n+t[e])%256;var a=t[e];t[e]=t[n],t[n]=a,i|=t[(t[e]+t[n])%256]<<24-8*r}return this._i=e,this._j=n,i}e.RC4=i._createHelper(a);var s=r.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var t=this.cfg.drop;t>0;t--)o.call(this)}});e.RC4Drop=i._createHelper(s)}(),
/** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */
t.mode.CTRGladman=function(){var e=t.lib.BlockCipherMode.extend();function n(t){if(255===(t>>24&255)){var e=t>>16&255,n=t>>8&255,i=255&t;255===e?(e=0,255===n?(n=0,255===i?i=0:++i):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=i}else t+=1<<24;return t}function i(t){return 0===(t[0]=n(t[0]))&&(t[1]=n(t[1])),t}var r=e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize,a=this._iv,o=this._counter;a&&(o=this._counter=a.slice(0),this._iv=void 0),i(o);var s=o.slice(0);n.encryptBlock(s,0);for(var l=0;l<r;l++)t[e+l]^=s[l]}});return e.Decryptor=r,e}(),function(){var e=t,n=e.lib,i=n.StreamCipher,r=e.algo,a=[],o=[],s=[],l=r.Rabbit=i.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,n=0;n<4;n++)t[n]=16711935&(t[n]<<8|t[n]>>>24)|4278255360&(t[n]<<24|t[n]>>>8);var i=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],r=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];this._b=0;for(n=0;n<4;n++)u.call(this);for(n=0;n<8;n++)r[n]^=i[n+4&7];if(e){var a=e.words,o=a[0],s=a[1],l=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),c=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),h=l>>>16|4294901760&c,f=c<<16|65535&l;r[0]^=l,r[1]^=h,r[2]^=c,r[3]^=f,r[4]^=l,r[5]^=h,r[6]^=c,r[7]^=f;for(n=0;n<4;n++)u.call(this)}},_doProcessBlock:function(t,e){var n=this._X;u.call(this),a[0]=n[0]^n[5]>>>16^n[3]<<16,a[1]=n[2]^n[7]>>>16^n[5]<<16,a[2]=n[4]^n[1]>>>16^n[7]<<16,a[3]=n[6]^n[3]>>>16^n[1]<<16;for(var i=0;i<4;i++)a[i]=16711935&(a[i]<<8|a[i]>>>24)|4278255360&(a[i]<<24|a[i]>>>8),t[e+i]^=a[i]},blockSize:4,ivSize:2});function u(){for(var t=this._X,e=this._C,n=0;n<8;n++)o[n]=e[n];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<o[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<o[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<o[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<o[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<o[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<o[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<o[6]>>>0?1:0)|0,this._b=e[7]>>>0<o[7]>>>0?1:0;for(n=0;n<8;n++){var i=t[n]+e[n],r=65535&i,a=i>>>16,l=((r*r>>>17)+r*a>>>15)+a*a,u=((4294901760&i)*i|0)+((65535&i)*i|0);s[n]=l^u}t[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,t[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,t[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,t[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,t[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,t[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,t[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,t[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}e.Rabbit=i._createHelper(l)}(),t.mode.CTR=function(){var e=t.lib.BlockCipherMode.extend(),n=e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize,r=this._iv,a=this._counter;r&&(a=this._counter=r.slice(0),this._iv=void 0);var o=a.slice(0);n.encryptBlock(o,0),a[i-1]=a[i-1]+1|0;for(var s=0;s<i;s++)t[e+s]^=o[s]}});return e.Decryptor=n,e}(),function(){var e=t,n=e.lib,i=n.StreamCipher,r=e.algo,a=[],o=[],s=[],l=r.RabbitLegacy=i.extend({_doReset:function(){var t=this._key.words,e=this.cfg.iv,n=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],i=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];this._b=0;for(var r=0;r<4;r++)u.call(this);for(r=0;r<8;r++)i[r]^=n[r+4&7];if(e){var a=e.words,o=a[0],s=a[1],l=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),c=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),h=l>>>16|4294901760&c,f=c<<16|65535&l;i[0]^=l,i[1]^=h,i[2]^=c,i[3]^=f,i[4]^=l,i[5]^=h,i[6]^=c,i[7]^=f;for(r=0;r<4;r++)u.call(this)}},_doProcessBlock:function(t,e){var n=this._X;u.call(this),a[0]=n[0]^n[5]>>>16^n[3]<<16,a[1]=n[2]^n[7]>>>16^n[5]<<16,a[2]=n[4]^n[1]>>>16^n[7]<<16,a[3]=n[6]^n[3]>>>16^n[1]<<16;for(var i=0;i<4;i++)a[i]=16711935&(a[i]<<8|a[i]>>>24)|4278255360&(a[i]<<24|a[i]>>>8),t[e+i]^=a[i]},blockSize:4,ivSize:2});function u(){for(var t=this._X,e=this._C,n=0;n<8;n++)o[n]=e[n];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<o[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<o[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<o[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<o[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<o[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<o[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<o[6]>>>0?1:0)|0,this._b=e[7]>>>0<o[7]>>>0?1:0;for(n=0;n<8;n++){var i=t[n]+e[n],r=65535&i,a=i>>>16,l=((r*r>>>17)+r*a>>>15)+a*a,u=((4294901760&i)*i|0)+((65535&i)*i|0);s[n]=l^u}t[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,t[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,t[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,t[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,t[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,t[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,t[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,t[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}e.RabbitLegacy=i._createHelper(l)}(),t.pad.ZeroPadding={pad:function(t,e){var n=4*e;t.clamp(),t.sigBytes+=n-(t.sigBytes%n||n)},unpad:function(t){var e=t.words,n=t.sigBytes-1;while(!(e[n>>>2]>>>24-n%4*8&255))n--;t.sigBytes=n+1}},t})},"34ff":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(t){var e,n=348;for(e=32768;e>8;e>>=1)n+=this.lunarInfo[t-1900]&e?1:0;return n+this.leapDays(t)},leapMonth:function(t){return 15&this.lunarInfo[t-1900]},leapDays:function(t){return this.leapMonth(t)?65536&this.lunarInfo[t-1900]?30:29:0},monthDays:function(t,e){return e>12||e<1?-1:this.lunarInfo[t-1900]&65536>>e?30:29},solarDays:function(t,e){if(e>12||e<1)return-1;var n=e-1;return 1==n?t%4==0&&t%100!=0||t%400==0?29:28:this.solarMonth[n]},toGanZhiYear:function(t){var e=(t-3)%10,n=(t-3)%12;return 0==e&&(e=10),0==n&&(n=12),this.Gan[e-1]+this.Zhi[n-1]},toAstro:function(t,e){var n="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯",i=[20,19,21,21,21,22,23,23,23,23,22,22];return n.substr(2*t-(e<i[t-1]?2:0),2)+"座"},toGanZhi:function(t){return this.Gan[t%10]+this.Zhi[t%12]},getTerm:function(t,e){if(t<1900||t>2100)return-1;if(e<1||e>24)return-1;var n=this.sTermInfo[t-1900],i=[parseInt("0x"+n.substr(0,5)).toString(),parseInt("0x"+n.substr(5,5)).toString(),parseInt("0x"+n.substr(10,5)).toString(),parseInt("0x"+n.substr(15,5)).toString(),parseInt("0x"+n.substr(20,5)).toString(),parseInt("0x"+n.substr(25,5)).toString()],r=[i[0].substr(0,1),i[0].substr(1,2),i[0].substr(3,1),i[0].substr(4,2),i[1].substr(0,1),i[1].substr(1,2),i[1].substr(3,1),i[1].substr(4,2),i[2].substr(0,1),i[2].substr(1,2),i[2].substr(3,1),i[2].substr(4,2),i[3].substr(0,1),i[3].substr(1,2),i[3].substr(3,1),i[3].substr(4,2),i[4].substr(0,1),i[4].substr(1,2),i[4].substr(3,1),i[4].substr(4,2),i[5].substr(0,1),i[5].substr(1,2),i[5].substr(3,1),i[5].substr(4,2)];return parseInt(r[e-1])},toChinaMonth:function(t){if(t>12||t<1)return-1;var e=this.nStr3[t-1];return e+="月",e},toChinaDay:function(t){var e;switch(t){case 10:e="初十";break;case 20:e="二十";break;case 30:e="三十";break;default:e=this.nStr2[Math.floor(t/10)],e+=this.nStr1[t%10]}return e},getAnimal:function(t){return this.Animals[(t-4)%12]},solar2lunar:function(t,e,n){if(t<1900||t>2100)return-1;if(1900==t&&1==e&&n<31)return-1;if(t)i=new Date(t,parseInt(e)-1,n);else var i=new Date;var r,a=0,o=0,s=(t=i.getFullYear(),e=i.getMonth()+1,n=i.getDate(),(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())-Date.UTC(1900,0,31))/864e5);for(r=1900;r<2101&&s>0;r++)o=this.lYearDays(r),s-=o;s<0&&(s+=o,r--);var l=new Date,u=!1;l.getFullYear()==t&&l.getMonth()+1==e&&l.getDate()==n&&(u=!0);var c=i.getDay(),h=this.nStr1[c];0==c&&(c=7);var f=r,d=(a=this.leapMonth(r),!1);for(r=1;r<13&&s>0;r++)a>0&&r==a+1&&0==d?(--r,d=!0,o=this.leapDays(f)):o=this.monthDays(f,r),1==d&&r==a+1&&(d=!1),s-=o;0==s&&a>0&&r==a+1&&(d?d=!1:(d=!0,--r)),s<0&&(s+=o,--r);var p=r,g=s+1,v=e-1,m=this.toGanZhiYear(f),y=this.getTerm(t,2*e-1),_=this.getTerm(t,2*e),b=this.toGanZhi(12*(t-1900)+e+11);n>=y&&(b=this.toGanZhi(12*(t-1900)+e+12));var x=!1,w=null;y==n&&(x=!0,w=this.solarTerm[2*e-2]),_==n&&(x=!0,w=this.solarTerm[2*e-1]);var S=Date.UTC(t,v,1,0,0,0,0)/864e5+25567+10,k=this.toGanZhi(S+n-1),M=this.toAstro(e,n);return{lYear:f,lMonth:p,lDay:g,Animal:this.getAnimal(f),IMonthCn:(d?"闰":"")+this.toChinaMonth(p),IDayCn:this.toChinaDay(g),cYear:t,cMonth:e,cDay:n,gzYear:m,gzMonth:b,gzDay:k,isToday:u,isLeap:d,nWeek:c,ncWeek:"星期"+h,isTerm:x,Term:w,astro:M}},lunar2solar:function(t,e,n,i){i=!!i;var r=this.leapMonth(t);this.leapDays(t);if(i&&r!=e)return-1;if(2100==t&&12==e&&n>1||1900==t&&1==e&&n<31)return-1;var a=this.monthDays(t,e),o=a;if(i&&(o=this.leapDays(t,e)),t<1900||t>2100||n>o)return-1;for(var s=0,l=1900;l<t;l++)s+=this.lYearDays(l);var u=0,c=!1;for(l=1;l<e;l++)u=this.leapMonth(t),c||u<=l&&u>0&&(s+=this.leapDays(t),c=!0),s+=this.monthDays(t,l);i&&(s+=a);var h=Date.UTC(1900,1,30,0,0,0),f=new Date(864e5*(s+n-31)+h),d=f.getUTCFullYear(),p=f.getUTCMonth()+1,g=f.getUTCDate();return this.solar2lunar(d,p,g)}},r=i;e.default=r},"36e0":function(t,e,n){"use strict";(function(t){!function(t,n){n(e)}(0,function(e){var n,i=2311,r=function(){return i++},a="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:function(t){var e={},n=t.match(/Firefox\/([\d.]+)/),i=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),r=t.match(/Edge\/([\d.]+)/),a=/micromessenger/i.test(t);return n&&(e.firefox=!0,e.version=n[1]),i&&(e.ie=!0,e.version=i[1]),r&&(e.edge=!0,e.version=r[1]),a&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&11<=e.version),domSupported:"undefined"!=typeof document}}(navigator.userAgent),o={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},s={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},l=Object.prototype.toString,u=Array.prototype,c=u.forEach,h=u.filter,f=u.slice,d=u.map,p=u.reduce,g={};function v(t){if(null==t||"object"!=typeof t)return t;var e=t,n=l.call(t);if("[object Array]"===n){if(!X(t)){e=[];for(var i=0,r=t.length;i<r;i++)e[i]=v(t[i])}}else if(s[n]){if(!X(t)){var a=t.constructor;if(t.constructor.from)e=a.from(t);else for(e=new a(t.length),i=0,r=t.length;i<r;i++)e[i]=v(t[i])}}else if(!o[n]&&!X(t)&&!R(t))for(var u in e={},t)t.hasOwnProperty(u)&&(e[u]=v(t[u]));return e}function m(t,e,n){if(!L(e)||!L(t))return n?v(e):t;for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],a=e[i];!L(a)||!L(r)||O(a)||O(r)||R(a)||R(r)||B(a)||B(r)||X(a)||X(r)?!n&&i in t||(t[i]=v(e[i])):m(r,a,n)}return t}function y(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function _(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function b(){return g.createCanvas()}function x(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function w(t,e){var n=t.prototype;function i(){}for(var r in i.prototype=e.prototype,t.prototype=new i,n)n.hasOwnProperty(r)&&(t.prototype[r]=n[r]);(t.prototype.constructor=t).superClass=e}function S(t,e,n){_(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function k(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function M(t,e,n){if(t&&e)if(t.forEach&&t.forEach===c)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function D(t,e,n){if(t&&e){if(t.map&&t.map===d)return t.map(e,n);for(var i=[],r=0,a=t.length;r<a;r++)i.push(e.call(n,t[r],r,t));return i}}function A(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===p)return t.reduce(e,n,i);for(var r=0,a=t.length;r<a;r++)n=e.call(i,n,t[r],r,t);return n}}function C(t,e,n){if(t&&e){if(t.filter&&t.filter===h)return t.filter(e,n);for(var i=[],r=0,a=t.length;r<a;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function I(t,e){var n=f.call(arguments,2);return function(){return t.apply(e,n.concat(f.call(arguments)))}}function T(t){var e=f.call(arguments,1);return function(){return t.apply(this,e.concat(f.call(arguments)))}}function O(t){return"[object Array]"===l.call(t)}function P(t){return"function"==typeof t}function E(t){return"[object String]"===l.call(t)}function L(t){var e=typeof t;return"function"==e||!!t&&"object"==e}function B(t){return!!o[l.call(t)]}function N(t){return!!s[l.call(t)]}function R(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function z(t){return t!=t}function $(){for(var t=0,e=arguments.length;t<e;t++)if(null!=arguments[t])return arguments[t]}function F(t,e){return null!=t?t:e}function H(t,e,n){return null!=t?t:null!=e?e:n}function j(){return Function.call.apply(f,arguments)}function V(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function W(t,e){if(!t)throw new Error(e)}function U(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}g.createCanvas=function(){return document.createElement("canvas")};var G="__ec_primitive__";function q(t){t[G]=!0}function X(t){return t[G]}function Y(t){var e=O(t);this.data={};var n=this;function i(t,i){e?n.set(t,i):n.set(i,t)}t instanceof Y?t.each(i):t&&M(t,i)}function Z(t){return new Y(t)}function K(){}Y.prototype={constructor:Y,get:function(t){return this.data.hasOwnProperty(t)?this.data[t]:null},set:function(t,e){return this.data[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=I(t,e)),this.data)this.data.hasOwnProperty(n)&&t(this.data[n],n)},removeKey:function(t){delete this.data[t]}};var J="undefined"==typeof Float32Array?Array:Float32Array;function Q(t,e){var n=new J(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function tt(t){var e=new J(2);return e[0]=t[0],e[1]=t[1],e}function et(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function nt(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function it(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function rt(t,e){var n=function(t){return Math.sqrt(function(t){return t[0]*t[0]+t[1]*t[1]}(t))}(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function at(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}var ot=at,st=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};function lt(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function ut(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function ct(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function ht(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function ft(t,e){return{target:t,topTarget:e&&e.topTarget}}ht.prototype={constructor:ht,_dragStart:function(t){var e=t.target;e&&e.draggable&&((this._draggingTarget=e).dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(ft(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,a=i-this._y;this._x=n,this._y=i,e.drift(r,a,t),this.dispatchToElement(ft(e,t),"drag",t.event);var o=this.findHover(n,i,e).target,s=this._dropTarget;e!==(this._dropTarget=o)&&(s&&o!==s&&this.dispatchToElement(ft(s,t),"dragleave",t.event),o&&o!==s&&this.dispatchToElement(ft(o,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(ft(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(ft(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var dt=Array.prototype.slice,pt=function(t){this._$handlers={},this._$eventProcessor=t};function gt(t,e,n,i,r,a){var o=t._$handlers;if("function"==typeof n&&(r=i,i=n,n=null),!i||!e)return t;n=function(t,e){var n=t._$eventProcessor;return null!=e&&n&&n.normalizeQuery&&(e=n.normalizeQuery(e)),e}(t,n),o[e]||(o[e]=[]);for(var s=0;s<o[e].length;s++)if(o[e][s].h===i)return t;var l={h:i,one:a,query:n,ctx:r||t,callAtLast:i.zrEventfulCallAtLast},u=o[e].length-1,c=o[e][u];return c&&c.callAtLast?o[e].splice(u,0,l):o[e].push(l),t}pt.prototype={constructor:pt,one:function(t,e,n,i){return gt(this,t,e,n,i,!0)},on:function(t,e,n,i){return gt(this,t,e,n,i,!1)},isSilent:function(t){var e=this._$handlers;return!e[t]||!e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;r<a;r++)n[t][r].h!==e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;3<r&&(i=dt.call(i,1));for(var a=e.length,o=0;o<a;){var s=e[o];if(n&&n.filter&&null!=s.query&&!n.filter(t,s.query))o++;else{switch(r){case 1:s.h.call(s.ctx);break;case 2:s.h.call(s.ctx,i[1]);break;case 3:s.h.call(s.ctx,i[1],i[2]);break;default:s.h.apply(s.ctx,i)}s.one?(e.splice(o,1),a--):o++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],n=this._$eventProcessor;if(e){var i=arguments,r=i.length;4<r&&(i=dt.call(i,1,i.length-1));for(var a=i[i.length-1],o=e.length,s=0;s<o;){var l=e[s];if(n&&n.filter&&null!=l.query&&!n.filter(t,l.query))s++;else{switch(r){case 1:l.h.call(a);break;case 2:l.h.call(a,i[1]);break;case 3:l.h.call(a,i[1],i[2]);break;default:l.h.apply(a,i)}l.one?(e.splice(s,1),o--):s++}}}return n&&n.afterTrigger&&n.afterTrigger(t),this}};var vt=Math.log(2);function mt(t,e,n,i,r,a){var o=i+"-"+r,s=t.length;if(a.hasOwnProperty(o))return a[o];if(1===e){var l=Math.round(Math.log((1<<s)-1&~r)/vt);return t[n][l]}for(var u=i|1<<n,c=n+1;i&1<<c;)c++;for(var h=0,f=0,d=0;f<s;f++){var p=1<<f;p&r||(h+=(d%2?-1:1)*t[n][f]*mt(t,e-1,c,u,r|p,a),d++)}return a[o]=h}var yt="undefined"!=typeof window&&!!window.addEventListener,_t=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bt="___zrEVENTSAVED",xt=[];function wt(t,e,n,i){return n=n||{},i||!a.canvasSupported?St(t,e,n):a.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):St(t,e,n),n}function St(t,e,n){if(t.getBoundingClientRect&&a.domSupported){var i=e.clientX,r=e.clientY;if("CANVAS"===t.nodeName.toUpperCase()){var o=t.getBoundingClientRect();return n.zrX=i-o.left,void(n.zrY=r-o.top)}var s=t[bt]||(t[bt]={}),l=function(t,e){for(var n=e.transformer,i=e.srcCoords,r=!0,a=[],o=[],s=0;s<4;s++){var l=t[s].getBoundingClientRect(),u=2*s,c=l.left,h=l.top;a.push(c,h),r&=i&&c===i[u]&&h===i[1+u],o.push(t[s].offsetLeft,t[s].offsetTop)}return r?n:(e.srcCoords=a,e.transformer=function(t,e){var n=[[t[0],t[1],1,0,0,0,-e[0]*t[0],-e[0]*t[1]],[0,0,0,t[0],t[1],1,-e[1]*t[0],-e[1]*t[1]],[t[2],t[3],1,0,0,0,-e[2]*t[2],-e[2]*t[3]],[0,0,0,t[2],t[3],1,-e[3]*t[2],-e[3]*t[3]],[t[4],t[5],1,0,0,0,-e[4]*t[4],-e[4]*t[5]],[0,0,0,t[4],t[5],1,-e[5]*t[4],-e[5]*t[5]],[t[6],t[7],1,0,0,0,-e[6]*t[6],-e[6]*t[7]],[0,0,0,t[6],t[7],1,-e[7]*t[6],-e[7]*t[7]]],i={},r=mt(n,8,0,0,0,i);if(0!==r){for(var a=[],o=0;o<8;o++)for(var s=0;s<8;s++)null==a[s]&&(a[s]=0),a[s]+=((o+s)%2?-1:1)*mt(n,7,0===o?1:0,1<<o,1<<s,i)/r*e[o];return function(t,e,n){var i=e*a[6]+n*a[7]+1;t[0]=(e*a[0]+n*a[1]+a[2])/i,t[1]=(e*a[3]+n*a[4]+a[5])/i}}}(a,o))}(function(t,e){var n=e.markers;if(n)return n;n=e.markers=[];for(var i=["left","right"],r=["top","bottom"],a=0;a<4;a++){var o=document.createElement("div"),s=o.style,l=a%2,u=(a>>1)%2;s.cssText=["position:absolute","visibility: hidden","padding: 0","margin: 0","border-width: 0","width:0","height:0",i[l]+":0",r[u]+":0",i[1-l]+":auto",r[1-u]+":auto",""].join("!important;"),t.appendChild(o),n.push(o)}return n}(t,s),s);if(l)return l(xt,i,r),n.zrX=xt[0],void(n.zrY=xt[1])}n.zrX=n.zrY=0}function kt(t,e,n){if(null!=(e=e||window.event).zrX)return e;var i=e.type;if(i&&0<=i.indexOf("touch")){var r="touchend"!==i?e.targetTouches[0]:e.changedTouches[0];r&&wt(t,r,e,n)}else wt(t,e,e,n),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var a=e.button;return null==e.which&&void 0!==a&&_t.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e}function Mt(){this._track=[]}var Dt=yt?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0};function At(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}Mt.prototype={constructor:Mt,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},a=0,o=i.length;a<o;a++){var s=i[a],l=wt(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Ct)if(Ct.hasOwnProperty(e)){var n=Ct[e](this._track,t);if(n)return n}}};var Ct={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&1<r.length&&i&&1<i.length){var a=At(i)/At(r);isFinite(a)||(a=1),e.pinchScale=a;var o=function(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}(i);return e.pinchX=o[0],e.pinchY=o[1],{type:"pinch",target:t[0].target,event:e}}}}},It="silent";function Tt(t){Dt(this.event)}function Ot(){}function Pt(t,e,n,i){pt.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new Ot,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,this._gestureMgr,ht.call(this),this.setHandlerProxy(n)}Ot.prototype.dispose=function(){};var Et=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"];function Lt(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||It}return!1}Pt.prototype={constructor:Pt,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(M(Et,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);for(var e,n=t.toElement||t.relatedTarget;(n=n&&n.parentNode)&&9!==n.nodeType&&!(e=n===this.painterRoot););e||this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,a=function(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which,stop:Tt}}(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;0<=a;a--){var o;if(i[a]!==n&&!i[a].ignore&&(o=Lt(i[a],t,e))&&(r.topTarget||(r.topTarget=i[a]),o!==It)){r.target=i[a];break}}return r},processGesture:function(t,e){this._gestureMgr||(this._gestureMgr=new Mt);var n=this._gestureMgr;"start"===e&&n.clear();var i=n.recognize(t,this.findHover(t.zrX,t.zrY,null).target,this.proxy.dom);if("end"===e&&n.clear(),i){var r=i.type;t.gestureEvent=r,this.dispatchToElement({target:i.target},r,i.event)}}},M(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Pt.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||4<ot(this._downPoint,[e.zrX,e.zrY]))return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),S(Pt,pt),S(Pt,ht);var Bt="undefined"==typeof Float32Array?Array:Float32Array;function Nt(){var t=new Bt(6);return Rt(t),t}function Rt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function zt(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t}function $t(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function Ft(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+o*u,t[1]=-i*u+o*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*a+u*l,t[5]=c*l-u*a,t}function Ht(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function jt(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null}var Vt=Rt;function Wt(t){return 5e-5<t||t<-5e-5}var Ut=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Gt=Ut.prototype;Gt.transform=null,Gt.needLocalTransform=function(){return Wt(this.rotation)||Wt(this.position[0])||Wt(this.position[1])||Wt(this.scale[0]-1)||Wt(this.scale[1]-1)};var qt=[];Gt.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;if(n||e){i=i||Nt(),n?this.getLocalTransform(i):Vt(i),e&&(n?zt(i,t.transform,i):function(t,e){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5]}(i,t.transform)),this.transform=i;var r=this.globalScaleRatio;if(null!=r&&1!==r){this.getGlobalScale(qt);var a=qt[0]<0?-1:1,o=qt[1]<0?-1:1,s=((qt[0]-a)*r+a)/qt[0]||0,l=((qt[1]-o)*r+o)/qt[1]||0;i[0]*=s,i[1]*=s,i[2]*=l,i[3]*=l}this.invTransform=this.invTransform||Nt(),jt(this.invTransform,i)}else i&&Vt(i)},Gt.getLocalTransform=function(t){return Ut.getLocalTransform(this,t)},Gt.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Gt.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Xt=[],Yt=Nt();Gt.setLocalTransform=function(t){if(t){var e=t[0]*t[0]+t[1]*t[1],n=t[2]*t[2]+t[3]*t[3],i=this.position,r=this.scale;Wt(e-1)&&(e=Math.sqrt(e)),Wt(n-1)&&(n=Math.sqrt(n)),t[0]<0&&(e=-e),t[3]<0&&(n=-n),i[0]=t[4],i[1]=t[5],r[0]=e,r[1]=n,this.rotation=Math.atan2(-t[1]/n,t[0]/e)}},Gt.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(zt(Xt,t.invTransform,e),e=Xt);var n=this.origin;n&&(n[0]||n[1])&&(Yt[4]=n[0],Yt[5]=n[1],zt(Xt,e,Yt),Xt[4]-=n[0],Xt[5]-=n[1],e=Xt),this.setLocalTransform(e)}},Gt.getGlobalScale=function(t){var e=this.transform;return t=t||[],e?(t[0]=Math.sqrt(e[0]*e[0]+e[1]*e[1]),t[1]=Math.sqrt(e[2]*e[2]+e[3]*e[3]),e[0]<0&&(t[0]=-t[0]),e[3]<0&&(t[1]=-t[1])):(t[0]=1,t[1]=1),t},Gt.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&lt(n,n,i),n},Gt.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&lt(n,n,i),n},Ut.getLocalTransform=function(t,e){Vt(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,a=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),Ht(e,e,i),r&&Ft(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=a[0],e[5]+=a[1],e};var Zt={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(e=!n||n<1?(n=1,.1):.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(e=!n||n<1?(n=1,.1):.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(e=!n||n<1?(n=1,.1):.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){return t*t*(2.70158*t-1.70158)},backOut:function(t){return--t*t*(2.70158*t+1.70158)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((1+e)*t-e)*.5:.5*((t-=2)*t*((1+e)*t+e)+2)},bounceIn:function(t){return 1-Zt.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Zt.bounceIn(2*t):.5*Zt.bounceOut(2*t-1)+.5}};function Kt(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function Jt(){this.head=null,this.tail=null,this._len=0}Kt.prototype={constructor:Kt,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Zt[i]:i,a="function"==typeof r?r(n):n;return this.fire("frame",a),1===n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Qt=Jt.prototype;function te(t){this._list=new Jt,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null}Qt.insert=function(t){var e=new ee(t);return this.insertEntry(e),e},Qt.insertEntry=function(t){this.head?((this.tail.next=t).prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Qt.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Qt.len=function(){return this._len},Qt.clear=function(){this.head=this.tail=null,this._len=0};var ee=function(t){this.value=t,this.next,this.prev},ne=te.prototype;ne.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var a=n.len(),o=this._lastRemovedEntry;if(a>=this._maxSize&&0<a){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}o?o.value=e:o=new ee(e),o.key=t,n.insertEntry(o),i[t]=o}return r},ne.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},ne.clear=function(){this._list.clear(),this._map={}};var ie={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function re(t){return(t=Math.round(t))<0?0:255<t?255:t}function ae(t){return t<0?0:1<t?1:t}function oe(t){return t.length&&"%"===t.charAt(t.length-1)?re(parseFloat(t)/100*255):re(parseInt(t,10))}function se(t){return t.length&&"%"===t.charAt(t.length-1)?ae(parseFloat(t)/100):ae(parseFloat(t))}function le(t,e,n){return n<0?n+=1:1<n&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function ue(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function ce(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var he=new te(20),fe=null;function de(t,e){fe&&ce(fe,e),fe=he.put(t,fe||e.slice())}function pe(t,e){if(t){e=e||[];var n=he.get(t);if(n)return ce(e,n);var i,r=(t+="").replace(/ /g,"").toLowerCase();if(r in ie)return ce(e,ie[r]),de(t,e),e;if("#"===r.charAt(0))return 4===r.length?0<=(i=parseInt(r.substr(1),16))&&i<=4095?(ue(e,(3840&i)>>4|(3840&i)>>8,240&i|(240&i)>>4,15&i|(15&i)<<4,1),de(t,e),e):void ue(e,0,0,0,1):7===r.length?0<=(i=parseInt(r.substr(1),16))&&i<=16777215?(ue(e,(16711680&i)>>16,(65280&i)>>8,255&i,1),de(t,e),e):void ue(e,0,0,0,1):void 0;var a=r.indexOf("("),o=r.indexOf(")");if(-1!==a&&o+1===r.length){var s=r.substr(0,a),l=r.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(4!==l.length)return void ue(e,0,0,0,1);u=se(l.pop());case"rgb":return 3!==l.length?void ue(e,0,0,0,1):(ue(e,oe(l[0]),oe(l[1]),oe(l[2]),u),de(t,e),e);case"hsla":return 4!==l.length?void ue(e,0,0,0,1):(l[3]=se(l[3]),ge(l,e),de(t,e),e);case"hsl":return 3!==l.length?void ue(e,0,0,0,1):(ge(l,e),de(t,e),e);default:return}}ue(e,0,0,0,1)}}function ge(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=se(t[1]),r=se(t[2]),a=r<=.5?r*(i+1):r+i-r*i,o=2*r-a;return ue(e=e||[],re(255*le(o,a,n+1/3)),re(255*le(o,a,n)),re(255*le(o,a,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function ve(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}var me=Array.prototype.slice;function ye(t,e){return t[e]}function _e(t,e,n){t[e]=n}function be(t,e,n){return(e-t)*n+t}function xe(t,e,n){return.5<n?e:t}function we(t,e,n,i,r){var a=t.length;if(1===r)for(var o=0;o<a;o++)i[o]=be(t[o],e[o],n);else{var s=a&&t[0].length;for(o=0;o<a;o++)for(var l=0;l<s;l++)i[o][l]=be(t[o][l],e[o][l],n)}}function Se(t,e,n){var i=t.length,r=e.length;if(i!==r)if(r<i)t.length=r;else for(var a=i;a<r;a++)t.push(1===n?e[a]:me.call(e[a]));var o=t[0]&&t[0].length;for(a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var s=0;s<o;s++)isNaN(t[a][s])&&(t[a][s]=e[a][s])}function ke(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(var r=0;r<i;r++)if(t[r]!==e[r])return!1}else{var a=t[0].length;for(r=0;r<i;r++)for(var o=0;o<a;o++)if(t[r][o]!==e[r][o])return!1}return!0}function Me(t,e,n,i,r,a,o,s,l){var u=t.length;if(1===l)for(var c=0;c<u;c++)s[c]=De(t[c],e[c],n[c],i[c],r,a,o);else{var h=t[0].length;for(c=0;c<u;c++)for(var f=0;f<h;f++)s[c][f]=De(t[c][f],e[c][f],n[c][f],i[c][f],r,a,o)}}function De(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Ae(t){if(k(t)){var e=t.length;if(k(t[0])){for(var n=[],i=0;i<e;i++)n.push(me.call(t[i]));return n}return me.call(t)}return t}function Ce(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Ie(t,e,n,i,r,a){var o=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var c,h=k(i[0].value),f=!1,d=!1,p=h?function(t){var e=t[t.length-1].value;return k(e&&e[0])?2:1}(i):0;i.sort(function(t,e){return t.time-e.time}),c=i[u-1].time;for(var g=[],v=[],m=i[0].value,y=!0,_=0;_<u;_++){g.push(i[_].time/c);var b=i[_].value;if(h&&ke(b,m,p)||!h&&b===m||(y=!1),"string"==typeof(m=b)){var x=pe(b);x?(b=x,f=!0):d=!0}v.push(b)}if(a||!y){var w=v[u-1];for(_=0;_<u-1;_++)h?Se(v[_],w,p):!isNaN(v[_])||isNaN(w)||d||f||(v[_]=w);h&&Se(o(t._target,r),w,p);var S,M,D,A,C,I=0,T=0;if(f)var O=[0,0,0,0];var P=new Kt({target:t._target,life:c,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<T){for(n=Math.min(I+1,u-1);0<=n&&!(g[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=I;n<u&&!(g[n]>e);n++);n=Math.min(n-1,u-2)}T=e;var i=g[(I=n)+1]-g[n];if(0!=i)if(S=(e-g[n])/i,l)if(D=v[n],M=v[0===n?n:n-1],A=v[u-2<n?u-1:n+1],C=v[u-3<n?u-1:n+2],h)Me(M,D,A,C,S,S*S,S*S*S,o(t,r),p);else{if(f)a=Me(M,D,A,C,S,S*S,S*S*S,O,1),a=Ce(O);else{if(d)return xe(D,A,S);a=De(M,D,A,C,S,S*S,S*S*S)}s(t,r,a)}else if(h)we(v[n],v[n+1],S,o(t,r),p);else{var a;if(f)we(v[n],v[n+1],S,O,1),a=Ce(O);else{if(d)return xe(v[n],v[n+1],S);a=be(v[n],v[n+1],S)}s(t,r,a)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function Te(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||ye,this._setter=i||_e,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]}Te.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Ae(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){function n(){--a||r._doneCallback()}var i,r=this,a=0;for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var s=Ie(this,t,n,this._tracks[o],o,e);s&&(this._clipList.push(s),a++,this.animation&&this.animation.addClip(s),i=s)}if(i){var l=i.onframe;i.onframe=function(t,e){l(t,e);for(var n=0;n<r._onframeList.length;n++)r._onframeList[n](t,e)}}return a||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Oe=1;"undefined"!=typeof window&&(Oe=Math.max(window.devicePixelRatio||1,1));var Pe=Oe,Ee=function(){};function Le(){this.animators=[]}var Be=Ee;function Ne(t,e,n,i,r,a,o,s){E(i)?(a=r,r=i,i=0):P(r)?(a=r,r="linear",i=0):P(i)?(a=i,i=0):n=P(n)?(a=n,500):n||500,t.stopAnimation(),function t(e,n,i,r,a,o,s){var l={},u=0;for(var c in r)r.hasOwnProperty(c)&&(null!=i[c]?L(r[c])&&!k(r[c])?t(e,n?n+"."+c:c,i[c],r[c],a,o,s):(s?(l[c]=i[c],Re(e,n,c,r[c])):l[c]=r[c],u++):null==r[c]||s||Re(e,n,c,r[c]));0<u&&e.animate(n,!1).when(null==a?500:a,l).delay(o||0)}(t,"",t,e,n,i,s);var l=t.animators.slice(),u=l.length;function c(){--u||a&&a()}u||a&&a();for(var h=0;h<l.length;h++)l[h].done(c).start(r,o)}function Re(t,e,n,i){if(e){var r={};r[e]={},r[e][n]=i,t.attr(r)}else t.attr(n,i)}Le.prototype={constructor:Le,animate:function(t,e){var n,i=!1,r=this,a=this.__zr;if(t){var o=t.split("."),s=r;i="shape"===o[0];for(var l=0,u=o.length;l<u;l++)s=s&&s[o[l]];s&&(n=s)}else n=r;if(n){var c=r.animators,h=new Te(n,e);return h.during(function(t){r.dirty(i)}).done(function(){c.splice(x(c,h),1)}),c.push(h),a&&a.animation.addAnimator(h),h}Be('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,a){Ne(this,t,e,n,i,r,a)},animateFrom:function(t,e,n,i,r,a){Ne(this,t,e,n,i,r,a,!0)}};var ze=function(t){Ut.call(this,t),pt.call(this,t),Le.call(this,t),this.id=t.id||r()};ze.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;(n=n||(this.transform=[1,0,0,1,0,0]))[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];(n=n||(this[t]=[]))[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(L(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),(this.clipPath=t).__zr=e,(t.__clipTarget=this).dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},S(ze,Le),S(ze,Ut),S(ze,pt);var $e,Fe,He,je,Ve=lt,We=Math.min,Ue=Math.max;function Ge(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}Ge.prototype={constructor:Ge,union:function(t){var e=We(t.x,this.x),n=We(t.y,this.y);this.width=Ue(t.x+t.width,this.x+this.width)-e,this.height=Ue(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:($e=[],Fe=[],He=[],je=[],function(t){if(t){$e[0]=He[0]=this.x,$e[1]=je[1]=this.y,Fe[0]=je[0]=this.x+this.width,Fe[1]=He[1]=this.y+this.height,Ve($e,$e,t),Ve(Fe,Fe,t),Ve(He,He,t),Ve(je,je,t),this.x=We($e[0],Fe[0],He[0],je[0]),this.y=We($e[1],Fe[1],He[1],je[1]);var e=Ue($e[0],Fe[0],He[0],je[0]),n=Ue($e[1],Fe[1],He[1],je[1]);this.width=e-this.x,this.height=n-this.y}}),calculateTransform:function(t){var e=t.width/this.width,n=t.height/this.height,i=Nt();return $t(i,i,[-this.x,-this.y]),Ht(i,i,[e,n]),$t(i,i,[t.x,t.y]),i},intersect:function(t){if(!t)return!1;t instanceof Ge||(t=Ge.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<o||s<n||a<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new Ge(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Ge.create=function(t){return new Ge(t.x,t.y,t.width,t.height)};var qe=function(t){for(var e in t=t||{},ze.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};qe.prototype={constructor:qe,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);0<=i&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t);var e=(t.parent=this).__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof qe&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=x(i,t);return r<0||(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof qe&&t.delChildrenFromStorage(n)),e&&e.refresh()),this},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof qe&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof qe&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof qe&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new Ge(0,0,0,0),i=t||this._children,r=[],a=0;a<i.length;a++){var o=i[a];if(!o.ignore&&!o.invisible){var s=o.getBoundingRect(),l=o.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},w(qe,ze);var Xe=32,Ye=7;function Ze(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;!function(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}(t,e,r)}else for(;r<n&&0<=i(t[r],t[r-1]);)r++;return r-e}function Ke(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var a,o=t[i],s=e,l=i;s<l;)r(o,t[a=s+l>>>1])<0?l=a:s=1+a;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;0<u;)t[s+u]=t[s+u-1],u--}t[s]=o}}function Je(t,e,n,i,r,a){var o=0,s=0,l=1;if(0<a(t,e[n+r])){for(s=i-r;l<s&&0<a(t,e[n+r+l]);)(l=1+((o=l)<<1))<=0&&(l=s);s<l&&(l=s),o+=r,l+=r}else{for(s=r+1;l<s&&a(t,e[n+r-l])<=0;)(l=1+((o=l)<<1))<=0&&(l=s);s<l&&(l=s);var u=o;o=r-l,l=r-u}for(o++;o<l;){var c=o+(l-o>>>1);0<a(t,e[n+c])?o=c+1:l=c}return l}function Qe(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])<0){for(s=r+1;l<s&&a(t,e[n+r-l])<0;)(l=1+((o=l)<<1))<=0&&(l=s);s<l&&(l=s);var u=o;o=r-l,l=r-u}else{for(s=i-r;l<s&&0<=a(t,e[n+r+l]);)(l=1+((o=l)<<1))<=0&&(l=s);s<l&&(l=s),o+=r,l+=r}for(o++;o<l;){var c=o+(l-o>>>1);a(t,e[n+c])<0?l=c:o=c+1}return l}function tn(t,e){var n,i,r=Ye,a=0,o=[];function s(s){var l=n[s],u=i[s],c=n[s+1],h=i[s+1];i[s]=u+h,s===a-3&&(n[s+1]=n[s+2],i[s+1]=i[s+2]),a--;var f=Qe(t[c],t,l,u,0,e);l+=f,0!==(u-=f)&&0!==(h=Je(t[l+u-1],t,c,h,h-1,e))&&(u<=h?function(n,i,a,s){var l=0;for(l=0;l<i;l++)o[l]=t[n+l];var u=0,c=a,h=n;if(t[h++]=t[c++],0!=--s){if(1===i){for(l=0;l<s;l++)t[h+l]=t[c+l];return t[h+s]=o[u]}for(var f,d,p,g=r;;){d=f=0,p=!1;do{if(e(t[c],o[u])<0){if(t[h++]=t[c++],d++,(f=0)==--s){p=!0;break}}else if(t[h++]=o[u++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Qe(t[c],o,u,i,0,e))){for(l=0;l<f;l++)t[h+l]=o[u+l];if(h+=f,u+=f,(i-=f)<=1){p=!0;break}}if(t[h++]=t[c++],0==--s){p=!0;break}if(0!==(d=Je(o[u],t,c,s,0,e))){for(l=0;l<d;l++)t[h+l]=t[c+l];if(h+=d,c+=d,0===(s-=d)){p=!0;break}}if(t[h++]=o[u++],1==--i){p=!0;break}g--}while(Ye<=f||Ye<=d);if(p)break;g<0&&(g=0),g+=2}if((r=g)<1&&(r=1),1===i){for(l=0;l<s;l++)t[h+l]=t[c+l];t[h+s]=o[u]}else{if(0===i)throw new Error;for(l=0;l<i;l++)t[h+l]=o[u+l]}}else for(l=0;l<i;l++)t[h+l]=o[u+l]}(l,u,c,h):function(n,i,a,s){var l=0;for(l=0;l<s;l++)o[l]=t[a+l];var u=n+i-1,c=s-1,h=a+s-1,f=0,d=0;if(t[h--]=t[u--],0!=--i){if(1===s){for(d=1+(h-=i),f=1+(u-=i),l=i-1;0<=l;l--)t[d+l]=t[f+l];return t[h]=o[c]}for(var p=r;;){var g=0,v=0,m=!1;do{if(e(o[c],t[u])<0){if(t[h--]=t[u--],g++,(v=0)==--i){m=!0;break}}else if(t[h--]=o[c--],v++,g=0,1==--s){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!==(g=i-Qe(o[c],t,n,i,i-1,e))){for(i-=g,d=1+(h-=g),f=1+(u-=g),l=g-1;0<=l;l--)t[d+l]=t[f+l];if(0===i){m=!0;break}}if(t[h--]=o[c--],1==--s){m=!0;break}if(0!==(v=s-Je(t[u],o,0,s,s-1,e))){for(s-=v,d=1+(h-=v),f=1+(c-=v),l=0;l<v;l++)t[d+l]=o[f+l];if(s<=1){m=!0;break}}if(t[h--]=t[u--],0==--i){m=!0;break}p--}while(Ye<=g||Ye<=v);if(m)break;p<0&&(p=0),p+=2}if((r=p)<1&&(r=1),1===s){for(d=1+(h-=i),f=1+(u-=i),l=i-1;0<=l;l--)t[d+l]=t[f+l];t[h]=o[c]}else{if(0===s)throw new Error;for(f=h-(s-1),l=0;l<s;l++)t[f+l]=o[l]}}else for(f=h-(s-1),l=0;l<s;l++)t[f+l]=o[l]}(l,u,c,h))}n=[],i=[],this.mergeRuns=function(){for(;1<a;){var t=a-2;if(1<=t&&i[t-1]<=i[t]+i[t+1]||2<=t&&i[t-2]<=i[t]+i[t-1])i[t-1]<i[t+1]&&t--;else if(i[t]>i[t+1])break;s(t)}},this.forceMergeRuns=function(){for(;1<a;){var t=a-2;0<t&&i[t-1]<i[t+1]&&t--,s(t)}},this.pushRun=function(t,e){n[a]=t,i[a]=e,a+=1}}function en(t,e,n,i){n=n||0;var r=(i=i||t.length)-n;if(!(r<2)){var a=0;if(r<Xe)Ke(t,n,i,n+(a=Ze(t,n,i,e)),e);else{var o=new tn(t,e),s=function(t){for(var e=0;Xe<=t;)e|=1&t,t>>=1;return t+e}(r);do{if((a=Ze(t,n,i,e))<s){var l=r;s<l&&(l=s),Ke(t,n,n+l,n+a,e),a=l}o.pushRun(n,a),o.mergeRuns(),r-=a,n+=a}while(0!==r);o.forceMergeRuns()}}}function nn(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function rn(){this._roots=[],this._displayList=[],this._displayListLen=0}rn.prototype={constructor:rn,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,a.canvasSupported&&en(n,nn)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),r=(a=r).clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof qe&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e];n instanceof qe&&n.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array){e=0;for(var i=t.length;e<i;e++)this.delRoot(t[e])}else{var r=x(this._roots,t);0<=r&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof qe&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:nn};var an={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},on=function(t,e,n){return an.hasOwnProperty(e)?n*t.dpr:n},sn={NONE:0,STYLE_BIND:1,PLAIN_TEXT:2},ln=9,un=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],cn=function(t){this.extendFrom(t,!1)};function hn(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)}function fn(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}cn.prototype={constructor:cn,fill:"#000",stroke:null,opacity:1,fillOpacity:null,strokeOpacity:null,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){var i=this,r=n&&n.style,a=!r||t.__attrCachedBy!==sn.STYLE_BIND;t.__attrCachedBy=sn.STYLE_BIND;for(var o=0;o<un.length;o++){var s=un[o],l=s[0];!a&&i[l]===r[l]||(t[l]=on(t,l,i[l]||s[1]))}if(!a&&i.fill===r.fill||(t.fillStyle=i.fill),!a&&i.stroke===r.stroke||(t.strokeStyle=i.stroke),!a&&i.opacity===r.opacity||(t.globalAlpha=null==i.opacity?1:i.opacity),!a&&i.blend===r.blend||(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&0<this.lineWidth},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?fn:hn)(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color);return i}};for(var dn=cn.prototype,pn=0;pn<un.length;pn++){var gn=un[pn];gn[0]in dn||(dn[gn[0]]=gn[1])}function vn(t,e){this.image=t,this.repeat=e,this.type="pattern"}function mn(){return!1}function yn(t,e,n){var i=b(),r=e.getWidth(),a=e.getHeight(),o=i.style;return o&&(o.position="absolute",o.left=0,o.top=0,o.width=r+"px",o.height=a+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=a*n,i}function _n(t,e,n){var i;n=n||Pe,"string"==typeof t?i=yn(t,e,n):L(t)&&(t=(i=t).id),this.id=t;var r=(this.dom=i).style;r&&(i.onselectstart=mn,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n}cn.getGradient=dn.getGradient,_n.prototype={constructor:_n,__dirty:!0,__used:!(vn.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")}),__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=yn("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!==n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,a=i.width,o=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;if(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,a/u,o/u)),r.clearRect(0,0,a,o),e&&"transparent"!==e&&(e.colorStops?(n=e.__canvasGradient||cn.getGradient(r,e,{x:0,y:0,width:a,height:o}),e.__canvasGradient=n):e.image&&(n=vn.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,a,o),r.restore()),s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,a,o),r.restore()}}};var bn="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},xn=new te(50);function wn(t){if("string"!=typeof t)return t;var e=xn.get(t);return e&&e.image}function Sn(t,e,n,i,r){if(t){if("string"!=typeof t)return t;if(e&&e.__zrImageSrc===t||!n)return e;var a=xn.get(t),o={hostEl:n,cb:i,cbPayload:r};return a?Mn(e=a.image)||a.pending.push(o):((e=new Image).onload=e.onerror=kn,xn.put(t,e.__cachedImgObj={image:e,pending:[o]}),e.src=e.__zrImageSrc=t),e}return e}function kn(){var t=this.__cachedImgObj;this.onload=this.onerror=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function Mn(t){return t&&t.width&&t.height}var Dn={},An=0,Cn=5e3,In=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Tn="12px sans-serif",On={};function Pn(t,e){var n=t+":"+(e=e||Tn);if(Dn[n])return Dn[n];for(var i,r,a=(t+"").split("\n"),o=0,s=0,l=a.length;s<l;s++)o=Math.max((i=a[s],r=e,On.measureText(i,r)).width,o);return Cn<An&&(An=0,Dn={}),An++,Dn[n]=o}function En(t,e,n,i,r,a,o,s){return o?function(t,e,n,i,r,a,o,s){var l=Vn(t,{rich:o,truncate:s,font:e,textAlign:n,textPadding:r,textLineHeight:a}),u=l.outerWidth,c=l.outerHeight,h=Ln(0,u,n),f=Bn(0,c,i);return new Ge(h,f,u,c)}(t,e,n,i,r,a,o,s):function(t,e,n,i,r,a,o){var s=jn(t,e,r,a,o),l=Pn(t,e);r&&(l+=r[1]+r[3]);var u=s.outerHeight,c=Ln(0,l,n),h=Bn(0,u,i),f=new Ge(c,h,l,u);return f.lineHeight=s.lineHeight,f}(t,e,n,i,r,a,s)}function Ln(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function Bn(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function Nn(t,e,n){var i=e.textPosition,r=e.textDistance,a=n.x,o=n.y;r=r||0;var s=n.height,l=n.width,u=s/2,c="left",h="top";switch(i){case"left":a-=r,o+=u,c="right",h="middle";break;case"right":a+=r+l,o+=u,h="middle";break;case"top":a+=l/2,o-=r,c="center",h="bottom";break;case"bottom":a+=l/2,o+=s+r,c="center";break;case"inside":a+=l/2,o+=u,c="center",h="middle";break;case"insideLeft":a+=r,o+=u,h="middle";break;case"insideRight":a+=l-r,o+=u,c="right",h="middle";break;case"insideTop":a+=l/2,o+=r,c="center";break;case"insideBottom":a+=l/2,o+=s-r,c="center",h="bottom";break;case"insideTopLeft":a+=r,o+=r;break;case"insideTopRight":a+=l-r,o+=r,c="right";break;case"insideBottomLeft":a+=r,o+=s-r,h="bottom";break;case"insideBottomRight":a+=l-r,o+=s-r,c="right",h="bottom"}return(t=t||{}).x=a,t.y=o,t.textAlign=c,t.textVerticalAlign=h,t}function Rn(t,e,n,i,r){if(!e)return"";var a=(t+"").split("\n");r=zn(e,n,i,r);for(var o=0,s=a.length;o<s;o++)a[o]=$n(a[o],r);return a.join("\n")}function zn(t,e,n,i){(i=y({},i)).font=e,n=F(n,"..."),i.maxIterations=F(i.maxIterations,2);var r=i.minChar=F(i.minChar,0);i.cnCharWidth=Pn("国",e);var a=i.ascCharWidth=Pn("a",e);i.placeholder=F(i.placeholder,"");for(var o=t=Math.max(0,t-1),s=0;s<r&&a<=o;s++)o-=a;var l=Pn(n,e);return o<l&&(n="",l=0),o=t-l,i.ellipsis=n,i.ellipsisWidth=l,i.contentWidth=o,i.containerWidth=t,i}function $n(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var a=Pn(t,i);if(a<=n)return t;for(var o=0;;o++){if(a<=r||o>=e.maxIterations){t+=e.ellipsis;break}var s=0===o?Fn(t,r,e.ascCharWidth,e.cnCharWidth):0<a?Math.floor(t.length*r/a):0;a=Pn(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function Fn(t,e,n,i){for(var r=0,a=0,o=t.length;a<o&&r<e;a++){var s=t.charCodeAt(a);r+=0<=s&&s<=127?n:i}return a}function Hn(t){return Pn("国",t)}function jn(t,e,n,i,r){null!=t&&(t+="");var a=F(i,Hn(e)),o=t?t.split("\n"):[],s=o.length*a,l=s,u=!0;if(n&&(l+=n[0]+n[2]),t&&r){u=!1;var c=r.outerHeight,h=r.outerWidth;if(null!=c&&c<l)t="",o=[];else if(null!=h)for(var f=zn(h-(n?n[1]+n[3]:0),e,r.ellipsis,{minChar:r.minChar,placeholder:r.placeholder}),d=0,p=o.length;d<p;d++)o[d]=$n(o[d],f)}return{lines:o,height:s,outerHeight:l,lineHeight:a,canCacheByTextString:u}}function Vn(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=In.lastIndex=0;null!=(i=In.exec(t));){var a=i.index;r<a&&Wn(n,t.substring(r,a)),Wn(n,i[2],i[1]),r=In.lastIndex}r<t.length&&Wn(n,t.substring(r,t.length));var o=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2]));for(var p=0;p<o.length;p++){for(var g=o[p],v=0,m=0,y=0;y<g.tokens.length;y++){var _=(I=g.tokens[y]).styleName&&e.rich[I.styleName]||{},b=I.textPadding=_.textPadding,x=I.font=_.font||e.font,w=I.textHeight=F(_.textHeight,Hn(x));if(b&&(w+=b[0]+b[2]),I.height=w,I.lineHeight=H(_.textLineHeight,e.textLineHeight,w),I.textAlign=_&&_.textAlign||e.textAlign,I.textVerticalAlign=_&&_.textVerticalAlign||"middle",null!=d&&s+I.lineHeight>d)return{lines:[],width:0,height:0};I.textWidth=Pn(I.text,x);var S=_.textWidth,k=null==S||"auto"===S;if("string"==typeof S&&"%"===S.charAt(S.length-1))I.percentWidth=S,u.push(I),S=0;else{if(k){S=I.textWidth;var M=_.textBackgroundColor,D=M&&M.image;D&&Mn(D=wn(D))&&(S=Math.max(S,D.width*w/D.height))}var A=b?b[1]+b[3]:0;S+=A;var C=null!=f?f-m:null;null!=C&&C<S&&(!k||C<A?(I.text="",I.textWidth=S=0):(I.text=Rn(I.text,C-A,x,h.ellipsis,{minChar:h.minChar}),I.textWidth=Pn(I.text,x),S=I.textWidth+A))}m+=I.width=S,_&&(v=Math.max(v,I.lineHeight))}g.width=m,s+=g.lineHeight=v,l=Math.max(l,m)}for(n.outerWidth=n.width=F(e.textWidth,l),n.outerHeight=n.height=F(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]),p=0;p<u.length;p++){var I,T=(I=u[p]).percentWidth;I.width=parseInt(T,10)/100*l}return n}function Wn(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i};if(o)a.push({tokens:[l]});else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:!s&&c&&!i||u.push(l)}}}function Un(t,e){var n,i,r,a,o,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;u<0&&(s+=u,u=-u),c<0&&(l+=c,c=-c),"number"==typeof h?n=i=r=a=h:h instanceof Array?1===h.length?n=i=r=a=h[0]:2===h.length?(n=r=h[0],i=a=h[1]):3===h.length?(n=h[0],i=a=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],a=h[3]):n=i=r=a=0,u<n+i&&(n*=u/(o=n+i),i*=u/o),u<r+a&&(r*=u/(o=r+a),a*=u/o),c<i+r&&(i*=c/(o=i+r),r*=c/o),c<n+a&&(n*=c/(o=n+a),a*=c/o),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+a,l+c),0!==a&&t.arc(s+a,l+c-a,a,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}On.measureText=function(t,e){var i=n=n||b().getContext("2d");return i.font=e||Tn,i.measureText(t)};var Gn=Tn,qn={left:1,right:1,center:1},Xn={top:1,bottom:1,middle:1},Yn=[["textShadowBlur","shadowBlur",0],["textShadowOffsetX","shadowOffsetX",0],["textShadowOffsetY","shadowOffsetY",0],["textShadowColor","shadowColor","transparent"]],Zn={},Kn={};function Jn(t){return Qn(t),M(t.rich,Qn),t}function Qn(t){if(t){t.font=function(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&U(e)||t.textFont||t.font}(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||qn[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Xn[n]?n:"top",t.textPadding&&(t.textPadding=V(t.textPadding))}}function ti(t,e,n,i,r,a){i.rich?function(t,e,n,i,r,a){a!==ln&&(e.__attrCachedBy=sn.NONE);var o=t.__textCotentBlock;o&&!t.__dirtyText||(o=t.__textCotentBlock=Vn(n,i)),function(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=oi(Kn,t,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;ei(e,i,r,c,h);var p=Ln(c,o,f),g=Bn(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+a;ii(i)&&ri(t,e,i,p,g,o,s);for(var _=0;_<n.lines.length;_++){for(var b,x=n.lines[_],w=x.tokens,S=w.length,k=x.lineHeight,M=x.width,D=0,A=v,C=y,I=S-1;D<S&&(!(b=w[D]).textAlign||"left"===b.textAlign);)ni(t,e,b,i,k,m,A,"left"),M-=b.width,A+=b.width,D++;for(;0<=I&&"right"===(b=w[I]).textAlign;)ni(t,e,b,i,k,m,C,"right"),M-=b.width,C-=b.width,I--;for(A+=(a-(A-v)-(y-C)-M)/2;D<=I;)b=w[D],ni(t,e,b,i,k,m,A+b.width/2,"center"),A+=b.width,D++;m+=k}}(t,e,o,i,r)}(t,e,n,i,r,a):function(t,e,n,i,r,a){var o,s=ii(i),l=!1,u=e.__attrCachedBy===sn.PLAIN_TEXT;a!==ln?(a&&(o=a.style,l=!s&&u&&o),e.__attrCachedBy=s?sn.NONE:sn.PLAIN_TEXT):u&&(e.__attrCachedBy=sn.NONE);var c=i.font||Gn;l&&c===(o.font||Gn)||(e.font=c);var h=t.__computedFont;t.__styleFont!==c&&(t.__styleFont=c,h=t.__computedFont=e.font);var f=i.textPadding,d=i.textLineHeight,p=t.__textCotentBlock;p&&!t.__dirtyText||(p=t.__textCotentBlock=jn(n,h,f,d,i.truncate));var g=p.outerHeight,v=p.lines,m=p.lineHeight,y=oi(Kn,t,i,r),_=y.baseX,b=y.baseY,x=y.textAlign||"left",w=y.textVerticalAlign;ei(e,i,r,_,b);var S=Bn(b,g,w),k=_,M=S;if(s||f){var D=Pn(n,h);f&&(D+=f[1]+f[3]);var A=Ln(_,D,x);s&&ri(t,e,i,A,S,D,g),f&&(k=hi(_,x,f),M+=f[0])}e.textAlign=x,e.textBaseline="middle",e.globalAlpha=i.opacity||1;for(var C=0;C<Yn.length;C++){var I=Yn[C],T=I[0],O=I[1],P=i[T];l&&P===o[T]||(e[O]=on(e,O,P||I[2]))}M+=m/2;var E=i.textStrokeWidth,L=l?o.textStrokeWidth:null,B=!l||E!==L,N=!l||B||i.textStroke!==o.textStroke,R=li(i.textStroke,E),z=ui(i.textFill);if(R&&(B&&(e.lineWidth=E),N&&(e.strokeStyle=R)),z&&(l&&i.textFill===o.textFill||(e.fillStyle=z)),1===v.length)R&&e.strokeText(v[0],k,M),z&&e.fillText(v[0],k,M);else for(C=0;C<v.length;C++)R&&e.strokeText(v[C],k,M),z&&e.fillText(v[C],k,M),M+=m}(t,e,n,i,r,a)}function ei(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin;"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function ni(t,e,n,i,r,a,o,s){var l=i.rich[n.styleName]||{};l.text=n.text;var u=n.textVerticalAlign,c=a+r/2;"top"===u?c=a+n.height/2:"bottom"===u&&(c=a+r-n.height/2),!n.isLineHolder&&ii(l)&&ri(t,e,l,"right"===s?o-n.width:"center"===s?o-n.width/2:o,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(o=hi(o,s,h),c-=n.height/2-h[2]-n.textHeight/2),si(e,"shadowBlur",H(l.textShadowBlur,i.textShadowBlur,0)),si(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),si(e,"shadowOffsetX",H(l.textShadowOffsetX,i.textShadowOffsetX,0)),si(e,"shadowOffsetY",H(l.textShadowOffsetY,i.textShadowOffsetY,0)),si(e,"textAlign",s),si(e,"textBaseline","middle"),si(e,"font",n.font||Gn);var f=li(l.textStroke||i.textStroke,p),d=ui(l.textFill||i.textFill),p=F(l.textStrokeWidth,i.textStrokeWidth);f&&(si(e,"lineWidth",p),si(e,"strokeStyle",f),e.strokeText(n.text,o,c)),d&&(si(e,"fillStyle",d),e.fillText(n.text,o,c))}function ii(t){return!!(t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor)}function ri(t,e,n,i,r,a,o){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=E(s);if(si(e,"shadowBlur",n.textBoxShadowBlur||0),si(e,"shadowColor",n.textBoxShadowColor||"transparent"),si(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),si(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?Un(e,{x:i,y:r,width:a,height:o,r:h}):e.rect(i,r,a,o),e.closePath()}if(c)if(si(e,"fillStyle",s),null!=n.fillOpacity){var f=e.globalAlpha;e.globalAlpha=n.fillOpacity*n.opacity,e.fill(),e.globalAlpha=f}else e.fill();else if(L(s)){var d=s.image;(d=Sn(d,null,t,ai,s))&&Mn(d)&&e.drawImage(d,i,r,a,o)}l&&u&&(si(e,"lineWidth",l),si(e,"strokeStyle",u),null!=n.strokeOpacity?(f=e.globalAlpha,e.globalAlpha=n.strokeOpacity*n.opacity,e.stroke(),e.globalAlpha=f):e.stroke())}function ai(t,e){e.image=t}function oi(t,e,n,i){var r=n.x||0,a=n.y||0,o=n.textAlign,s=n.textVerticalAlign;if(i){var l=n.textPosition;if(l instanceof Array)r=i.x+ci(l[0],i.width),a=i.y+ci(l[1],i.height);else{var u=e&&e.calculateTextPosition?e.calculateTextPosition(Zn,n,i):Nn(Zn,n,i);r=u.x,a=u.y,o=o||u.textAlign,s=s||u.textVerticalAlign}var c=n.textOffset;c&&(r+=c[0],a+=c[1])}return(t=t||{}).baseX=r,t.baseY=a,t.textAlign=o,t.textVerticalAlign=s,t}function si(t,e,n){return t[e]=on(t,e,n),t[e]}function li(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function ui(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function ci(t,e){return"string"==typeof t?0<=t.lastIndexOf("%")?parseFloat(t)/100*e:parseFloat(t):t}function hi(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function fi(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function di(){}var pi=new Ge;function gi(t){for(var e in t=t||{},ze.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new cn(t.style,this),this._rect=null,this.__clipPaths=null}function vi(t){gi.call(this,t)}gi.prototype={constructor:gi,type:"displayable",__dirty:!0,invisible:!(di.prototype={constructor:di,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&Jn(n);var i=n.text;if(null!=i&&(i+=""),fi(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(pi.copy(e),pi.applyTransform(r),e=pi),ti(this,t,i,n,e,ln),t.restore()}}}),z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,globalScaleRatio:1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=this.__dirtyText=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?ze.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new cn(t,this),this.dirty(!1),this},calculateTextPosition:null},w(gi,ze),S(gi,di),vi.prototype={constructor:vi,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Sn(i,this._image,this,this.onload);if(r&&Mn(r)){var a=n.x||0,o=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,a,o,s,l)}else if(n.sx&&n.sy){var f=s-(c=n.sx),d=l-(h=n.sy);t.drawImage(r,c,h,f,d,a,o,s,l)}else t.drawImage(r,a,o,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new Ge(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},w(vi,gi);var mi=314159;function yi(t){return parseInt(t,10)}var _i=new Ge(0,0,0,0),bi=new Ge(0,0,0,0);function xi(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=y({},n||{}),this.dpr=n.devicePixelRatio||Pe,this._singleCanvas=i;var r=(this.root=t).style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var a=this._zlevelList=[],o=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var s=t.width,l=t.height;null!=n.width&&(s=n.width),null!=n.height&&(l=n.height),this.dpr=n.devicePixelRatio||1,t.width=s*this.dpr,t.height=l*this.dpr,this._width=s,this._height=l;var u=new _n(t,this,this.dpr);u.__builtin__=!0,u.initContext(),(o[mi]=u).zlevel=mi,a.push(mi),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=function(t,e){var n=document.createElement("div");return n.style.cssText=["position:relative","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}(this._width,this._height);t.appendChild(c)}this._hoverlayer=null,this._hoverElements=[]}function wi(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,pt.call(this)}xi.prototype={constructor:xi,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r];if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null;a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape,z:t.z,z2:t.z2,silent:t.silent});return(n.__from=t).__hoverMir=n,e&&n.setStyle(e),this._hoverElements.push(n),n}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=x(n,e);0<=i&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){en(t,this.storage.displayableSortFunc);var i={};(n=n||(this._hoverlayer=this.getLayer(1e5))).ctx.save();for(var r=0;r<e;){var a=t[r],o=a.__from;o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;bn(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(mi).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(e,n){for(var i=[],r=0;r<this._zlevelList.length;r++){var o=this._zlevelList[r];(u=this._layers[o]).__builtin__&&u!==this._hoverlayer&&(u.__dirty||n)&&i.push(u)}for(var s=!0,l=0;l<i.length;l++){var u,c=(u=i[l]).ctx,h={};c.save();var f=n?u.__startIndex:u.__drawIndex,d=!n&&u.incremental&&Date.now,p=d&&Date.now(),g=u.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(u.__startIndex===u.__endIndex)u.clear(!1,g);else if(f===u.__startIndex){var v=e[f];v.incremental&&v.notClear&&!n||u.clear(!1,g)}-1===f&&(t("error","For some unknown reason. drawIndex is -1"," at components\\echarts\\echarts.simple.min.js:22"),f=u.__startIndex);for(var m=f;m<u.__endIndex;m++){var y=e[m];if(this._doPaintEl(y,u,n,h),y.__dirty=y.__dirtyText=!1,d&&15<Date.now()-p)break}u.__drawIndex=m,u.__drawIndex<u.__endIndex&&(s=!1),h.prevElClipPaths&&c.restore(),c.restore()}return a.wxa&&M(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),s},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!function(t,e,n){return _i.copy(t.getBoundingRect()),t.transform&&_i.applyTransform(t.transform),bi.width=e,bi.height=n,!_i.intersect(bi)}(t,this._width,this._height))){var o=t.__clipPaths,s=i.prevElClipPaths;s&&!function(t,e){if(t===e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0;return!1}(o,s)||(s&&(r.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),function(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),(i.prevEl=t).afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=mi);var n=this._layers[t];return n||((n=new _n("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&m(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,a=null,o=-1,s=this._domRoot;if(n[t])Be("ZLevel "+t+" has been used already");else if(function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(0<r&&t>i[0]){for(o=0;o<r-1&&!(i[o]<t&&i[o+1]>t);o++);a=n[i[o]]}if(i.splice(o+1,0,t),!(n[t]=e).virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Be("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){i&&(i.__endIndex!==t&&(i.__dirty=!0),i.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(var n=1;n<t.length;n++)if((a=t[n]).zlevel!==t[n-1].zlevel||a.incremental){this._needsManuallyCompositing=!0;break}var i=null,r=0;for(n=0;n<t.length;n++){var a,o,s=(a=t[n]).zlevel;a.incremental?((o=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,r=1):o=this.getLayer(s+(0<r?.01:0),this._needsManuallyCompositing),o.__builtin__||Be("ZLevel "+s+" has been used by unkown layer "+o.id),o!==i&&(o.__used=!0,o.__startIndex!==n&&(o.__dirty=!0),o.__startIndex=n,o.incremental?o.__drawIndex=-1:o.__drawIndex=n,e(n),i=o),a.__dirty&&(o.__dirty=!0,o.incremental&&o.__drawIndex<0&&(o.__drawIndex=n))}e(n),this.eachBuiltinLayer(function(t,e){!t.__used&&0<t.getElementCount()&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?m(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];r!==t&&r!==t+.01||m(this._layers[r],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(x(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!==t||e!==this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);M(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(mi).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[mi].dom;var e=new _n("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var l=o[s];this._doPaintEl(l,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],i=["clientWidth","clientHeight"][t],r=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n]);var o=this.root,s=document.defaultView.getComputedStyle(o);return(o[i]||yi(s[n])||yi(o.style[n]))-(yi(s[r])||0)-(yi(s[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var n=document.createElement("canvas"),i=n.getContext("2d"),r=t.getBoundingRect(),a=t.style,o=a.shadowBlur*e,s=a.shadowOffsetX*e,l=a.shadowOffsetY*e,u=a.hasStroke()?a.lineWidth:0,c=Math.max(u/2,o-s),h=Math.max(u/2,s+o),f=Math.max(u/2,o-l),d=Math.max(u/2,l+o),p=r.width+c+h,g=r.height+f+d;n.width=p*e,n.height=g*e,i.scale(e,e),i.clearRect(0,0,p,g),i.dpr=e;var v={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[c-r.x,f-r.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(i);var m=new vi({style:{x:0,y:0,image:n}});return null!=v.position&&(m.position=t.position=v.position),null!=v.rotation&&(m.rotation=t.rotation=v.rotation),null!=v.scale&&(m.scale=t.scale=v.scale),m}},wi.prototype={constructor:wi,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=x(this._clips,t);0<=e&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;o<i;o++){var s=n[o],l=s.step(t,e);l&&(r.push(l),a.push(s))}for(o=0;o<i;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++;for(i=r.length,o=0;o<i;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){var t=this;this._running=!0,bn(function e(){t._running&&(bn(e),t._paused||t._update())})},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new Te(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},S(wi,pt);var Si=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],ki=["touchstart","touchend","touchmove"],Mi={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Di=D(Si,function(t){var e=t.replace("mouse","pointer");return Mi[e]?e:t});function Ai(t){return"mousewheel"===t&&a.browser.firefox?"DOMMouseScroll":t}function Ci(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}var Ii={mousemove:function(t){t=kt(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=kt(this.dom,t)).toElement||t.relatedTarget;if(e!==this.dom)for(;e&&9!==e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=kt(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,this.handler.processGesture(t,"start"),Ii.mousemove.call(this,t),Ii.mousedown.call(this,t),Ci(this)},touchmove:function(t){(t=kt(this.dom,t)).zrByTouch=!0,this.handler.processGesture(t,"change"),Ii.mousemove.call(this,t),Ci(this)},touchend:function(t){(t=kt(this.dom,t)).zrByTouch=!0,this.handler.processGesture(t,"end"),Ii.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Ii.click.call(this,t),Ci(this)},pointerdown:function(t){Ii.mousedown.call(this,t)},pointermove:function(t){Ti(t)||Ii.mousemove.call(this,t)},pointerup:function(t){Ii.mouseup.call(this,t)},pointerout:function(t){Ti(t)||Ii.mouseout.call(this,t)}};function Ti(t){var e=t.pointerType;return"pen"===e||"touch"===e}function Oi(t){function e(e,n){M(e,function(e){!function(t,e,n){yt?t.addEventListener(e,n):t.attachEvent("on"+e,n)}(t,Ai(e),n._handlers[e])},n)}pt.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._handlers={},function(t){M(ki,function(e){t._handlers[e]=I(Ii[e],t)}),M(Di,function(e){t._handlers[e]=I(Ii[e],t)}),M(Si,function(e){t._handlers[e]=function(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}(Ii[e],t)})}(this),a.pointerEventsSupported?e(Di,this):(a.touchEventsSupported&&e(ki,this),e(Si,this))}M(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Ii[t]=function(e){e=kt(this.dom,e),this.trigger(t,e)}});var Pi=Oi.prototype;Pi.dispose=function(){for(var t,e,n,i=Si.concat(ki),r=0;r<i.length;r++){var a=i[r];t=this.dom,e=Ai(a),n=this._handlers[a],yt?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}},Pi.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},S(Oi,pt);var Ei=!a.canvasSupported,Li={canvas:xi};function Bi(t,e){return new Ni(r(),t,e)}var Ni=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new rn,o=n.renderer;if(Ei){if(!Li.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&Li[o]||(o="canvas");var s=new Li[o](e,r,n,t);this.storage=r,this.painter=s;var l=a.node||a.worker?null:new Oi(s.getViewportRoot());this.handler=new Pt(r,s,l,s.root),this.animation=new wi({stage:{update:I(this.flush,this)}}),this.animation.start(),this._needsRefresh;var u=r.delFromStorage,c=r.addToStorage;r.delFromStorage=function(t){u.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){c.call(r,t),t.addSelfToZr(i)}};Ni.prototype={constructor:Ni,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=this._needsRefreshHover=!1,this.painter.refresh(),this._needsRefresh=this._needsRefreshHover=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){if(this.painter.addHover){var n=this.painter.addHover(t,e);return this.refreshHover(),n}},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var Ri=M,zi=L,$i=O,Fi="series\0";function Hi(t){return t instanceof Array?t:null==t?[]:[t]}function ji(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var a=n[i];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}}var Vi=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"];function Wi(t){return!zi(t)||$i(t)||t instanceof Date?t:t.value}function Ui(t,e){e=(e||[]).slice();var n=D(t||[],function(t,e){return{exist:t}});return Ri(e,function(t,i){if(zi(t)){for(var r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(r=0;r<n.length;r++){var a=n[r].exist;if(!(n[r].option||null!=a.id&&null!=t.id||null==t.name||qi(t)||qi(a)||a.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),Ri(e,function(t,e){if(zi(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!qi(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function Gi(t){var e=t.name;return!(!e||!e.indexOf(Fi))}function qi(t){return zi(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Xi(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?O(e.dataIndex)?D(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?O(e.name)?D(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Yi(){var t="__\0ec_inner_"+Zi+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}var Zi=0;function Ki(t,e,n){if(E(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||Ji(e,r+"Index")||Ji(e,r+"Id")||Ji(e,r+"Name")||(e[r+"Index"]=0);var a={};return Ri(e,function(i,r){if(i=e[r],"dataIndex"!==r&&"dataIndexInside"!==r){var o=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=o[1],l=(o[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&x(n.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===i||(u[l]=i);var c=t.queryComponents(u);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[r]=i}),a}function Ji(t,e){return t&&t.hasOwnProperty(e)}function Qi(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}var tr=".",er="___EC__COMPONENT__CONTAINER___";function nr(t){var e={main:"",sub:""};return t&&(t=t.split(tr),e.main=t[0]||"",e.sub=t[1]||""),e}function ir(t){(t.$constructor=t).extend=function(t){function e(){t.$constructor?t.$constructor.apply(this,arguments):n.apply(this,arguments)}var n=this;return y(e.prototype,t),e.extend=this.extend,e.superCall=or,e.superApply=sr,w(e,this),e.superClass=n,e}}var rr=0;function ar(t){var e=["__\0is_clz",rr++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function or(t,e){var n=j(arguments,2);return this.superClass.prototype[e].apply(t,n)}function sr(t,e,n){return this.superClass.prototype[e].apply(t,n)}function lr(t,e){e=e||{};var n={};if(t.registerClass=function(t,e){return e&&(function(t){W(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}(e),(e=nr(e)).sub?e.sub!==er&&((function(t){var e=n[t.main];return e&&e[er]||((e=n[t.main]={})[er]=!0),e}(e))[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var r=n[t];if(r&&r[er]&&(r=e?r[e]:null),i&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=nr(t);var e=[],i=n[t.main];return i&&i[er]?M(i,function(t,n){n!==er&&e.push(t)}):e.push(i),e},t.hasClass=function(t){return t=nr(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[];return M(n,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=nr(t);var e=n[t.main];return e&&e[er]},t.parseClassType=nr,e.registerWhenExtend){var i=t.extend;i&&(t.extend=function(e){var n=i.call(this,e);return t.registerClass(n,e.type)})}return t}function ur(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},a=0;a<t.length;a++){var o=t[a][1];if(!(n&&0<=x(n,o)||i&&x(i,o)<0)){var s=e.getShallow(o);null!=s&&(r[t[a][0]]=s)}}return r}}var cr=ur([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),hr={getLineStyle:function(t){var e=cr(this,t);return e.lineDash=this.getLineDash(e.lineWidth),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"!==e&&null!=e&&("dashed"===e?[i,i]:[n,n])}},fr=ur([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),dr={getAreaStyle:function(t,e){return fr(this,t,e)}},pr=Math.pow,gr=Math.sqrt,vr=1e-8,mr=1e-4,yr=gr(3),_r=1/3,br=Q(),xr=Q(),wr=Q();function Sr(t){return-vr<t&&t<vr}function kr(t){return vr<t||t<-vr}function Mr(t,e,n,i,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function Dr(t,e,n,i,r){var a=1-r;return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)}function Ar(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Sr(o))kr(a)&&0<=(c=-s/a)&&c<=1&&(r[l++]=c);else{var u=a*a-4*o*s;if(Sr(u))r[0]=-a/(2*o);else if(0<u){var c,h=gr(u),f=(-a-h)/(2*o);0<=(c=(-a+h)/(2*o))&&c<=1&&(r[l++]=c),0<=f&&f<=1&&(r[l++]=f)}}return l}function Cr(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-o)*r+o,c=(l-s)*r+s,h=(c-u)*r+u;a[0]=t,a[1]=o,a[2]=u,a[3]=h,a[4]=h,a[5]=c,a[6]=l,a[7]=i}function Ir(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function Tr(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function Or(t,e,n){var i=t+n-2*e;return 0==i?.5:(t-e)/i}function Pr(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n}var Er=Math.min,Lr=Math.max,Br=Math.sin,Nr=Math.cos,Rr=2*Math.PI,zr=Q(),$r=Q(),Fr=Q();function Hr(t,e,n,i,r,a){r[0]=Er(t,n),r[1]=Er(e,i),a[0]=Lr(t,n),a[1]=Lr(e,i)}var jr=[],Vr=[];function Wr(t,e,n,i,r,a,o,s,l,u){var c,h=Ar,f=Mr,d=h(t,n,r,o,jr);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;c<d;c++){var p=f(t,n,r,o,jr[c]);l[0]=Er(p,l[0]),u[0]=Lr(p,u[0])}for(d=h(e,i,a,s,Vr),c=0;c<d;c++){var g=f(e,i,a,s,Vr[c]);l[1]=Er(g,l[1]),u[1]=Lr(g,u[1])}l[0]=Er(t,l[0]),u[0]=Lr(t,u[0]),l[0]=Er(o,l[0]),u[0]=Lr(o,u[0]),l[1]=Er(e,l[1]),u[1]=Lr(e,u[1]),l[1]=Er(s,l[1]),u[1]=Lr(s,u[1])}function Ur(t,e,n,i,r,a,o,s,l){var u=ut,c=ct,h=Math.abs(r-a);if(h%Rr<1e-4&&1e-4<h)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(zr[0]=Nr(r)*n+t,zr[1]=Br(r)*i+e,$r[0]=Nr(a)*n+t,$r[1]=Br(a)*i+e,u(s,zr,$r),c(l,zr,$r),(r%=Rr)<0&&(r+=Rr),(a%=Rr)<0&&(a+=Rr),a<r&&!o?a+=Rr:r<a&&o&&(r+=Rr),o){var f=a;a=r,r=f}for(var d=0;d<a;d+=Math.PI/2)r<d&&(Fr[0]=Nr(d)*n+t,Fr[1]=Br(d)*i+e,u(s,Fr,s),c(l,Fr,l))}var Gr={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},qr=[],Xr=[],Yr=[],Zr=[],Kr=Math.min,Jr=Math.max,Qr=Math.cos,ta=Math.sin,ea=Math.sqrt,na=Math.abs,ia="undefined"!=typeof Float32Array,ra=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};function aa(t,e,n,i,r,a,o){if(0===r)return!1;var s=r,l=0;if(e+s<o&&i+s<o||o<e-s&&o<i-s||t+s<a&&n+s<a||a<t-s&&a<n-s)return!1;if(t===n)return Math.abs(a-t)<=s/2;var u=(l=(e-i)/(t-n))*a-o+(t*i-n*e)/(t-n);return u*u/(l*l+1)<=s/2*s/2}function oa(t,e,n,i,r,a,o,s,l,u,c){if(0===l)return!1;var h=l;return!(e+h<c&&i+h<c&&a+h<c&&s+h<c||c<e-h&&c<i-h&&c<a-h&&c<s-h||t+h<u&&n+h<u&&r+h<u&&o+h<u||u<t-h&&u<n-h&&u<r-h&&u<o-h)&&function(t,e,n,i,r,a,o,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;br[0]=l,br[1]=u;for(var y=0;y<1;y+=.05)xr[0]=Mr(t,n,r,o,y),xr[1]=Mr(e,i,a,s,y),(p=st(br,xr))<m&&(h=y,m=p);m=1/0;for(var _=0;_<32&&!(v<mr);_++)f=h-v,d=h+v,xr[0]=Mr(t,n,r,o,f),xr[1]=Mr(e,i,a,s,f),p=st(xr,br),0<=f&&p<m?(h=f,m=p):(wr[0]=Mr(t,n,r,o,d),wr[1]=Mr(e,i,a,s,d),g=st(wr,br),d<=1&&g<m?(h=d,m=g):v*=.5);return c&&(c[0]=Mr(t,n,r,o,h),c[1]=Mr(e,i,a,s,h)),gr(m)}(t,e,n,i,r,a,o,s,u,c,null)<=h/2}function sa(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;return!(e+u<l&&i+u<l&&a+u<l||l<e-u&&l<i-u&&l<a-u||t+u<s&&n+u<s&&r+u<s||s<t-u&&s<n-u&&s<r-u)&&function(t,e,n,i,r,a,o,s,l){var u,c=.005,h=1/0;br[0]=o,br[1]=s;for(var f=0;f<1;f+=.05)xr[0]=Ir(t,n,r,f),xr[1]=Ir(e,i,a,f),(v=st(br,xr))<h&&(u=f,h=v);h=1/0;for(var d=0;d<32&&!(c<mr);d++){var p=u-c,g=u+c;xr[0]=Ir(t,n,r,p),xr[1]=Ir(e,i,a,p);var v=st(xr,br);if(0<=p&&v<h)u=p,h=v;else{wr[0]=Ir(t,n,r,g),wr[1]=Ir(e,i,a,g);var m=st(wr,br);g<=1&&m<h?(u=g,h=m):c*=.5}}return l&&(l[0]=Ir(t,n,r,u),l[1]=Ir(e,i,a,u)),gr(h)}(t,e,n,i,r,a,s,l,null)<=u/2}ra.prototype={constructor:ra,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e,n){n=n||0,this._ux=na(n/Pe/t)||0,this._uy=na(n/Pe/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return(this._ctx=t)&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Gr.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=na(t-this._xi)>this._ux||na(e-this._yi)>this._uy||this._len<5;return this.addData(Gr.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(Gr.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Gr.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(Gr.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=Qr(r)*n+t,this._yi=ta(r)*n+e,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Gr.R,t,e,n,i),this},closePath:function(){this.addData(Gr.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t;for(var e=this._dashIdx=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length===e||!ia||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(ia&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=ea(c*c+h*h),d=l,p=u,g=o.length;for(a<0&&(a=r+a),d-=(a%=r)*(c/=f),p-=a*(h/=f);0<c&&d<=t||c<0&&t<=d||0===c&&(0<h&&p<=e||h<0&&e<=p);)d+=c*(n=o[i=this._dashIdx]),p+=h*n,this._dashIdx=(i+1)%g,0<c&&d<l||c<0&&l<d||0<h&&p<u||h<0&&u<p||s[i%2?"moveTo":"lineTo"](0<=c?Kr(d,t):Jr(d,t),0<=h?Kr(p,e):Jr(p,e));c=d-t,h=p-e,this._dashOffset=-ea(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,a){var o,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=Mr,y=0,_=this._dashIdx,b=d.length,x=0;for(f<0&&(f=h+f),f%=h,o=0;o<1;o+=.1)s=m(g,t,n,r,o+.1)-m(g,t,n,r,o),l=m(v,e,i,a,o+.1)-m(v,e,i,a,o),y+=ea(s*s+l*l);for(;_<b&&!(f<(x+=d[_]));_++);for(o=(x-f)/y;o<=1;)u=m(g,t,n,r,o),c=m(v,e,i,a,o),_%2?p.moveTo(u,c):p.lineTo(u,c),o+=d[_]/y,_=(_+1)%b;_%2!=0&&p.lineTo(r,a),s=r-u,l=a-c,this._dashOffset=-ea(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,ia&&(this.data=new Float32Array(t)))},getBoundingRect:function(){qr[0]=qr[1]=Yr[0]=Yr[1]=Number.MAX_VALUE,Xr[0]=Xr[1]=Zr[0]=Zr[1]=-Number.MAX_VALUE;for(var t,e,n,i,r,a,o,s,l,u,c,h,f,d,p=this.data,g=0,v=0,m=0,y=0,_=0;_<p.length;){var b=p[_++];switch(1===_&&(m=g=p[_],y=v=p[_+1]),b){case Gr.M:g=m=p[_++],v=y=p[_++],Yr[0]=m,Yr[1]=y,Zr[0]=m,Zr[1]=y;break;case Gr.L:Hr(g,v,p[_],p[_+1],Yr,Zr),g=p[_++],v=p[_++];break;case Gr.C:Wr(g,v,p[_++],p[_++],p[_++],p[_++],p[_],p[_+1],Yr,Zr),g=p[_++],v=p[_++];break;case Gr.Q:t=g,e=v,n=p[_++],i=p[_++],r=p[_],a=p[_+1],o=Yr,s=Zr,u=l=void 0,u=Ir,c=Lr(Er((l=Or)(t,n,r),1),0),h=Lr(Er(l(e,i,a),1),0),f=u(t,n,r,c),d=u(e,i,a,h),o[0]=Er(t,r,f),o[1]=Er(e,a,d),s[0]=Lr(t,r,f),s[1]=Lr(e,a,d),g=p[_++],v=p[_++];break;case Gr.A:var x=p[_++],w=p[_++],S=p[_++],k=p[_++],M=p[_++],D=p[_++]+M;_+=1;var A=1-p[_++];1===_&&(m=Qr(M)*S+x,y=ta(M)*k+w),Ur(x,w,S,k,M,D,A,Yr,Zr),g=Qr(D)*S+x,v=ta(D)*k+w;break;case Gr.R:Hr(m=g=p[_++],y=v=p[_++],m+p[_++],y+p[_++],Yr,Zr);break;case Gr.Z:g=m,v=y}ut(qr,qr,Yr),ct(Xr,Xr,Zr)}return 0===_&&(qr[0]=qr[1]=Xr[0]=Xr[1]=0),new Ge(qr[0],qr[1],Xr[0]-qr[0],Xr[1]-qr[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;h<c;){var f=s[h++];switch(1===h&&(e=i=s[h],n=r=s[h+1]),f){case Gr.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case Gr.L:a=s[h++],o=s[h++],(na(a-i)>l||na(o-r)>u||h===c-1)&&(t.lineTo(a,o),i=a,r=o);break;case Gr.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Gr.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Gr.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],b=s[h++],x=v<g?g:v,w=v<g?1:g/v,S=v<g?v/g:1,k=m+y;.001<Math.abs(g-v)?(t.translate(d,p),t.rotate(_),t.scale(w,S),t.arc(0,0,x,m,k,1-b),t.scale(1/w,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,x,m,k,1-b),1===h&&(e=Qr(m)*g+d,n=ta(m)*v+p),i=Qr(k)*g+d,r=ta(k)*v+p;break;case Gr.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case Gr.Z:t.closePath(),i=e,r=n}}}},ra.CMD=Gr;var la=2*Math.PI;function ua(t){return(t%=la)<0&&(t+=la),t}var ca=2*Math.PI;function ha(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(n<c-u||c+u<n)return!1;if(Math.abs(i-r)%ca<1e-4)return!0;if(a){var h=i;i=ua(r),r=ua(h)}else i=ua(i),r=ua(r);r<i&&(r+=ca);var f=Math.atan2(l,s);return f<0&&(f+=ca),i<=f&&f<=r||i<=f+ca&&f+ca<=r}function fa(t,e,n,i,r,a){if(e<a&&i<a||a<e&&a<i)return 0;if(i===e)return 0;var o=i<e?1:-1,s=(a-e)/(i-e);1!=s&&0!=s||(o=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:r<l?o:0}var da=ra.CMD,pa=2*Math.PI,ga=1e-4,va=[-1,-1,-1],ma=[-1,-1];function ya(t,e,n,i,r,a,o,s,l,u){if(e<u&&i<u&&a<u&&s<u||u<e&&u<i&&u<a&&u<s)return 0;var c,h=function(t,e,n,i,r,a){var o=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*o*l,h=s*l-9*o*u,f=l*l-3*s*u,d=0;if(Sr(c)&&Sr(h))Sr(s)?a[0]=0:0<=(k=-l/s)&&k<=1&&(a[d++]=k);else{var p=h*h-4*c*f;if(Sr(p)){var g=h/c,v=-g/2;0<=(k=-s/o+g)&&k<=1&&(a[d++]=k),0<=v&&v<=1&&(a[d++]=v)}else if(0<p){var m=gr(p),y=c*s+1.5*o*(-h+m),_=c*s+1.5*o*(-h-m);0<=(k=(-s-((y=y<0?-pr(-y,_r):pr(y,_r))+(_=_<0?-pr(-_,_r):pr(_,_r))))/(3*o))&&k<=1&&(a[d++]=k)}else{var b=(2*c*s-3*o*h)/(2*gr(c*c*c)),x=Math.acos(b)/3,w=gr(c),S=Math.cos(x),k=(-s-2*w*S)/(3*o),M=(v=(-s+w*(S+yr*Math.sin(x)))/(3*o),(-s+w*(S-yr*Math.sin(x)))/(3*o));0<=k&&k<=1&&(a[d++]=k),0<=v&&v<=1&&(a[d++]=v),0<=M&&M<=1&&(a[d++]=M)}}return d}(e,i,a,s,u,va);if(0===h)return 0;for(var f,d,p=0,g=-1,v=0;v<h;v++){var m=va[v],y=0===m||1===m?.5:1;Mr(t,n,r,o,m)<l||(g<0&&(g=Ar(e,i,a,s,ma),ma[1]<ma[0]&&1<g&&(c=ma[0],ma[0]=ma[1],ma[1]=c),f=Mr(e,i,a,s,ma[0]),1<g&&(d=Mr(e,i,a,s,ma[1]))),2===g?m<ma[0]?p+=f<e?y:-y:m<ma[1]?p+=d<f?y:-y:p+=s<d?y:-y:m<ma[0]?p+=f<e?y:-y:p+=s<f?y:-y)}return p}function _a(t,e,n,i,r,a,o,s){if(e<s&&i<s&&a<s||s<e&&s<i&&s<a)return 0;var l=function(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),s=t-i,l=0;if(Sr(a))kr(o)&&0<=(c=-s/o)&&c<=1&&(r[l++]=c);else{var u=o*o-4*a*s;if(Sr(u))0<=(c=-o/(2*a))&&c<=1&&(r[l++]=c);else if(0<u){var c,h=gr(u),f=(-o-h)/(2*a);0<=(c=(-o+h)/(2*a))&&c<=1&&(r[l++]=c),0<=f&&f<=1&&(r[l++]=f)}}return l}(e,i,a,s,va);if(0===l)return 0;var u=Or(e,i,a);if(0<=u&&u<=1){for(var c=0,h=Ir(e,i,a,u),f=0;f<l;f++){var d=0===va[f]||1===va[f]?.5:1;Ir(t,n,r,va[f])<o||(va[f]<u?c+=h<e?d:-d:c+=a<h?d:-d)}return c}return d=0===va[0]||1===va[0]?.5:1,Ir(t,n,r,va[0])<o?0:a<e?d:-d}function ba(t,e,n,i,r,a,o,s){if(n<(s-=e)||s<-n)return 0;var l=Math.sqrt(n*n-s*s);va[0]=-l,va[1]=l;var u=Math.abs(i-r);if(u<1e-4)return 0;if(u%pa<1e-4){r=pa;var c=a?1:-1;return o>=va[i=0]+t&&o<=va[1]+t?c:0}a?(l=i,i=ua(r),r=ua(l)):(i=ua(i),r=ua(r)),r<i&&(r+=pa);for(var h=0,f=0;f<2;f++){var d=va[f];if(o<d+t){var p=Math.atan2(s,d);c=a?1:-1,p<0&&(p=pa+p),(i<=p&&p<=r||i<=p+pa&&p+pa<=r)&&(p>Math.PI/2&&p<1.5*Math.PI&&(c=-c),h+=c)}}return h}function xa(t,e,n,i,r){for(var a=0,o=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===da.M&&1<c&&(n||(a+=fa(o,s,l,u,i,r))),1===c&&(l=o=t[c],u=s=t[c+1]),h){case da.M:o=l=t[c++],s=u=t[c++];break;case da.L:if(n){if(aa(o,s,t[c],t[c+1],e,i,r))return!0}else a+=fa(o,s,t[c],t[c+1],i,r)||0;o=t[c++],s=t[c++];break;case da.C:if(n){if(oa(o,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else a+=ya(o,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;o=t[c++],s=t[c++];break;case da.Q:if(n){if(sa(o,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else a+=_a(o,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;o=t[c++],s=t[c++];break;case da.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++];c+=1;var y=1-t[c++],_=Math.cos(v)*p+f,b=Math.sin(v)*g+d;1<c?a+=fa(o,s,_,b,i,r):(l=_,u=b);var x=(i-f)*g/p+f;if(n){if(ha(f,d,g,v,v+m,y,e,x,r))return!0}else a+=ba(f,d,g,v,v+m,y,x,r);o=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case da.R:if(l=o=t[c++],u=s=t[c++],_=l+t[c++],b=u+t[c++],n){if(aa(l,u,_,u,e,i,r)||aa(_,u,_,b,e,i,r)||aa(_,b,l,b,e,i,r)||aa(l,b,l,u,e,i,r))return!0}else a+=fa(_,u,_,b,i,r),a+=fa(l,b,l,u,i,r);break;case da.Z:if(n){if(aa(o,s,l,u,e,i,r))return!0}else a+=fa(o,s,l,u,i,r);o=l,s=u}}return n||function(t,e){return Math.abs(t-e)<ga}(s,u)||(a+=fa(o,s,l,u,i,r)||0),0!==a}var wa=vn.prototype.getCanvasPattern,Sa=Math.abs,ka=new ra(!0);function Ma(t){gi.call(this,t),this.path=null}function Da(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}Ma.prototype={constructor:Ma,type:"path",__dirtyPath:!0,strokeContainThreshold:5,segmentIgnoreThreshold:0,subPixelOptimize:!1,brush:function(t,e){var n,i=this.style,r=this.path||ka,a=i.hasStroke(),o=i.hasFill(),s=i.fill,l=i.stroke,u=o&&!!s.colorStops,c=a&&!!l.colorStops,h=o&&!!s.image,f=a&&!!l.image;i.bind(t,this,e),this.setTransform(t),this.__dirty&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n))),u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=wa.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=wa.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();if(r.setScale(v[0],v[1],this.segmentIgnoreThreshold),this.__dirtyPath||d&&!g&&a?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o)if(null!=i.fillOpacity){var m=t.globalAlpha;t.globalAlpha=i.fillOpacity*i.opacity,r.fill(t),t.globalAlpha=m}else r.fill(t);d&&g&&(t.setLineDash(d),t.lineDashOffset=p),a&&(null!=i.strokeOpacity?(m=t.globalAlpha,t.globalAlpha=i.strokeOpacity*i.opacity,r.stroke(t),t.globalAlpha=m):r.stroke(t)),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new ra},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i=i||(this.path=new ra),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var a=e.lineWidth,o=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),1e-10<o&&(r.width+=a/o,r.height+=a/o,r.x-=a/o/2,r.y-=a/o/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data;if(r.hasStroke()){var o=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(1e-10<s&&(r.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),function(t,e,n,i){return xa(t,e,!0,n,i)}(a,o/s,t,e)))return!0}if(r.hasFill())return function(t,e,n){return xa(t,0,!1,e,n)}(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=this.__dirtyText=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):gi.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(L(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&1e-10<Sa(t[0]-1)&&1e-10<Sa(t[3]-1)?Math.sqrt(Sa(t[0]*t[3]-t[2]*t[1])):1}},Ma.extend=function(t){function e(e){Ma.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)}for(var n in w(e,Ma),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},w(Ma,gi);var Aa=ra.CMD,Ca=[[],[],[]],Ia=Math.sqrt,Ta=Math.atan2,Oa=function(t,e){var n,i,r,a,o,s=t.data,l=Aa.M,u=Aa.C,c=Aa.L,h=Aa.R,f=Aa.A,d=Aa.Q;for(a=r=0;r<s.length;){switch(n=s[r++],a=r,i=0,n){case l:case c:i=1;break;case u:i=3;break;case d:i=2;break;case f:var p=e[4],g=e[5],v=Ia(e[0]*e[0]+e[1]*e[1]),m=Ia(e[2]*e[2]+e[3]*e[3]),y=Ta(-e[1]/m,e[0]/v);s[r]*=v,s[r++]+=p,s[r]*=m,s[r++]+=g,s[r++]*=v,s[r++]*=m,s[r++]+=y,s[r++]+=y,a=r+=2;break;case h:_[0]=s[r++],_[1]=s[r++],lt(_,_,e),s[a++]=_[0],s[a++]=_[1],_[0]+=s[r++],_[1]+=s[r++],lt(_,_,e),s[a++]=_[0],s[a++]=_[1]}for(o=0;o<i;o++){var _;(_=Ca[o])[0]=s[r++],_[1]=s[r++],lt(_,_,e),s[a++]=_[0],s[a++]=_[1]}}},Pa=Math.sqrt,Ea=Math.sin,La=Math.cos,Ba=Math.PI,Na=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(Da(t)*Da(e))},Ra=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(Na(t,e))};function za(t,e,n,i,r,a,o,s,l,u,c){var h=l*(Ba/180),f=La(h)*(t-n)/2+Ea(h)*(e-i)/2,d=-1*Ea(h)*(t-n)/2+La(h)*(e-i)/2,p=f*f/(o*o)+d*d/(s*s);1<p&&(o*=Pa(p),s*=Pa(p));var g=(r===a?-1:1)*Pa((o*o*(s*s)-o*o*(d*d)-s*s*(f*f))/(o*o*(d*d)+s*s*(f*f)))||0,v=g*o*d/s,m=g*-s*f/o,y=(t+n)/2+La(h)*v-Ea(h)*m,_=(e+i)/2+Ea(h)*v+La(h)*m,b=Ra([1,0],[(f-v)/o,(d-m)/s]),x=[(f-v)/o,(d-m)/s],w=[(-1*f-v)/o,(-1*d-m)/s],S=Ra(x,w);Na(x,w)<=-1&&(S=Ba),1<=Na(x,w)&&(S=0),0===a&&0<S&&(S-=2*Ba),1===a&&S<0&&(S+=2*Ba),c.addData(u,y,_,o,s,b,S,h,a)}var $a=/([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,Fa=/-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;function Ha(t,e){var n=function(t){if(!t)return new ra;for(var e,n=0,i=0,r=n,a=i,o=new ra,s=ra.CMD,l=t.match($a),u=0;u<l.length;u++){for(var c,h=l[u],f=h.charAt(0),d=h.match(Fa)||[],p=d.length,g=0;g<p;g++)d[g]=parseFloat(d[g]);for(var v=0;v<p;){var m,y,_,b,x,w,S,k=n,M=i;switch(f){case"l":n+=d[v++],i+=d[v++],c=s.L,o.addData(c,n,i);break;case"L":n=d[v++],i=d[v++],c=s.L,o.addData(c,n,i);break;case"m":n+=d[v++],i+=d[v++],c=s.M,o.addData(c,n,i),r=n,a=i,f="l";break;case"M":n=d[v++],i=d[v++],c=s.M,o.addData(c,n,i),r=n,a=i,f="L";break;case"h":n+=d[v++],c=s.L,o.addData(c,n,i);break;case"H":n=d[v++],c=s.L,o.addData(c,n,i);break;case"v":i+=d[v++],c=s.L,o.addData(c,n,i);break;case"V":i=d[v++],c=s.L,o.addData(c,n,i);break;case"C":c=s.C,o.addData(c,d[v++],d[v++],d[v++],d[v++],d[v++],d[v++]),n=d[v-2],i=d[v-1];break;case"c":c=s.C,o.addData(c,d[v++]+n,d[v++]+i,d[v++]+n,d[v++]+i,d[v++]+n,d[v++]+i),n+=d[v-2],i+=d[v-1];break;case"S":m=n,y=i;var D=o.len(),A=o.data;e===s.C&&(m+=n-A[D-4],y+=i-A[D-3]),c=s.C,k=d[v++],M=d[v++],n=d[v++],i=d[v++],o.addData(c,m,y,k,M,n,i);break;case"s":m=n,y=i,D=o.len(),A=o.data,e===s.C&&(m+=n-A[D-4],y+=i-A[D-3]),c=s.C,k=n+d[v++],M=i+d[v++],n+=d[v++],i+=d[v++],o.addData(c,m,y,k,M,n,i);break;case"Q":k=d[v++],M=d[v++],n=d[v++],i=d[v++],c=s.Q,o.addData(c,k,M,n,i);break;case"q":k=d[v++]+n,M=d[v++]+i,n+=d[v++],i+=d[v++],c=s.Q,o.addData(c,k,M,n,i);break;case"T":m=n,y=i,D=o.len(),A=o.data,e===s.Q&&(m+=n-A[D-4],y+=i-A[D-3]),n=d[v++],i=d[v++],c=s.Q,o.addData(c,m,y,n,i);break;case"t":m=n,y=i,D=o.len(),A=o.data,e===s.Q&&(m+=n-A[D-4],y+=i-A[D-3]),n+=d[v++],i+=d[v++],c=s.Q,o.addData(c,m,y,n,i);break;case"A":_=d[v++],b=d[v++],x=d[v++],w=d[v++],S=d[v++],za(k=n,M=i,n=d[v++],i=d[v++],w,S,_,b,x,c=s.A,o);break;case"a":_=d[v++],b=d[v++],x=d[v++],w=d[v++],S=d[v++],za(k=n,M=i,n+=d[v++],i+=d[v++],w,S,_,b,x,c=s.A,o)}}"z"!==f&&"Z"!==f||(c=s.Z,o.addData(c),n=r,i=a),e=c}return o.toStatic(),o}(t);return(e=e||{}).buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){Oa(n,t),this.dirty(!0)},e}function ja(t,e){return new Ma(Ha(t,e))}function Va(t){gi.call(this,t)}function Wa(t){return a.browser.ie&&11<=a.browser.version?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var a=n[r],o=a&&a.shape,s=a&&a.type;if(o&&("sector"===s&&o.startAngle===o.endAngle||"rect"===s&&(!o.width||!o.height))){for(var l=0;l<Ga.length;l++)Ga[l][2]=i[Ga[l][0]],i[Ga[l][0]]=Ga[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(l=0;l<Ga.length;l++)i[Ga[l][0]]=Ga[l][2]}:t}Va.prototype={constructor:Va,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&Jn(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),fi(i,n)?(this.setTransform(t),ti(this,t,i,n,null,e),this.restoreTransform(t)):t.__attrCachedBy=sn.NONE},getBoundingRect:function(){var t=this.style;if(this.__dirty&&Jn(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=En(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.textLineHeight,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,li(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},w(Va,gi);var Ua=Ma.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),Ga=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],qa=Ma.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:Wa(Ma.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),c=Math.sin(o);t.moveTo(u*r+n,c*r+i),t.lineTo(u*a+n,c*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}}),Xa=Ma.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}});function Ya(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Za(t,e,n){var i=e.points,r=e.smooth;if(i&&2<=i.length){if(r&&"spline"!==r){var a=function(t,e,n,i){var r,a,o,s,l=[],u=[],c=[],h=[];if(i){o=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)ut(o,o,t[f]),ct(s,s,t[f]);ut(o,o,i[0]),ct(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],a=t[(f+1)%d];else{if(0===f||f===d-1){l.push(tt(t[f]));continue}r=t[f-1],a=t[f+1]}nt(u,a,r),it(u,u,e);var g=at(p,r),v=at(p,a),m=g+v;0!==m&&(g/=m,v/=m),it(c,u,-g),it(h,u,v);var y=et([],p,c),_=et([],p,h);i&&(ct(y,y,o),ut(y,y,s),ct(_,_,o),ut(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l}(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var o=i.length,s=0;s<(n?o:o-1);s++){var l=a[2*s],u=a[2*s+1],c=i[(s+1)%o];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=function(t,e){for(var n=t.length,i=[],r=0,a=1;a<n;a++)r+=at(t[a-1],t[a]);var o=r/2;for(o=o<n?n:o,a=0;a<o;a++){var s,l,u,c=a/(o-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];u=e?(s=t[(h-1+n)%n],l=t[(h+1)%n],t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[n-2<h?n-1:h+1],t[n-3<h?n-1:h+2]);var p=f*f,g=f*p;i.push([Ya(s[0],d[0],l[0],u[0],f,p,g),Ya(s[1],d[1],l[1],u[1],f,p,g)])}return i}(i,n)),t.moveTo(i[0][0],i[0][1]),s=1;for(var h=i.length;s<h;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}var Ka=Ma.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Za(t,e,!0)}}),Ja=Ma.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Za(t,e,!1)}}),Qa=Math.round;function to(t,e,n){var i=n&&n.lineWidth;if(e&&i){var r=e.x1,a=e.x2,o=e.y1,s=e.y2;Qa(2*r)===Qa(2*a)?t.x1=t.x2=no(r,i,!0):(t.x1=r,t.x2=a),Qa(2*o)===Qa(2*s)?t.y1=t.y2=no(o,i,!0):(t.y1=o,t.y2=s)}}function eo(t,e,n){var i=n&&n.lineWidth;if(e&&i){var r=e.x,a=e.y,o=e.width,s=e.height;t.x=no(r,i,!0),t.y=no(a,i,!0),t.width=Math.max(no(r+o,i,!1)-t.x,0===o?0:1),t.height=Math.max(no(a+s,i,!1)-t.y,0===s?0:1)}}function no(t,e,n){var i=Qa(2*t);return(i+Qa(e))%2==0?i/2:(i+(n?1:-1))/2}var io={},ro=Ma.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n,i,r,a;this.subPixelOptimize?(eo(io,e,this.style),n=io.x,i=io.y,r=io.width,a=io.height,io.r=e.r,e=io):(n=e.x,i=e.y,r=e.width,a=e.height),e.r?Un(t,e):t.rect(n,i,r,a),t.closePath()}}),ao={},oo=Ma.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n,i,r,a;a=this.subPixelOptimize?(to(ao,e,this.style),n=ao.x1,i=ao.y1,r=ao.x2,ao.y2):(n=e.x1,i=e.y1,r=e.x2,e.y2);var o=e.percent;0!==o&&(t.moveTo(n,i),o<1&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),so=[];function lo(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Dr:Mr)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Dr:Mr)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?Tr:Ir)(t.x1,t.cpx1,t.x2,e),(n?Tr:Ir)(t.y1,t.cpy1,t.y2,e)]}function uo(t){this.colorStops=t||[]}var co=Ma.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(c<1&&(Pr(n,o,r,c,so),o=so[1],r=so[2],Pr(i,s,a,c,so),s=so[1],a=so[2]),t.quadraticCurveTo(o,s,r,a)):(c<1&&(Cr(n,o,l,r,c,so),o=so[1],l=so[2],r=so[3],Cr(i,s,u,a,c,so),s=so[1],u=so[2],a=so[3]),t.bezierCurveTo(o,s,l,u,r,a)))},pointAt:function(t){return lo(this.shape,t,!1)},tangentAt:function(t){var e=lo(this.shape,t,!0);return rt(e,e)}}),ho=Ma.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,a,o,!s)}}),fo=Ma.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1],t[n].segmentIgnoreThreshold)},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),Ma.prototype.getBoundingRect.call(this)}});function po(t,e,n,i,r,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=a||!1,uo.call(this,r)}function go(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,uo.call(this,i)}function vo(t){gi.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}uo.prototype={constructor:uo,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}},po.prototype={constructor:po},w(po,uo),go.prototype={constructor:go},w(go,uo),vo.prototype.incremental=!0,vo.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},vo.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},vo.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},vo.prototype.eachPendingDisplayable=function(t){for(var e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},vo.prototype.update=function(){this.updateTransform();for(var t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(t=0;t<this._temporaryDisplayables.length;t++){var e;(e=this._temporaryDisplayables[t]).parent=this,e.update(),e.parent=null}},vo.prototype.brush=function(t,e){for(var n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);for(this._cursor=n,n=0;n<this._temporaryDisplayables.length;n++){var i;(i=this._temporaryDisplayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var mo=[];vo.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new Ge(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(mo)),t.union(i)}this._rect=t}return this._rect},vo.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},w(vo,gi);var yo=Math.max,_o=Math.min,bo={},xo=1,wo="emphasis",So="normal",ko=1,Mo={},Do={};function Ao(t){return Ma.extend(t)}function Co(t,e){Do[t]=e}function Io(t,e,n,i){var r=ja(t,e);return n&&("center"===i&&(n=Oo(n,r.getBoundingRect())),Eo(r,n)),r}function To(t,e,n){var i=new vi({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(Oo(e,r))}}});return i}function Oo(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function Po(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var a=t[r];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),n.push(a.path)}var o=new Ma(e);return o.createPathProxy(),o.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},o}function Eo(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}var Lo=no;function Bo(t){return null!=t&&"none"!==t}var No=Z(),Ro=0;function zo(t){if("string"!=typeof t)return t;var e=No.get(t);return e||(e=function(t,e){var n=pe(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,255<n[i]?n[i]=255:t[i]<0&&(n[i]=0);return ve(n,4===n.length?"rgba":"rgb")}}(t,-.1),Ro<1e4&&(No.set(t,e),Ro++)),e}function $o(t){var e=t.__hoverStl;if(e&&!t.__highlighted){var n=t.__zr,i=t.useHoverLayer&&n&&"canvas"===n.painter.type;if(t.__highlighted=i?"layer":"plain",!(t.isGroup||!n&&t.useHoverLayer)){var r=t,a=t.style;i&&(a=(r=n.addHover(t)).style),as(a),i||function(t){if(t.__hoverStlDirty){t.__hoverStlDirty=!1;var e=t.__hoverStl;if(e){var n=t.__cachedNormalStl={};t.__cachedNormalZ2=t.z2;var i=t.style;for(var r in e)null!=e[r]&&(n[r]=i[r]);n.fill=i.fill,n.stroke=i.stroke}else t.__cachedNormalStl=t.__cachedNormalZ2=null}}(r),a.extendFrom(e),Fo(a,e,"fill"),Fo(a,e,"stroke"),rs(a),i||(t.dirty(!1),t.z2+=xo)}}}function Fo(t,e,n){!Bo(e[n])&&Bo(t[n])&&(t[n]=zo(t[n]))}function Ho(t){var e=t.__highlighted;if(e&&(t.__highlighted=!1,!t.isGroup))if("layer"===e)t.__zr&&t.__zr.removeHover(t);else{var n=t.style,i=t.__cachedNormalStl;i&&(as(n),t.setStyle(i),rs(n));var r=t.__cachedNormalZ2;null!=r&&t.z2-r===xo&&(t.z2=r)}}function jo(t,e,n){var i,r=So,a=So;t.__highlighted&&(r=wo,i=!0),e(t,n),t.__highlighted&&(a=wo,i=!0),t.isGroup&&t.traverse(function(t){t.isGroup||e(t,n)}),i&&t.__highDownOnUpdate&&t.__highDownOnUpdate(r,a)}function Vo(t,e){e=t.__hoverStl=!1!==e&&(t.hoverStyle||e||{}),t.__hoverStlDirty=!0,t.__highlighted&&(t.__cachedNormalStl=null,Ho(t),$o(t))}function Wo(t){Xo(this,t)||this.__highByOuter||jo(this,$o)}function Uo(t){Xo(this,t)||this.__highByOuter||jo(this,Ho)}function Go(t){this.__highByOuter|=1<<(t||0),jo(this,$o)}function qo(t){(this.__highByOuter&=~(1<<(t||0)))||jo(this,Ho)}function Xo(t,e){return t.__highDownSilentOnTouch&&e.zrByTouch}function Yo(t,e){Zo(t,!0),jo(t,Vo,e)}function Zo(t,e){var n=!1===e;if(t.__highDownSilentOnTouch=t.highDownSilentOnTouch,t.__highDownOnUpdate=t.highDownOnUpdate,!n||t.__highDownDispatcher){var i=n?"off":"on";t[i]("mouseover",Wo)[i]("mouseout",Uo),t[i]("emphasis",Go)[i]("normal",qo),t.__highByOuter=t.__highByOuter||0,t.__highDownDispatcher=!n}}function Ko(t){return!(!t||!t.__highDownDispatcher)}function Jo(t){var e=Mo[t];return null==e&&ko<=32&&(e=Mo[t]=ko++),e}function Qo(t,e,n,i,r,a,o){var s,l=(r=r||bo).labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=P(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?F(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;null==d&&null==p||(ts(t,n,a,r),ts(e,i,o,r,!0)),t.text=d,e.text=p}function ts(t,e,n,i,r){return es(t,e,i,r),n&&y(t,n),t}function es(t,e,n,i){if((n=n||bo).isRectText){var r;n.getTextPosition?r=n.getTextPosition(e,i):"outside"===(r=e.getShallow("position")||(i?null:"inside"))&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=F(e.getShallow("distance"),i?null:5)}var o,s=e.ecModel,l=s&&s.option.textStyle,u=function(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||bo).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}(e);if(u)for(var c in o={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);ns(o[c]={},h,l,n,i)}return t.rich=o,ns(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function ns(t,e,n,i,r,a){n=!r&&n||bo,t.textFill=is(e.getShallow("color"),i)||n.color,t.textStroke=is(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=F(e.getShallow("textBorderWidth"),n.textBorderWidth),r||(a&&(t.insideRollbackOpt=i,rs(t)),null==t.textFill&&(t.textFill=i.autoColor)),t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&i.disableBox||(t.textBackgroundColor=is(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=is(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function is(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function rs(t){var e,n=t.textPosition,i=t.insideRollbackOpt;if(i&&null==t.textFill){var r=i.autoColor,a=i.isRectText,o=i.useInsideStyle,s=!1!==o&&(!0===o||a&&n&&"string"==typeof n&&0<=n.indexOf("inside")),l=!s&&null!=r;(s||l)&&(e={textFill:t.textFill,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth}),s&&(t.textFill="#fff",null==t.textStroke&&(t.textStroke=r,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),l&&(t.textFill=r)}t.insideRollback=e}function as(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth,t.insideRollback=null)}function os(t,e){var n=e||e.getModel("textStyle");return U([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function ss(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),u=i.getShallow("animationDelay"+o);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),0<s?e.animateTo(n,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function ls(t,e,n,i,r){ss(!0,t,e,n,i,r)}function us(t,e,n,i,r){ss(!1,t,e,n,i,r)}function cs(t,e,n){return e&&!k(e)&&(e=Ut.getLocalTransform(e)),n&&(e=jt([],e)),lt([],t,e)}function hs(t,e,n,i){if(t&&e){var r,a=(r={},t.traverse(function(t){!t.isGroup&&t.anid&&(r[t.anid]=t)}),r);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid];if(e){var i=o(t);t.attr(o(e)),ls(t,i,n,t.dataIndex)}}})}function o(t){var e={position:tt(t.position),rotation:t.rotation};return t.shape&&(e.shape=y({},t.shape)),e}}function fs(t,e,n,i,r,a,o,s){var l=n-t,u=i-e,c=o-r,h=s-a,f=ds(c,h,l,u);if(function(t){return t<=1e-6&&-1e-6<=t}(f))return!1;var d=t-r,p=e-a,g=ds(d,p,l,u)/f;if(g<0||1<g)return!1;var v=ds(d,p,c,h)/f;return!(v<0||1<v)}function ds(t,e,n,i){return t*i-n*e}Co("circle",Ua),Co("sector",qa),Co("ring",Xa),Co("polygon",Ka),Co("polyline",Ja),Co("rect",ro),Co("line",oo),Co("bezierCurve",co),Co("arc",ho);var ps=(Object.freeze||Object)({Z2_EMPHASIS_LIFT:xo,CACHED_LABEL_STYLE_PROPERTIES:{color:"textFill",textBorderColor:"textStroke",textBorderWidth:"textStrokeWidth"},extendShape:Ao,extendPath:function(t,e){return function(t,e){return Ma.extend(Ha(t,e))}(t,e)},registerShape:Co,getShapeClass:function(t){if(Do.hasOwnProperty(t))return Do[t]},makePath:Io,makeImage:To,mergePath:Po,resizePath:Eo,subPixelOptimizeLine:function(t){return to(t.shape,t.shape,t.style),t},subPixelOptimizeRect:function(t){return eo(t.shape,t.shape,t.style),t},subPixelOptimize:Lo,setElementHoverStyle:Vo,setHoverStyle:Yo,setAsHighDownDispatcher:Zo,isHighDownDispatcher:Ko,getHighlightDigit:Jo,setLabelStyle:Qo,modifyLabelStyle:function(t,e,n){var i=t.style;e&&(as(i),t.setStyle(e),rs(i)),i=t.__hoverStl,n&&i&&(as(i),y(i,n),rs(i))},setTextStyle:ts,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,es(t,e,r,i)},getFont:os,updateProps:ls,initProps:us,getTransform:function(t,e){for(var n=Rt([]);t&&t!==e;)zt(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:cs,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return a=cs(a,e,n),Math.abs(a[0])>Math.abs(a[1])?0<a[0]?"right":"left":0<a[1]?"bottom":"top"},groupTransition:hs,clipPointsByRect:function(t,e){return D(t,function(t){var n=t[0];n=yo(n,e.x),n=_o(n,e.x+e.width);var i=t[1];return i=yo(i,e.y),[n,i=_o(i,e.y+e.height)]})},clipRectByRect:function(t,e){var n=yo(t.x,e.x),i=_o(t.x+t.width,e.x+e.width),r=yo(t.y,e.y),a=_o(t.y+t.height,e.y+e.height);if(n<=i&&r<=a)return{x:n,y:r,width:i-n,height:a-r}},createIcon:function(t,e,n){var i=(e=y({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),_(i,n),new vi(e)):Io(t.replace("path://",""),e,n,"center")},linePolygonIntersect:function(t,e,n,i,r){for(var a=0,o=r[r.length-1];a<r.length;a++){var s=r[a];if(fs(t,e,n,i,s[0],s[1],o[0],o[1]))return!0;o=s}},lineLineIntersect:fs,Group:qe,Image:vi,Text:Va,Circle:Ua,Sector:qa,Ring:Xa,Polygon:Ka,Polyline:Ja,Rect:ro,Line:oo,BezierCurve:co,Arc:ho,IncrementalDisplayable:vo,CompoundPath:fo,LinearGradient:po,RadialGradient:go,BoundingRect:Ge}),gs=["textStyle","color"],vs={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(gs):null)},getFont:function(){return os({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return En(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("lineHeight"),this.getShallow("rich"),this.getShallow("truncateText"))}},ms=ur([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),ys={getItemStyle:function(t,e){var n=ms(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},_s=S,bs=Yi();function xs(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function ws(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function Ss(t,e){var n=bs(t).getParent;return n?n.call(t,e):t.parentModel}xs.prototype={constructor:xs,init:null,mergeOption:function(t){m(this.option,t,!0)},get:function(t,e){return null==t?this.option:ws(this.option,this.parsePath(t),!e&&Ss(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Ss(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n;return new xs(null==t?this.option:ws(this.option,t=this.parsePath(t)),e=e||(n=Ss(this,t))&&n.getModel(t),this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new this.constructor(v(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){bs(this).getParent=t},isAnimationEnabled:function(){if(!a.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},ir(xs),ar(xs),_s(xs,hr),_s(xs,dr),_s(xs,vs),_s(xs,ys);var ks=0;function Ms(t){return[t||"",ks++,Math.random().toFixed(5)].join("_")}var Ds=1e-4;function As(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0];if(0==r)return 0==a?n[0]:(n[0]+n[1])/2;if(i)if(0<r){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]}function Cs(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?function(t){return t.replace(/^\s+|\s+$/g,"")}(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function Is(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function Ts(t){var e=t.toString(),n=e.indexOf("e");if(0<n){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function Os(t){var e=2*Math.PI;return(t%e+e)%e}function Ps(t){return-Ds<t&&t<Ds}var Es=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;function Ls(t){if(t instanceof Date)return t;if("string"!=typeof t)return null==t?new Date(NaN):new Date(Math.round(t));var e=Es.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}function Bs(t){if(0===t)return 0;var e=Math.floor(Math.log(t)/Math.LN10);return 10<=t/Math.pow(10,e)&&e++,e}function Ns(t,e){var n=Bs(t),i=Math.pow(10,n),r=t/i;return t=(e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10)*i,-20<=n?+t.toFixed(n<0?-n:0):t}function Rs(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(1<t.length?"."+t[1]:"")}var zs=V,$s=/([&<>"'])/g,Fs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Hs(t){return null==t?"":(t+"").replace($s,function(t,e){return Fs[e]})}function js(t,e){return"{"+t+(null==e?"":e)+"}"}var Vs=["a","b","c","d","e","f","g"];function Ws(t,e){var n=(t=E(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type,r=(e=t.extraCssText,t.renderMode||"html"),a=t.markerId||"X";return n?"html"===r?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+Hs(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+Hs(n)+";"+(e||"")+'"></span>':{renderMode:r,content:"{marker"+a+"|}  ",style:{color:n}}:""}function Us(t,e){return"0000".substr(0,e-(t+="").length)+t}function Gs(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=Ls(e),r=n?"UTC":"",a=i["get"+r+"FullYear"](),o=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",Us(o,2)).replace("M",o).replace("yyyy",a).replace("yy",a%100).replace("dd",Us(s,2)).replace("d",s).replace("hh",Us(l,2)).replace("h",l).replace("mm",Us(u,2)).replace("m",u).replace("ss",Us(c,2)).replace("s",c).replace("SSS",Us(h,3))}var qs=Rn,Xs=M,Ys=["left","right","top","bottom","width","height"],Zs=[["width","left","right"],["height","top","bottom"]];function Ks(t,e,n,i,r){var a=0,o=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);s=i<(c=a+v)||l.newline?(a=0,c=v,o+=s+n,d.height):Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);s=r<(h=o+m)||l.newline?(a+=s+n,o=0,h=m,d.width):Math.max(s,d.width)}l.newline||(f[0]=a,f[1]=o,"horizontal"===t?a=c+n:o=h+n)})}function Js(t,e,n){L(n)||(n={});var i=n.ignoreSize;O(i)||(i=[i,i]);var r=o(Zs[0],0),a=o(Zs[1],1);function o(n,r){var a={},o=0,u={},c=0;if(Xs(n,function(e){u[e]=t[e]}),Xs(n,function(t){s(e,t)&&(a[t]=u[t]=e[t]),l(a,t)&&o++,l(u,t)&&c++}),i[r])return l(e,n[1])?u[n[2]]=null:l(e,n[2])&&(u[n[1]]=null),u;if(2!==c&&o){if(2<=o)return a;for(var h=0;h<n.length;h++){var f=n[h];if(!s(a,f)&&s(t,f)){a[f]=t[f];break}}return a}return u}function s(t,e){return t.hasOwnProperty(e)}function l(t,e){return null!=t[e]&&"auto"!==t[e]}function u(t,e,n){Xs(t,function(t){e[t]=n[t]})}u(Zs[0],t,r),u(Zs[1],t,a)}function Qs(t){return function(t,e){return e&&t&&Xs(Ys,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}({},t)}T(Ks,"vertical"),T(Ks,"horizontal");var tl,el,nl,il=Yi(),rl=xs.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){xs.call(this,t,e,n,i),this.uid=Ms("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Qs(t):{};m(t,e.getTheme().get(this.mainType)),m(t,this.getDefaultOption()),n&&Js(t,i,n)},mergeOption:function(t,e){m(this.option,t,!0);var n=this.layoutMode;n&&Js(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=il(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},a=e.length-1;0<=a;a--)r=m(r,e[a],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});function al(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}lr(rl,{registerWhenExtend:!0}),el={},(tl=rl).registerSubTypeDefaulter=function(t,e){t=nr(t),el[t.main]=e},tl.determineSubType=function(t,e){var n=e.type;if(!n){var i=nr(t).main;tl.hasSubTypes(t)&&el[i]&&(n=el[i](e))}return n},nl=function(t){var e=[];return M(rl.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=D(e,function(t){return nr(t).main}),"dataset"!==t&&x(e,"dataset")<=0&&e.unshift("dataset"),e},rl.topologicalTravel=function(t,e,n,i){if(t.length){var r=function(t){var e={},n=[];return M(t,function(i){var r=al(e,i),a=function(t,e){var n=[];return M(t,function(t){0<=x(e,t)&&n.push(t)}),n}(r.originalDeps=nl(i),t);r.entryCount=a.length,0===r.entryCount&&n.push(i),M(a,function(t){x(r.predecessor,t)<0&&r.predecessor.push(t);var n=al(e,t);x(n.successor,t)<0&&n.successor.push(i)})}),{graph:e,noEntryList:n}}(e),a=r.graph,o=r.noEntryList,s={};for(M(t,function(t){s[t]=!0});o.length;){var l=o.pop(),u=a[l],c=!!s[l];c&&(n.call(i,l,u.originalDeps.slice()),delete s[l]),M(u.successor,c?f:h)}M(s,function(){throw new Error("Circle dependency may exists")})}function h(t){a[t].entryCount--,0===a[t].entryCount&&o.push(t)}function f(t){s[t]=!0,h(t)}},S(rl,{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}});var ol="";"undefined"!=typeof navigator&&(ol=navigator.platform||"");var sl={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:ol.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},ll=Yi(),ul={clearColorPalette:function(){ll(this).colorIdx=0,ll(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=ll(e=e||this),r=i.colorIdx||0,a=i.colorNameMap=i.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var o=Hi(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?function(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}(s,n):o;if((l=l||o)&&l.length){var u=l[r];return t&&(a[t]=u),i.colorIdx=(r+1)%l.length,u}}};function cl(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:Z(),categoryAxisMap:Z()},i=hl[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}var hl={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),fl(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),fl(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),fl(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),fl(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),fl(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,a=r.getComponent("parallel",t.get("parallelIndex")),o=e.coordSysDims=a.dimensions.slice();M(a.parallelAxisIndex,function(t,a){var s=r.getComponent("parallelAxis",t),l=o[a];n.set(l,s),fl(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=a)})}};function fl(t){return"category"===t.get("type")}var dl="original",pl="arrayRows",gl="objectRows",vl="keyedColumns",ml="unknown",yl="typedArray",_l="column",bl="row";function xl(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===vl?{}:[]),this.sourceFormat=t.sourceFormat||ml,this.seriesLayoutBy=t.seriesLayoutBy||_l,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&Z(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}xl.seriesDataToSource=function(t){return new xl({data:t,sourceFormat:N(t)?yl:dl,fromDataset:!1})},ar(xl);var wl=Yi();function Sl(t){var e=t.option,n=e.data,i=N(n)?yl:dl,r=!1,a=e.seriesLayoutBy,o=e.sourceHeader,s=e.dimensions,l=function(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}(t);if(l){var u=l.option;n=u.source,i=wl(l).sourceFormat,r=!0,a=a||u.seriesLayoutBy,null==o&&(o=u.sourceHeader),s=s||u.dimensions}var c=function(t,e,n,i,r){if(!t)return{dimensionsDefine:kl(r)};var a,o,s,l;if(e===pl)"auto"===i||null==i?Ml(function(t){null!=t&&"-"!==t&&(E(t)?null==o&&(o=1):o=0)},n,t,10):o=i?1:0,r||1!==o||(r=[],Ml(function(t,e){r[e]=null!=t?t:""},n,t)),a=r?r.length:n===bl?t.length:t[0]?t[0].length:null;else if(e===gl)r||(r=function(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return M(e,function(t,e){i.push(e)}),i}}(t),s=!0);else if(e===vl)r||(r=[],s=!0,M(t,function(t,e){r.push(e)}));else if(e===dl){var u=Wi(t[0]);a=O(u)&&u.length||1}return s&&M(r,function(t,e){"name"===(L(t)?t.name:t)&&(l=e)}),{startIndex:o,dimensionsDefine:kl(r),dimensionsDetectCount:a,potentialNameDimIndex:l}}(n,i,a,o,s),h=e.encode;!h&&l&&(h=function(t,e,n,i,r,a){var o=cl(t),s={},l=[],u=[],c=t.subType,h=Z(["pie","map","funnel"]),f=Z(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(o&&null!=f.get(c)){var d=t.ecModel,p=wl(d).datasetMap,g=e.uid+"_"+r,v=p.get(g)||p.set(g,{categoryWayDim:1,valueWayDim:0});M(o.coordSysDims,function(t){if(null==o.firstCategoryDimIndex){var e=v.valueWayDim++;s[t]=e,u.push(e)}else o.categoryAxisMap.get(t)?(s[t]=0,l.push(0)):(e=v.categoryWayDim++,s[t]=e,u.push(e))})}else if(null!=h.get(c)){for(var m,y=0;y<5&&null==m;y++)Dl(n,i,r,a.dimensionsDefine,a.startIndex,y)||(m=y);if(null!=m){s.value=m;var _=a.potentialNameDimIndex||Math.max(m-1,0);u.push(_),l.push(_)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}(t,l,n,i,a,c)),wl(t).source=new xl({data:n,fromDataset:r,seriesLayoutBy:a,sourceFormat:i,dimensionsDefine:c.dimensionsDefine,startIndex:c.startIndex,dimensionsDetectCount:c.dimensionsDetectCount,encodeDefine:h})}function kl(t){if(t){var e=Z();return D(t,function(t,n){if(null==(t=y({},L(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Ml(t,e,n,i){if(null==i&&(i=1/0),e===bl)for(var r=0;r<n.length&&r<i;r++)t(n[r]?n[r][0]:null,r);else{var a=n[0]||[];for(r=0;r<a.length&&r<i;r++)t(a[r],r)}}function Dl(t,e,n,i,r,a){var o,s;if(N(t))return!1;if(i&&(s=L(s=i[a])?s.name:s),e===pl)if(n===bl){for(var l=t[a],u=0;u<(l||[]).length&&u<5;u++)if(null!=(o=d(l[r+u])))return o}else for(u=0;u<t.length&&u<5;u++){var c=t[r+u];if(c&&null!=(o=d(c[a])))return o}else if(e===gl){if(!s)return;for(u=0;u<t.length&&u<5;u++)if((h=t[u])&&null!=(o=d(h[s])))return o}else if(e===vl){if(!s)return;if(!(l=t[s])||N(l))return!1;for(u=0;u<l.length&&u<5;u++)if(null!=(o=d(l[u])))return o}else if(e===dl)for(u=0;u<t.length&&u<5;u++){var h,f=Wi(h=t[u]);if(!O(f))return!1;if(null!=(o=d(f[a])))return o}function d(t){return(null==t||!isFinite(t)||""===t)&&(!(!E(t)||"-"===t)||void 0)}return!1}var Al="\0_ec_inner",Cl=xs.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new xs(n),this._optionManager=i},setOption:function(t,e){W(!(Al in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):function(t){t=t,this.option={},this.option[Al]=1,this._componentsMap=Z({series:[]}),this._seriesIndices,this._seriesIndicesMap,function(t,e){var n=t.color&&!t.colorLayer;M(e,function(e,i){"colorLayer"===i&&n||rl.hasClass(i)||("object"==typeof e?t[i]=t[i]?m(t[i],e,!1):v(e):null==t[i]&&(t[i]=e))})}(t,this._theme.option),m(t,sl,!1),this.mergeOption(t)}.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var a=n.getMediaOption(this,this._api);a.length&&M(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[];!function(t){wl(t).datasetMap=Z()}(this),M(t,function(t,n){null!=t&&(rl.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?v(t):m(e[n],t,!0))}),rl.topologicalTravel(i,rl.getAllClassMainTypes(),function(i,r){var a=Hi(t[i]),o=Ui(n.get(i),a);(function(t){var e=Z();Ri(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),Ri(t,function(t,n){var i=t.option;W(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),t.keyInfo||(t.keyInfo={})}),Ri(t,function(t,n){var i=t.exist,r=t.option,a=t.keyInfo;if(zi(r)){if(a.name=null!=r.name?r.name+"":i?i.name:Fi+n,i)a.id=i.id;else if(null!=r.id)a.id=r.id+"";else for(var o=0;a.id="\0"+a.name+"\0"+o++,e.get(a.id););e.set(a.id,t)}})})(o),M(o,function(t,e){var n=t.option;L(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=function(t,e,n){return e.type?e.type:n?n.subType:rl.determineSubType(t,e)}(i,n,t.exist))});var s=function(t,e){O(e)||(e=e?[e]:[]);var n={};return M(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}(n,r);e[i]=[],n.set(i,[]),M(o,function(t,r){var a=t.exist,o=t.option;if(W(L(o)||a,"Empty component definition"),o){var l=rl.getClass(i,t.keyInfo.subType,!0);if(a&&a.constructor===l)a.name=t.keyInfo.name,a.mergeOption(o,this),a.optionUpdated(o,!1);else{var u=y({dependentModels:s,componentIndex:r},t.keyInfo);y(a=new l(o,this,this,u),u),a.init(o,this,this,u),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1);n.get(i)[r]=a,e[i][r]=a.option},this),"series"===i&&Il(this,n.get("series"))},this),this._seriesIndicesMap=Z(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=v(this.option);return M(t,function(e,n){if(rl.hasClass(n)){for(var i=(e=Hi(e)).length-1;0<=i;i--)qi(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Al],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,a=t.name,o=this._componentsMap.get(e);if(!o||!o.length)return[];if(null!=i)O(i)||(i=[i]),n=C(D(i,function(t){return o[t]}),function(t){return!!t});else if(null!=r){var s=O(r);n=C(o,function(t){return s&&0<=x(r,t.id)||!s&&t.id===r})}else if(null!=a){var l=O(a);n=C(o,function(t){return l&&0<=x(a,t.name)||!l&&t.name===a})}else n=o.slice();return Tl(n,t)},findComponents:function(t){var e,n,i,r,a,o=t.query,s=t.mainType,l=(n=s+"Index",i=s+"Id",r=s+"Name",!(e=o)||null==e[n]&&null==e[i]&&null==e[r]?null:{mainType:s,index:e[n],id:e[i],name:e[r]}),u=l?this.queryComponents(l):this._componentsMap.get(s);return a=Tl(u,t),t.filter?C(a,t.filter):a},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){M(t,function(t,r){e.call(n,i,t,r)})})):E(t)?M(i.get(t),e,n):L(t)&&M(this.findComponents(t),e,n)},getSeriesByName:function(t){return C(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return C(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){M(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){M(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){M(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return M(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){var n=C(this._componentsMap.get("series"),t,e);Il(this,n)},restoreData:function(t){var e=this._componentsMap;Il(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),rl.topologicalTravel(n,rl.getAllClassMainTypes(),function(n,i){M(e.get(n),function(e){"series"===n&&function(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}(e,t)||e.restoreData()})})}});function Il(t,e){t._seriesIndicesMap=Z(t._seriesIndices=D(e,function(t){return t.componentIndex})||[])}function Tl(t,e){return e.hasOwnProperty("subType")?C(t,function(t){return t.subType===e.subType}):t}S(Cl,ul);var Ol=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"];function Pl(t){M(Ol,function(e){this[e]=I(t[e],t)},this)}var El={};function Ll(){this._coordinateSystems=[]}Ll.prototype={constructor:Ll,create:function(t,e){var n=[];M(El,function(i,r){var a=i.create(t,e);n=n.concat(a||[])}),this._coordinateSystems=n},update:function(t,e){M(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Ll.register=function(t,e){El[t]=e},Ll.get=function(t){return El[t]};var Bl=M,Nl=v,Rl=D,zl=m,$l=/^(min|max)?(.+)$/;function Fl(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Hl(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return M(t,function(t,e){var n=e.match($l);if(n&&n[1]&&n[2]){var a=n[1],o=n[2].toLowerCase();!function(t,e,n){return"min"===n?e<=t:"max"===n?t<=e:t===e}(i[o],t,a)&&(r=!1)}}),r}Fl.prototype={constructor:Fl,setOption:function(t,e){t&&M(Hi(t.series),function(t){t&&t.data&&N(t.data)&&q(t.data)}),t=Nl(t);var n=this._optionBackup,i=function(t,e,n){var i,r,a=[],o=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},a=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Bl(l,function(t){t&&t.option&&(t.query?o.push(t):i=i||t)})}return r=r||t,r.timeline||(r.timeline=s),Bl([r].concat(a).concat(D(o,function(t){return t.option})),function(t){Bl(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:a,mediaDefault:i,mediaList:o}}.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(function(t,e){Bl(e=e||{},function(e,n){if(null!=e){var i=t[n];if(rl.hasClass(n)){e=Hi(e);var r=Ui(i=Hi(i),e);t[n]=Rl(r,function(t){return t.option&&t.exist?zl(t.exist,t.option,!0):t.exist||t.option})}else t[n]=zl(i,e,!0)}})}(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Rl(e.timelineOptions,Nl),this._mediaList=Rl(e.mediaList,Nl),this._mediaDefault=Nl(e.mediaDefault),this._currentMediaIndices=[],Nl(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Nl(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],o=[];if(!i.length&&!r)return o;for(var s=0,l=i.length;s<l;s++)Hl(i[s].query,e,n)&&a.push(s);return!a.length&&r&&(a=[-1]),a.length&&!function(t,e){return t.join(",")===e.join(",")}(a,this._currentMediaIndices)&&(o=Rl(a,function(t){return Nl(-1===t?r.option:i[t].option)})),this._currentMediaIndices=a,o}};var jl=M,Vl=L,Wl=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"];function Ul(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Wl.length;n<i;n++){var r=Wl[n],a=e.normal,o=e.emphasis;a&&a[r]&&(t[r]=t[r]||{},t[r].normal?m(t[r].normal,a[r]):t[r].normal=a[r],a[r]=null),o&&o[r]&&(t[r]=t[r]||{},t[r].emphasis?m(t[r].emphasis,o[r]):t[r].emphasis=o[r],o[r]=null)}}function Gl(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,_(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ql(t){Gl(t,"itemStyle"),Gl(t,"lineStyle"),Gl(t,"areaStyle"),Gl(t,"label"),Gl(t,"labelLine"),Gl(t,"upperLabel"),Gl(t,"edgeLabel")}function Xl(t,e){var n=Vl(t)&&t[e],i=Vl(n)&&n.textStyle;if(i)for(var r=0,a=Vi.length;r<a;r++)e=Vi[r],i.hasOwnProperty(e)&&(n[e]=i[e])}function Yl(t){t&&(ql(t),Xl(t,"label"),t.emphasis&&Xl(t.emphasis,"label"))}function Zl(t){return O(t)?t:t?[t]:[]}function Kl(t){return(O(t)?t[0]:t)||{}}function Jl(t,e){jl(Zl(t.series),function(t){Vl(t)&&function(t){if(Vl(t)){Ul(t),ql(t),Xl(t,"label"),Xl(t,"upperLabel"),Xl(t,"edgeLabel"),t.emphasis&&(Xl(t.emphasis,"label"),Xl(t.emphasis,"upperLabel"),Xl(t.emphasis,"edgeLabel")),(n=t.markPoint)&&(Ul(n),Yl(n)),(i=t.markLine)&&(Ul(i),Yl(i));var e=t.markArea;e&&Yl(e);var n,i,r=t.data;if("graph"===t.type){r=r||t.nodes;var a=t.links||t.edges;if(a&&!N(a))for(var o=0;o<a.length;o++)Yl(a[o]);M(t.categories,function(t){ql(t)})}if(r&&!N(r))for(o=0;o<r.length;o++)Yl(r[o]);if((n=t.markPoint)&&n.data){var s=n.data;for(o=0;o<s.length;o++)Yl(s[o])}if((i=t.markLine)&&i.data){var l=i.data;for(o=0;o<l.length;o++)O(l[o])?(Yl(l[o][0]),Yl(l[o][1])):Yl(l[o])}"gauge"===t.type?(Xl(t,"axisLabel"),Xl(t,"title"),Xl(t,"detail")):"treemap"===t.type?(Gl(t.breadcrumb,"itemStyle"),M(t.levels,function(t){ql(t)})):"tree"===t.type&&ql(t.leaves)}}(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),jl(n,function(e){jl(Zl(t[e]),function(t){t&&(Xl(t,"axisLabel"),Xl(t.axisPointer,"label"))})}),jl(Zl(t.parallel),function(t){var e=t&&t.parallelAxisDefault;Xl(e,"axisLabel"),Xl(e&&e.axisPointer,"label")}),jl(Zl(t.calendar),function(t){Gl(t,"itemStyle"),Xl(t,"dayLabel"),Xl(t,"monthLabel"),Xl(t,"yearLabel")}),jl(Zl(t.radar),function(t){Xl(t,"name")}),jl(Zl(t.geo),function(t){Vl(t)&&(Yl(t),jl(Zl(t.regions),function(t){Yl(t)}))}),jl(Zl(t.timeline),function(t){Yl(t),Gl(t,"label"),Gl(t,"itemStyle"),Gl(t,"controlStyle",!0);var e=t.data;O(e)&&M(e,function(t){L(t)&&(Gl(t,"label"),Gl(t,"itemStyle"))})}),jl(Zl(t.toolbox),function(t){Gl(t,"iconStyle"),jl(t.feature,function(t){Gl(t,"iconStyle")})}),Xl(Kl(t.axisPointer),"label"),Xl(Kl(t.tooltip).axisPointer,"label")}function Ql(t){M(tu,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}var tu=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],eu=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],nu=function(t,e){Jl(t,e),t.series=Hi(t.series),M(t.series,function(t){if(L(t)){var e=t.type;if("line"===e)null!=t.clipOverflow&&(t.clip=t.clipOverflow);else if("pie"===e||"gauge"===e)null!=t.clockWise&&(t.clockwise=t.clockWise);else if("gauge"===e){var n=function(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}(t,"pointer.color");null!=n&&function(t,e,n,i){e=e.split(",");for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r];!i&&null!=a[e[o]]||(a[e[o]]=n)}(t,"itemStyle.color",n)}Ql(t)}}),t.dataRange&&(t.visualMap=t.dataRange),M(eu,function(e){var n=t[e];n&&(O(n)||(n=[n]),M(n,function(t){Ql(t)}))})};function iu(t){M(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,u){var c,h,f=o.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=o.getRawIndex(u):c=o.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;0<=p;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),0<=h){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(0<=f&&0<v||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});o.hostModel.setData(l),e.data=l})}function ru(t,e){xl.isInstance(t)||(t=xl.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===yl&&(this._offset=0,this._dimSize=e,this._data=n),y(this,ou[i===pl?i+"_"+t.seriesLayoutBy:i])}var au=ru.prototype;au.pure=!1;var ou={arrayRows_column:{pure:au.persistent=!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:uu},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:su,getItem:lu,appendData:uu},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;M(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:su,getItem:lu,appendData:uu},typedArray:{persistent:!(au.getSource=function(){return this._source}),pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}};function su(){return this._data.length}function lu(t){return this._data[t]}function uu(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}var cu={arrayRows:hu,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:hu,original:function(t,e,n,i){var r=Wi(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:hu};function hu(t,e,n,i){return null!=n?t[n]:t}var fu={arrayRows:du,objectRows:function(t,e,n,i){return pu(t[e],this._dimensionInfos[e])},keyedColumns:du,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&function(t){return zi(t)&&!(t instanceof Array)}(t)&&(this.hasItemOption=!0),pu(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}};function du(t,e,n,i){return pu(t[i],this._dimensionInfos[e])}function pu(t,e){var n=e&&e.type;if("ordinal"!==n)return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+Ls(t)),null==t||""===t?NaN:+t;var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}function gu(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,a=s.index),cu[o](i,e,a,r)}}}function vu(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===dl||i===gl){var r=t.getRawDataItem(e);return i!==dl||L(r)||(r=null),r?r[n]:void 0}}}var mu=/\{@(.+?)\}/g,yu={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),s=n.getRawDataItem(t),l=n.getItemVisual(t,"color"),u=n.getItemVisual(t,"borderColor"),c=this.ecModel.getComponent("tooltip"),h=function(t){return"auto"===t?a.domSupported?"html":"richText":t||"html"}(c&&c.get("renderMode")),f=this.mainType,d="series"===f,p=n.userOutput;return{componentType:f,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:d?this.subType:null,seriesIndex:this.seriesIndex,seriesId:d?this.id:null,seriesName:d?this.name:null,name:o,dataIndex:r,data:s,dataType:e,value:i,color:l,borderColor:u,dimensionNames:p?p.dimensionNames:null,encode:p?p.encode:null,marker:Ws({color:l,renderMode:h}),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var a=this.getData(n),o=a.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,s.dimensionIndex=i,l(s)):"string"==typeof l?function(t,e,n){O(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],a=0;a<r.length;a++){var o=Vs[a];t=t.replace(js(o),js(o,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(js(Vs[l],s),n?Hs(u):u)}return t}(l,s).replace(mu,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),gu(a,t,n)}):void 0},getRawValue:function(t,e){return gu(this.getData(e),t)},formatTooltip:function(){}};function _u(t){return new bu(t)}function bu(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}var xu=bu.prototype;xu.perform=function(t){var e,n=this._upstream,i=t&&t.skip;if(this._dirty&&n){var r=this.context;r.data=r.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!i&&(e=this._plan(this.context));var a,o=c(this._modBy),s=this._modDataCount||0,l=c(t&&t.modBy),u=t&&t.modDataCount||0;function c(t){return 1<=t||(t=1),t}o===l&&s===u||(e="reset"),!this._dirty&&"reset"!==e||(this._dirty=!1,a=function(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),O(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}(this,i)),this._modBy=l,this._modDataCount=u;var h=t&&t.step;if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!i&&(a||f<d)){var p=this._progress;if(O(p))for(var g=0;g<p.length;g++)Ou(this,p[g],f,d,l,u);else Ou(this,p,f,d,l,u)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var wu,Su,ku,Mu,Du,Au,Cu=Au={reset:function(t,e,n,i){Su=t,wu=e,ku=n,Mu=i,Du=Math.ceil(Mu/ku),Au.next=1<ku&&0<Mu?Tu:Iu}};function Iu(){return Su<wu?Su++:null}function Tu(){var t=Su%Du*ku+Math.ceil(Su/Du),e=wu<=Su?null:t<Mu?t:Su;return Su++,e}function Ou(t,e,n,i,r,a){Cu.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:Cu.next},t.context)}xu.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},xu.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},xu.pipe=function(t){this._downstream===t&&!this._dirty||((this._downstream=t)._upstream=this,t.dirty())},xu.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},xu.getUpstream=function(){return this._upstream},xu.getDownstream=function(){return this._downstream},xu.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Pu=Yi(),Eu=rl.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",visualBorderColorAccessPath:"itemStyle.borderColor",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=_u({count:Bu,reset:Nu}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Sl(this);var r=this.getInitialData(t,n);zu(r,this),this.dataTask.context.data=r,Pu(this).dataBeforeProcessed=r,Lu(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Qs(t):{},r=this.subType;rl.hasClass(r)&&(r+="Series"),m(t,e.getTheme().get(this.subType)),m(t,this.getDefaultOption()),ji(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&Js(t,i,n)},mergeOption:function(t,e){t=m(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&Js(this.option,t,n),Sl(this);var i=this.getInitialData(t,e);zu(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Pu(this).dataBeforeProcessed=i,Lu(this)},fillDataTextStyle:function(t){if(t&&!N(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&ji(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=Fu(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Pu(this).data},setData:function(t){var e=Fu(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Pu(this).data=t},getSource:function(){return function(t){return wl(t).source}(this)},getRawData:function(){return Pu(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n,i){var r=this,a="html"===(i=i||"html")?"<br/>":"\n",o="richText"===i,s={},l=0;function u(t){return{renderMode:i,content:Hs(Rs(t)),style:s}}var c=this.getData(),h=c.mapDimension("defaultedTooltip",!0),f=h.length,d=this.getRawValue(t),p=O(d),g=c.getItemVisual(t,"color");L(g)&&g.colorStops&&(g=(g.colorStops[0]||{}).color),g=g||"transparent";var v=(1<f||p&&!f?function(n){var a=A(n,function(t,e,n){var i=c.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),u=[];function f(t,n){var h=c.getDimensionInfo(n);if(h&&!1!==h.otherDims.tooltip){var f=h.type,d="sub"+r.seriesIndex+"at"+l,p=Ws({color:g,type:"subItem",renderMode:i,markerId:d}),v="string"==typeof p?p:p.content,m=(a?v+Hs(h.displayName||"-")+": ":"")+Hs("ordinal"===f?t+"":"time"===f?e?"":Gs("yyyy/MM/dd hh:mm:ss",t):Rs(t));m&&u.push(m),o&&(s[d]=g,++l)}}h.length?M(h,function(e){f(gu(c,t,e),e)}):M(n,f);var d=a?o?"\n":"<br/>":"",p=d+u.join(d||", ");return{renderMode:i,content:p,style:s}}(d):u(f?gu(c,t,h[0]):p?d[0]:d)).content,m=r.seriesIndex+"at"+l,y=Ws({color:g,type:"item",renderMode:i,markerId:m});s[m]=g,++l;var _=c.getName(t),b=this.name;Gi(this)||(b=""),b=b?Hs(b)+(e?": ":a):"";var x="string"==typeof y?y:y.content;return{html:e?x+b+v:b+x+(_?Hs(_)+": "+v:v),markers:s}},isAnimationEnabled:function(){if(a.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=ul.getColorFromPalette.call(this,t,e,n);return r||i.getColorFromPalette(t,e,n)},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});function Lu(t){var e=t.name;Gi(t)||(t.name=function(t){var e=t.getRawData(),n=e.mapDimension("seriesName",!0),i=[];return M(n,function(t){var n=e.getDimensionInfo(t);n.displayName&&i.push(n.displayName)}),i.join(" ")}(t)||e)}function Bu(t){return t.model.getRawData().count()}function Nu(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),Ru}function Ru(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function zu(t,e){M(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,T($u,e))})}function $u(t){var e=Fu(t);e&&e.setOutputEnd(this.count())}function Fu(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}S(Eu,yu),S(Eu,ul);var Hu=function(){this.group=new qe,this.uid=Ms("viewComponent")};Hu.prototype={constructor:Hu,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){},filterForExposedEvent:null};var ju=Hu.prototype;function Vu(){var t=Yi();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^o||a^s)&&"reset"}}ju.updateView=ju.updateLayout=ju.updateVisual=function(t,e,n,i){},ir(Hu),lr(Hu,{registerWhenExtend:!0});var Wu=Yi(),Uu=Vu();function Gu(){this.group=new qe,this.uid=Ms("viewChart"),this.renderTask=_u({plan:Zu,reset:Ku}),this.renderTask.context={view:this}}var qu=Gu.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){Yu(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){Yu(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null,filterForExposedEvent:null};function Xu(t,e,n){if(t&&(t.trigger(e,n),t.isGroup&&!Ko(t)))for(var i=0,r=t.childCount();i<r;i++)Xu(t.childAt(i),e,n)}function Yu(t,e,n){var i=Xi(t,e),r=e&&null!=e.highlightKey?Jo(e.highlightKey):null;null!=i?M(Hi(i),function(e){Xu(t.getItemGraphicEl(e),n,r)}):t.eachItemGraphicEl(function(t){Xu(t,n,r)})}function Zu(t){return Uu(t.model)}function Ku(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&Wu(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render";return"render"!==l&&o[l](e,n,i,r),Ju[l]}qu.updateView=qu.updateLayout=qu.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},ir(Gu),lr(Gu,{registerWhenExtend:!0}),Gu.markUpdateMethod=function(t,e){Wu(t).updateMethod=e};var Ju={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}};function Qu(t,e,n){var i,r,a,o,s,l=0,u=0,c=null;function h(){u=(new Date).getTime(),c=null,t.apply(a,o||[])}function f(){i=(new Date).getTime(),a=this,o=arguments;var t=s||e,f=s||n;s=null,r=i-(f?l:u)-t,clearTimeout(c),f?c=setTimeout(h,t):0<=r?h():c=setTimeout(h,-r),l=i}return e=e||0,f.clear=function(){c&&(clearTimeout(c),c=null)},f.debounceNextCall=function(t){s=t},f}var tc={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());n.setVisual("color",r);var a=(t.visualBorderColorAccessPath||"itemStyle.borderColor").split("."),o=t.get(a);if(n.setVisual("borderColor",o),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof uo||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e),r=n.get(i,!0),o=n.get(a,!0);null!=r&&t.setItemVisual(e,"color",r),null!=o&&t.setItemVisual(e,"borderColor",o)}:null}}},ec={legend:{selector:{all:"全选",inverse:"反选"}},toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},nc=function(t,e){var n=e.getModel("aria");if(n.get("show"))if(n.get("description"))t.setAttribute("aria-label",n.get("description"));else{var i=0;e.eachSeries(function(t,e){++i},this);var r,a=n.get("data.maxCount")||10,o=n.get("series.maxCount")||10,s=Math.min(i,o);if(!(i<1)){var l=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();r=l?c(h("general.withTitle"),{title:l}):h("general.withoutTitle");var u=[];r+=c(h(1<i?"series.multiple.prefix":"series.single.prefix"),{seriesCount:i}),e.eachSeries(function(t,e){if(e<s){var n,r=t.get("name"),o="series."+(1<i?"multiple":"single")+".";n=c(n=h(r?o+"withName":o+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:function(t){return ec.series.typeNames[t]||"自定义图"}(t.subType)});var l=t.getData();(window.data=l).count()>a?n+=c(h("data.partialData"),{displayCnt:a}):n+=h("data.allData");for(var f=[],d=0;d<l.count();d++)if(d<a){var p=l.getName(d),g=gu(l,d);f.push(c(h(p?"data.withName":"data.withoutName"),{name:p,value:g}))}n+=f.join(h("data.separator.middle"))+h("data.separator.end"),u.push(n)}}),r+=u.join(h("series.multiple.separator.middle"))+h("series.multiple.separator.end"),t.setAttribute("aria-label",r)}}function c(t,e){if("string"!=typeof t)return t;var n=t;return M(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function h(t){var e=n.get(t);if(null!=e)return e;for(var i=t.split("."),r=ec.aria,a=0;a<i.length;++a)r=r[i[a]];return r}},ic=Math.PI;function rc(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished,n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice(),this._allHandlers=n.concat(i),this._stageTaskMap=Z()}var ac=rc.prototype;function oc(t,e,n,i,r){var a;function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}r=r||{},M(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,c=l.overallTask;if(c){var h,f=c.agentStubMap;f.each(function(t){o(r,t)&&(t.dirty(),h=!0)}),h&&c.dirty(),sc(c,i);var d=t.getPerformArgs(c,r.block);f.each(function(t){t.perform(d)}),a|=c.perform(d)}else u&&u.each(function(s,l){o(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),sc(s,i),a|=s.perform(u)})}}),t.unfinished|=a}ac.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},ac.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount;return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},ac.getPipeline=function(t){return this._pipelineMap.get(t)},ac.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},ac.restorePipelines=function(t){var e=this,n=e._pipelineMap=Z();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),mc(e,t,t.dataTask)})},ac.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;M(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&function(t,e,n,i,r){var a=n.seriesTaskMap||(n.seriesTaskMap=Z()),o=e.seriesType,s=e.getTargetSeries;function l(n){var o=n.uid,s=a.get(o)||a.set(o,_u({plan:fc,reset:dc,count:vc}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},mc(t,n,s)}e.createOnAllSeries?i.eachRawSeries(l):o?i.eachRawSeriesByType(o,l):s&&s(i,r).each(l);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}(this,i,r,e,n),i.overallReset&&function(t,e,n,i,r){var a=n.overallTask=n.overallTask||_u({reset:lc});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var o=a.agentStubMap=a.agentStubMap||Z(),s=e.seriesType,l=e.getTargetSeries,u=!0,c=e.modifyOutputEnd;function h(e){var n=e.uid,i=o.get(n);i||(i=o.set(n,_u({reset:uc,onDirty:hc})),a.dirty()),i.context={model:e,overallProgress:u,modifyOutputEnd:c},i.agent=a,i.__block=u,mc(t,e,i)}s?i.eachRawSeriesByType(s,h):l?l(i,r).each(h):(u=!1,M(i.getSeries(),h));var f=t._pipelineMap;o.each(function(t,e){f.get(e)||(t.dispose(),a.dirty(),o.removeKey(e))})}(this,i,r,e,n)},this)},ac.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context;a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,mc(this,e,r)},ac.performDataProcessorTasks=function(t,e){oc(this,this._dataProcessorHandlers,t,e,{block:!0})},ac.performVisualTasks=function(t,e,n){oc(this,this._visualHandlers,t,e,n)},ac.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},ac.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var sc=ac.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)};function lc(t){t.overallReset(t.ecModel,t.api,t.payload)}function uc(t,e){return t.overallProgress&&cc}function cc(){this.agent.dirty(),this.getDownstream().dirty()}function hc(){this.agent&&this.agent.dirty()}function fc(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function dc(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Hi(t.reset(t.model,t.ecModel,t.api,t.payload));return 1<e.length?D(e,function(t,e){return gc(e)}):pc}var pc=gc(0);function gc(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a);else r&&r.progress&&r.progress(e,i)}}function vc(t){return t.data.count()}function mc(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);r.head||(r.head=n),r.tail&&r.tail.pipe(n),(r.tail=n).__idxInPipeline=r.count++,n.__pipeline=r}rc.wrapStageHandler=function(t,e){return P(t)&&(t={overallReset:t,seriesType:function(t){yc=null;try{t(_c,bc)}catch(t){}return yc}(t)}),t.uid=Ms("stageHandler"),e&&(t.visualType=e),t};var yc,_c={},bc={};function xc(t,e){for(var n in e.prototype)t[n]=K}function wc(){return{axisLine:{lineStyle:{color:Mc}},axisTick:{lineStyle:{color:Mc}},axisLabel:{textStyle:{color:Mc}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:Mc}}}}xc(_c,Cl),xc(bc,Pl),_c.eachSeriesByType=_c.eachRawSeriesByType=function(t){yc=t},_c.eachComponent=function(t){"series"===t.mainType&&t.subType&&(yc=t.subType)};var Sc=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],kc={color:Sc,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],Sc]},Mc="#eee",Dc=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],Ac={color:Dc,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:Mc},crossStyle:{color:Mc}}},legend:{textStyle:{color:Mc}},textStyle:{color:Mc},title:{textStyle:{color:Mc}},toolbox:{iconStyle:{normal:{borderColor:Mc}}},dataZoom:{textStyle:{color:Mc}},visualMap:{textStyle:{color:Mc}},timeline:{lineStyle:{color:Mc},itemStyle:{normal:{color:Dc[1]}},label:{normal:{textStyle:{color:Mc}}},controlStyle:{normal:{color:Mc,borderColor:Mc}}},timeAxis:wc(),logAxis:wc(),valueAxis:wc(),categoryAxis:wc(),line:{symbol:"circle"},graph:{color:Dc},gauge:{title:{textStyle:{color:Mc}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};Ac.categoryAxis.splitLine.show=!1,rl.extend({type:"dataset",defaultOption:{seriesLayoutBy:_l,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){!function(t){var e=t.option.source,n=ml;if(N(e))n=yl;else if(O(e)){0===e.length&&(n=pl);for(var i=0,r=e.length;i<r;i++){var a=e[i];if(null!=a){if(O(a)){n=pl;break}if(L(a)){n=gl;break}}}}else if(L(e)){for(var o in e)if(e.hasOwnProperty(o)&&k(e[o])){n=vl;break}}else if(null!=e)throw new Error("Invalid data");wl(t).sourceFormat=n}(this)}}),Hu.extend({type:"dataset"});Ma.extend({type:"ellipse",shape:{cx:0,cy:0,rx:0,ry:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.rx,a=e.ry,o=.5522848*r,s=.5522848*a;t.moveTo(n-r,i),t.bezierCurveTo(n-r,i-s,n-o,i-a,n,i-a),t.bezierCurveTo(n+o,i-a,n+r,i-s,n+r,i),t.bezierCurveTo(n+r,i+s,n+o,i+a,n,i+a),t.bezierCurveTo(n-o,i+a,n-r,i+s,n-r,i),t.closePath()}});function Cc(t){for(E(t)&&(t=(new DOMParser).parseFromString(t,"text/xml")),9===t.nodeType&&(t=t.firstChild);"svg"!==t.nodeName.toLowerCase()||1!==t.nodeType;)t=t.nextSibling;return t}var Ic=Z(),Tc=function(t,e,n){var i;return M(i=O(e)?e:e.svg?[{type:"svg",source:e.svg,specialAreas:e.specialAreas}]:(e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),[{type:"geoJSON",source:e,specialAreas:n}]),function(t){var e=t.type;"geoJson"===e&&(e=t.type="geoJSON"),(0,Pc[e])(t)}),Ic.set(t,i)},Oc=function(t){return Ic.get(t)},Pc={geoJSON:function(t){var e=t.source;t.geoJSON=E(e)?"undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")():e},svg:function(t){t.svgXML=Cc(t.source)}},Ec=W,Lc=M,Bc=P,Nc=L,Rc=rl.parseClassType,zc={PROCESSOR:{FILTER:1e3,SERIES_FILTER:800,STATISTIC:5e3},VISUAL:{LAYOUT:1e3,PROGRESSIVE_LAYOUT:1100,GLOBAL:2e3,CHART:3e3,POST_CHART_LAYOUT:3500,COMPONENT:4e3,BRUSH:5e3}},$c="__flagInMainProcess",Fc="__optionUpdated",Hc=/^[a-zA-Z0-9_]+$/;function jc(t,e){return function(n,i,r){!e&&this._disposed||(n=n&&n.toLowerCase(),pt.prototype[t].call(this,n,i,r))}}function Vc(){pt.call(this)}function Wc(t,e,n){n=n||{},"string"==typeof e&&(e=ph[e]),this.id,this.group,this._dom=t;var i=this._zr=Bi(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Qu(I(i.flush,i),17),(e=v(e))&&nu(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Ll;var r=this._api=function(t){var e=t._coordSysMgr;return y(new Pl(t),{getCoordinateSystems:I(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}(this);function a(t,e){return t.__prio-e.__prio}en(dh,a),en(ch,a),this._scheduler=new rc(this,r,ch,dh),pt.call(this,this._ecEventProcessor=new sh),this._messageCenter=new Vc,this._initEvents(),this.resize=I(this.resize,this),this._pendingActions=[],i.animation.on("frame",this._onframe,this),function(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[Fc]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}(i,this),q(this)}Vc.prototype.on=jc("on",!0),Vc.prototype.off=jc("off",!0),Vc.prototype.one=jc("one",!0),S(Vc,pt);var Uc=Wc.prototype;function Gc(t,e,n){if(!this._disposed){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems();e=Ki(r,e);for(var o=0;o<a.length;o++){var s=a[o];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}}Uc._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[Fc]){var e=this[Fc].silent;this[$c]=!0,Xc(this),qc.update.call(this),this[$c]=!1,this[Fc]=!1,Jc.call(this,e),Qc.call(this,e)}else if(t.unfinished){var n=1,i=this._model,r=this._api;t.unfinished=!1;do{var a=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),Zc(this,i),t.performVisualTasks(i),ih(this,this._model,r,"remain"),n-=+new Date-a}while(0<n&&t.unfinished);t.unfinished||this._zr.flush()}}},Uc.getDom=function(){return this._dom},Uc.getZr=function(){return this._zr},Uc.setOption=function(t,e,n){if(!this._disposed){var i;if(Nc(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[$c]=!0,!this._model||e){var r=new Fl(this._api),a=this._theme,o=this._model=new Cl;o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,hh),n?(this[Fc]={silent:i},this[$c]=!1):(Xc(this),qc.update.call(this),this._zr.flush(),this[Fc]=!1,this[$c]=!1,Jc.call(this,i),Qc.call(this,i))}},Uc.setTheme=function(){t("error","ECharts#setTheme() is DEPRECATED in ECharts 3.0"," at components\\echarts\\echarts.simple.min.js:22")},Uc.getModel=function(){return this._model},Uc.getOption=function(){return this._model&&this._model.getOption()},Uc.getWidth=function(){return this._zr.getWidth()},Uc.getHeight=function(){return this._zr.getHeight()},Uc.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},Uc.getRenderedCanvas=function(t){if(a.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Uc.getSvgDataUrl=function(){if(a.svgSupported){var t=this._zr;return M(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Uc.getDataURL=function(t){if(!this._disposed){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;Lc(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return Lc(i,function(t){t.group.ignore=!1}),a}},Uc.getConnectedDataURL=function(t){if(!this._disposed&&a.canvasSupported){var e=this.group,n=Math.min,i=Math.max;if(mh[e]){var r=1/0,o=1/0,s=-1/0,l=-1/0,u=[],c=t&&t.pixelRatio||1;M(vh,function(a,c){if(a.group===e){var h=a.getRenderedCanvas(v(t)),f=a.getDom().getBoundingClientRect();r=n(f.left,r),o=n(f.top,o),s=i(f.right,s),l=i(f.bottom,l),u.push({dom:h,left:f.left,top:f.top})}});var h=(s*=c)-(r*=c),f=(l*=c)-(o*=c),d=b();d.width=h,d.height=f;var p=Bi(d);return t.connectedBackgroundColor&&p.add(new ro({shape:{x:0,y:0,width:h,height:f},style:{fill:t.connectedBackgroundColor}})),Lc(u,function(t){var e=new vi({style:{x:t.left*c-r,y:t.top*c-o,image:t.dom}});p.add(e)}),p.refreshImmediately(),d.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Uc.convertToPixel=T(Gc,"convertToPixel"),Uc.convertFromPixel=T(Gc,"convertFromPixel"),Uc.containPixel=function(t,e){var n;if(!this._disposed)return M(t=Ki(this._model,t),function(t,i){0<=i.indexOf("Models")&&M(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},Uc.getVisual=function(t,e){var n=(t=Ki(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Uc.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Uc.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var qc={prepareAndUpdate:function(t){Xc(this),qc.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),Zc(this,e),r.update(e,n),eh(e),o.performVisualTasks(e,t),nh(this,e,n,t);var s=e.get("backgroundColor")||"transparent";if(a.canvasSupported)i.setBackgroundColor(s);else{var l=pe(s);s=ve(l,"rgb"),0===l[3]&&(s="transparent")}rh(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(a,o){var s=n.getViewOfComponentModel(o);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var a=Z();e.eachSeries(function(r){var o=n._chartsMap[r.__viewId];if(o.updateTransform){var s=o.updateTransform(r,e,i,t);s&&s.update&&a.set(r.uid,1)}else a.set(r.uid,1)}),eh(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),ih(n,e,i,t,a),rh(e,this._api)}},updateView:function(t){var e=this._model;e&&(Gu.markUpdateMethod(t,"updateView"),eh(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),nh(this,this._model,this._api,t),rh(e,this._api))},updateVisual:function(t){qc.update.call(this,t)},updateLayout:function(t){qc.update.call(this,t)}};function Xc(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),th(t,"component",e,n),th(t,"chart",e,n),n.plan()}function Yc(t,e,n,i,r){var a=t._model;if(i){var o={};o[i+"Id"]=n[i+"Id"],o[i+"Index"]=n[i+"Index"],o[i+"Name"]=n[i+"Name"];var s={mainType:i,query:o};r&&(s.subType=r);var l=n.excludeSeriesId;null!=l&&(l=Z(Hi(l))),a&&a.eachComponent(s,function(e){l&&null!=l.get(e.id)||u(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else Lc(t._componentsViews.concat(t._chartsViews),u);function u(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}}function Zc(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function Kc(t,e){var n=t.type,i=t.escapeConnect,r=lh[n],a=r.actionInfo,o=(a.update||"update").split(":"),s=o.pop();o=null!=o[0]&&Rc(o[0]),this[$c]=!0;var l=[t],u=!1;t.batch&&(u=!0,l=D(t.batch,function(e){return(e=_(y({},e),t)).batch=null,e}));var c,h=[],f="highlight"===n||"downplay"===n;Lc(l,function(t){(c=(c=r.action(t,this._model,this._api))||y({},t)).type=a.event||c.type,h.push(c),f?Yc(this,s,t,"series"):o&&Yc(this,s,t,o.main,o.sub)},this),"none"===s||f||o||(this[Fc]?(Xc(this),qc.update.call(this,t),this[Fc]=!1):qc[s].call(this,t)),c=u?{type:a.event||n,escapeConnect:i,batch:h}:h[0],this[$c]=!1,e||this._messageCenter.trigger(c.type,c)}function Jc(t){for(var e=this._pendingActions;e.length;){var n=e.shift();Kc.call(this,n,t)}}function Qc(t){t||this.trigger("updated")}function th(t,e,n,i){for(var r="component"===e,a=r?t._componentsViews:t._chartsViews,o=r?t._componentsMap:t._chartsMap,s=t._zr,l=t._api,u=0;u<a.length;u++)a[u].__alive=!1;function c(t){var e="_ec_"+t.id+"_"+t.type,u=o[e];if(!u){var c=Rc(t.type);(u=new(r?Hu.getClass(c.main,c.sub):Gu.getClass(c.sub))).init(n,l),o[e]=u,a.push(u),s.add(u.group)}t.__viewId=u.__id=e,u.__alive=!0,u.__model=t,u.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},r||i.prepareView(u,t,n,l)}for(r?n.eachComponent(function(t,e){"series"!==t&&c(e)}):n.eachSeries(c),u=0;u<a.length;){var h=a[u];h.__alive?u++:(r||h.renderTask.dispose(),s.remove(h.group),h.dispose(n,l),a.splice(u,1),delete o[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function eh(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function nh(t,e,n,i){!function(t,e,n,i,r){Lc(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),oh(r,t)})}(t,e,n,i),Lc(t._chartsViews,function(t){t.__alive=!1}),ih(t,e,n,i),Lc(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function ih(t,e,n,i,r){var o,s=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var a=n.renderTask;s.updatePayload(a,i),r&&r.get(e.uid)&&a.dirty(),o|=a.perform(s.getPerformArgs(a)),n.group.silent=!!e.get("silent"),oh(e,n),function(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}(e,n)}),s.unfinished|=o,function(t,e){var n=t._zr.storage,i=0;n.traverse(function(t){i++}),i>e.get("hoverLayerThreshold")&&!a.node&&e.eachSeries(function(e){if(!e.preventUsingHoverLayer){var n=t._chartsMap[e.__viewId];n.__alive&&n.group.traverse(function(t){t.useHoverLayer=!0})}})}(t,e),nc(t._zr.dom,e)}function rh(t,e){Lc(fh,function(n){n(t,e)})}Uc.resize=function(t){if(!this._disposed){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[$c]=!0,n&&Xc(this),qc.update.call(this),this[$c]=!1,Jc.call(this,i),Qc.call(this,i)}}},Uc.showLoading=function(t,e){if(!this._disposed&&(Nc(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),gh[t])){var n=gh[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Uc.hideLoading=function(){this._disposed||(this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null)},Uc.makeActionFromEvent=function(t){var e=y({},t);return e.type=uh[t.type],e},Uc.dispatchAction=function(t,e){this._disposed||(Nc(e)||(e={silent:!!e}),lh[t.type]&&this._model&&(this[$c]?this._pendingActions.push(t):(Kc.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&a.browser.weChat&&this._throttledZrFlush(),Jc.call(this,e.silent),Qc.call(this,e.silent))))},Uc.appendData=function(t){if(!this._disposed){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0}},Uc.on=jc("on",!1),Uc.off=jc("off",!1),Uc.one=jc("one",!1);var ah=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];function oh(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function sh(){this.eventInfo}Uc._initEvents=function(){Lc(ah,function(t){function e(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var a=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=a&&a.getDataParams(r.dataIndex,r.dataType,r)||{}}else r&&r.eventData&&(n=y({},r.eventData));if(n){var o=n.componentType,s=n.componentIndex;"markLine"!==o&&"markPoint"!==o&&"markArea"!==o||(o="series",s=n.seriesIndex);var l=o&&null!=s&&i.getComponent(o,s),u=l&&this["series"===l.mainType?"_chartsMap":"_componentsMap"][l.__viewId];n.event=e,n.type=t,this._ecEventProcessor.eventInfo={targetEl:r,packedEvent:n,model:l,view:u},this.trigger(t,n)}}e.zrEventfulCallAtLast=!0,this._zr.on(t,e,this)},this),Lc(uh,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Uc.isDisposed=function(){return this._disposed},Uc.clear=function(){this._disposed||this.setOption({series:[]},!0)},Uc.dispose=function(){if(!this._disposed){this._disposed=!0,Qi(this.getDom(),bh,"");var t=this._api,e=this._model;Lc(this._componentsViews,function(n){n.dispose(e,t)}),Lc(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete vh[this.id]}},S(Wc,pt),sh.prototype={constructor:sh,normalizeQuery:function(t){var e={},n={},i={};if(E(t)){var r=Rc(t);e.mainType=r.main||null,e.subType=r.sub||null}else{var a=["Index","Name","Id"],o={name:1,dataIndex:1,dataType:1};M(t,function(t,r){for(var s=!1,l=0;l<a.length;l++){var u=a[l],c=r.lastIndexOf(u);if(0<c&&c===r.length-u.length){var h=r.slice(0,c);"data"!==h&&(e.mainType=h,e[u.toLowerCase()]=t,s=!0)}}o.hasOwnProperty(r)&&(n[r]=t,s=!0),s||(i[r]=t)})}return{cptQuery:e,dataQuery:n,otherQuery:i}},filter:function(t,e,n){var i=this.eventInfo;if(!i)return!0;var r=i.targetEl,a=i.packedEvent,o=i.model,s=i.view;if(!o||!s)return!0;var l=e.cptQuery,u=e.dataQuery;return c(l,o,"mainType")&&c(l,o,"subType")&&c(l,o,"index","componentIndex")&&c(l,o,"name")&&c(l,o,"id")&&c(u,a,"name")&&c(u,a,"dataIndex")&&c(u,a,"dataType")&&(!s.filterForExposedEvent||s.filterForExposedEvent(t,e.otherQuery,r,a));function c(t,e,n,i){return null==t[n]||e[i||n]===t[n]}},afterTrigger:function(){this.eventInfo=null}};var lh={},uh={},ch=[],hh=[],fh=[],dh=[],ph={},gh={},vh={},mh={},yh=new Date-0,_h=new Date-0,bh="_echarts_instance_";function xh(t){mh[t]=!1}var wh=xh;function Sh(t){return vh[function(t,e){return t.getAttribute?t.getAttribute(e):t[e]}(t,bh)]}function kh(t,e){ph[t]=e}function Mh(t){hh.push(t)}function Dh(t,e){Th(ch,t,e,1e3)}function Ah(t,e,n){"function"==typeof e&&(n=e,e="");var i=Nc(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,Ec(Hc.test(i)&&Hc.test(e)),lh[i]||(lh[i]={action:n,actionInfo:t}),uh[e]=i}function Ch(t,e){Th(dh,t,e,1e3,"layout")}function Ih(t,e){Th(dh,t,e,3e3,"visual")}function Th(t,e,n,i,r){(Bc(e)||Nc(e))&&(n=e,e=i);var a=rc.wrapStageHandler(n,r);return a.__prio=e,a.__raw=n,t.push(a),a}function Oh(t,e){gh[t]=e}function Ph(t){return Hu.extend(t)}function Eh(t){return Eu.extend(t)}function Lh(t){return Gu.extend(t)}function Bh(t){return t}function Nh(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||Bh,this._newKeyGetter=i||Bh,this.context=r}function Rh(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o];null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}Ih(2e3,tc),Mh(nu),Dh(900,function(t){var e=Z();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(iu)}),Oh("default",function(t,e){_(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new ro({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new ho({shape:{startAngle:-ic/2,endAngle:-ic/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new ro({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*ic/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*ic/2}).delay(300).start("circularInOut");var a=new qe;return a.add(i),a.add(r),a.add(n),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;i.setShape({cx:e,cy:a});var o=i.shape.r;r.setShape({x:e-o,y:a-o,width:2*o,height:2*o}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),Ah({type:"highlight",event:"highlight",update:"highlight"},K),Ah({type:"downplay",event:"downplay",update:"downplay"},K),kh("light",kc),kh("dark",Ac),Nh.prototype={constructor:Nh,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(Rh(t,{},i,"_oldKeyGetter",this),Rh(e,n,r,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=n[o=i[a]])?((u=s.length)?(1===u&&(n[o]=null),s=s.shift()):n[o]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<r.length;a++){var o=r[a];if(n.hasOwnProperty(o)){var s;if(null==(s=n[o]))continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var zh=Z(["tooltip","label","itemName","itemId","seriesName"]);function $h(t,e){return t.hasOwnProperty(e)||(t[e]=[]),t[e]}var Fh=L,Hh="undefined",jh={float:typeof Float64Array==Hh?Array:Float64Array,int:typeof Int32Array==Hh?Array:Int32Array,ordinal:Array,number:Array,time:Array},Vh=typeof Uint32Array==Hh?Array:Uint32Array,Wh=typeof Int32Array==Hh?Array:Int32Array,Uh=typeof Uint16Array==Hh?Array:Uint16Array;function Gh(t){return 65535<t._rawCount?Vh:Uh}var qh=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],Xh=["_extent","_approximateExtent","_rawExtent"];function Yh(t,e){M(qh.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,M(Xh,function(n){t[n]=v(e[n])}),t._calculationInfo=y(e._calculationInfo)}function Zh(t,e){t=t||["x","y"];for(var n={},i=[],r={},a=0;a<t.length;a++){var o=t[a];E(o)&&(o={name:o});var s=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=s,o.coordDimIndex=0),o.otherDims=o.otherDims||{},i.push(s),(n[s]=o).index=a,o.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=function(t){var e={},n=e.encode={},i=Z(),r=[],a=[],o=e.userOutput={dimensionNames:t.dimensions.slice(),encode:{}};M(t.dimensions,function(e){var s=t.getDimensionInfo(e),l=s.coordDim;if(l){var u=s.coordDimIndex;$h(n,l)[u]=e,s.isExtraCoord||(i.set(l,1),function(t){return!("ordinal"===t||"time"===t)}(s.type)&&(r[0]=e),$h(o.encode,l)[u]=s.index),s.defaultTooltip&&a.push(e)}zh.each(function(t,e){var i=$h(n,e),r=s.otherDims[e];null!=r&&!1!==r&&(i[r]=s.name)})});var s=[],l={};i.each(function(t,e){var i=n[e];l[e]=i[0],s=s.concat(i)}),e.dataDimsOnCoord=s,e.encodeFirstDimNotExtra=l;var u=n.label;u&&u.length&&(r=u.slice());var c=n.tooltip;return c&&c.length?a=c.slice():a.length||(a=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=a,e}(this),this._invertedIndicesMap=r,this._calculationInfo={},this.userOutput=this._dimensionsSummary.userOutput}var Kh=Zh.prototype;function Jh(t,e,n,i,r){var a=jh[e.type],o=i-1,s=e.name,l=t[s][o];if(l&&l.length<n){for(var u=new a(Math.min(r-o*n,n)),c=0;c<l.length;c++)u[c]=l[c];t[s][o]=u}for(var h=i*n;h<r;h+=n)t[s].push(new a(Math.min(r-h,n)))}function Qh(t){var e=t._invertedIndicesMap;M(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){n=e[i]=new Wh(r.categories.length);for(var a=0;a<n.length;a++)n[a]=-1;for(a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function tf(t,e,n){var i;if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a];if(l){i=l[o];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function ef(t){return t}function nf(t){return t<this._count&&0<=t?this._indices[t]:-1}function rf(t,e){var n=t._idList[e];return null==n&&(n=tf(t,t._idDimIdx,e)),null==n&&(n="e\0\0"+e),n}function af(t){return O(t)||(t=[t]),t}function of(t,e){var n=t.dimensions,i=new Zh(D(n,t.getDimensionInfo,t),t.hostModel);Yh(i,t);for(var r=i._storage={},a=t._storage,o=0;o<n.length;o++){var s=n[o];a[s]&&(0<=x(e,s)?(r[s]=sf(a[s]),i._rawExtent[s]=lf(),i._extent[s]=null):r[s]=a[s])}return i}function sf(t){for(var e,n,i=new Array(t.length),r=0;r<t.length;r++)i[r]=(e=t[r],n=void 0,(n=e.constructor)===Array?e.slice():new n(e));return i}function lf(){return[1/0,-1/0]}function uf(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType}function cf(t,e,n){xl.isInstance(e)||(e=xl.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var i=(n.dimsDef||[]).slice(),r=Z(n.encodeDef),a=Z(),o=Z(),s=[],l=function(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return M(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}(e,t,i,n.dimCount),u=0;u<l;u++){var c=i[u]=y({},L(i[u])?i[u]:{name:i[u]}),h=c.name,f=s[u]={otherDims:{}};null!=h&&null==a.get(h)&&(f.name=f.displayName=h,a.set(h,u)),null!=c.type&&(f.type=c.type),null!=c.displayName&&(f.displayName=c.displayName)}r.each(function(t,e){if(1===(t=Hi(t).slice()).length&&!E(t[0])&&t[0]<0)r.set(e,!1);else{var n=r.set(e,[]);M(t,function(t,i){E(t)&&(t=a.get(t)),null!=t&&t<l&&(n[i]=t,p(s[t],e,i))})}});var d=0;function p(t,e,n){null!=zh.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,o.set(e,!0))}M(t,function(t,e){var n,i,a;if(E(t))n=t,t={};else{n=t.name;var o=t.ordinalMeta;t.ordinalMeta=null,(t=v(t)).ordinalMeta=o,i=t.dimsDef,a=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}if(!1!==(l=r.get(n))){var l;if(!(l=Hi(l)).length)for(var u=0;u<(i&&i.length||1);u++){for(;d<s.length&&null!=s[d].coordDim;)d++;d<s.length&&l.push(d++)}M(l,function(e,r){var o=s[e];if(p(_(o,t),n,r),null==o.name&&i){var l=i[r];L(l)||(l={name:l}),o.name=o.displayName=l.name,o.defaultTooltip=l.defaultTooltip}a&&_(o.otherDims,a)})}});var g=n.generateCoord,m=n.generateCoordCount,b=null!=m;m=g?m||1:0;for(var x,w,S=g||"value",k=0;k<l;k++)null==(f=s[k]=s[k]||{}).coordDim&&(f.coordDim=hf(S,o,b),f.coordDimIndex=0,(!g||m<=0)&&(f.isExtraCoord=!0),m--),null==f.name&&(f.name=hf(f.coordDim,a)),null==f.type&&(x=e,w=k,f.name,Dl(x.data,x.sourceFormat,x.seriesLayoutBy,x.dimensionsDefine,x.startIndex,w))&&(f.type="ordinal");return s}function hf(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function ff(t,e){return cf((e=e||{}).coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})}function df(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function pf(t,e,n){n=n||{},xl.isInstance(t)||(t=xl.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),a=Ll.get(r),o=cl(e);o&&(i=D(o.coordSysDims,function(t){var e={name:t},n=o.axisMap.get(t);if(n){var i=n.get("type");e.type=function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}(i)}return e})),i=i||a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"];var s,l,u=ff(t,{coordDimensions:i,generateCoord:n.generateCoord});o&&M(u,function(t,e){var n=t.coordDim,i=o.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var c=function(t,e,n){var i,r,a,o,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(M(e,function(t,n){E(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){a="__\0ecstackresult",o="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var c=r.coordDim,h=r.type,f=0;M(e,function(t){t.coordDim===c&&f++}),e.push({name:a,coordDim:c,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:o,coordDim:o,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:o,stackResultDimension:a}}(e,u),h=new Zh(u,e);h.setCalculationInfo(c);var f=null!=s&&function(t){if(t.sourceFormat===dl){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}(t.data||[]);return null!=e&&!O(Wi(e))}}(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return h.hasItemOption=!1,h.initData(t,null,f),h}Kh.type="list",Kh.hasItemOption=!0,Kh.getDimension=function(t){return"number"!=typeof t&&(isNaN(t)||this._dimensionInfos.hasOwnProperty(t))||(t=this.dimensions[t]),t},Kh.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},Kh.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},Kh.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},Kh.initData=function(t,e,n){(xl.isInstance(t)||k(t))&&(t=new ru(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=fu[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._dimValueGetterArrayRows=fu.arrayRows,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},Kh.getProvider=function(){return this._rawData},Kh.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},Kh.appendValues=function(t,e){for(var n=this._chunkSize,i=this._storage,r=this.dimensions,a=r.length,o=this._rawExtent,s=this.count(),l=s+Math.max(t.length,e?e.length:0),u=this._chunkCount,c=0;c<a;c++)o[m=r[c]]||(o[m]=lf()),i[m]||(i[m]=[]),Jh(i,this._dimensionInfos[m],n,u,l),this._chunkCount=i[m].length;for(var h=new Array(a),f=s;f<l;f++){for(var d=f-s,p=Math.floor(f/n),g=f%n,v=0;v<a;v++){var m=r[v],y=this._dimValueGetterArrayRows(t[d]||h,m,d,v);i[m][p][g]=y;var _=o[m];y<_[0]&&(_[0]=y),y>_[1]&&(_[1]=y)}e&&(this._nameList[f]=e[d])}this._rawCount=this._count=l,this._extent={},Qh(this)},Kh._initDataFromProvider=function(t,e){if(!(e<=t)){for(var n,i=this._chunkSize,r=this._rawData,a=this._storage,o=this.dimensions,s=o.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=0;p<s;p++){h[x=o[p]]||(h[x]=lf());var g=l[x];0===g.otherDims.itemName&&(n=this._nameDimIdx=p),0===g.otherDims.itemId&&(this._idDimIdx=p),a[x]||(a[x]=[]),Jh(a,g,i,d,e),this._chunkCount=a[x].length}for(var v=new Array(s),m=t;m<e;m++){v=r.getItem(m,v);for(var y=Math.floor(m/i),_=m%i,b=0;b<s;b++){var x,w=a[x=o[b]][y],S=this._dimValueGetter(v,x,m,b);w[_]=S;var k=h[x];S<k[0]&&(k[0]=S),S>k[1]&&(k[1]=S)}if(!r.pure){var M=u[m];if(v&&null==M)if(null!=v.name)u[m]=M=v.name;else if(null!=n){var D=o[n],A=a[D][y];if(A){M=A[_];var C=l[D].ordinalMeta;C&&C.categories.length&&(M=C.categories[M])}}var I=null==v?null:v.id;null==I&&null!=M&&(f[M]=f[M]||0,0<f[I=M]&&(I+="__ec__"+f[M]),f[M]++),null!=I&&(c[m]=I)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},Qh(this)}},Kh.count=function(){return this._count},Kh.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array){r=new e(n);for(var i=0;i<n;i++)r[i]=t[i]}else r=new e(t.buffer,0,n)}else{var r=new(e=Gh(this))(this.count());for(i=0;i<r.length;i++)r[i]=i}return r},Kh.get=function(t,e){if(!(0<=e&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},Kh.getByRawIndex=function(t,e){if(!(0<=e&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},Kh._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},Kh.getValues=function(t,e){var n=[];O(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},Kh.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=0,i=e.length;n<i;n++)if(isNaN(this.get(e[n],t)))return!1;return!0},Kh.getDataExtent=function(t){t=this.getDimension(t);var e=this._storage[t],n=lf();if(!e)return n;var i,r=this.count();if(!this._indices)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();for(var a=(i=n)[0],o=i[1],s=0;s<r;s++){var l=this._getFast(t,this.getRawIndex(s));l<a&&(a=l),o<l&&(o=l)}return i=[a,o],this._extent[t]=i},Kh.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},Kh.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},Kh.getCalculationInfo=function(t){return this._calculationInfo[t]},Kh.setCalculationInfo=function(t,e){Fh(t)?y(this._calculationInfo,t):this._calculationInfo[t]=e},Kh.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},Kh.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},Kh.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},Kh.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},Kh.indexOfRawIndex=function(t){if(t>=this._rawCount||t<0)return-1;if(!this._indices)return t;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0;if(e[a]<t)i=1+a;else{if(!(e[a]>t))return a;r=a-1}}return-1},Kh.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l);l<=n&&u<=r&&((u<r||0<=l&&a<0)&&(r=u,a=l,i.length=0),i.push(o))}return i},Kh.getRawIndex=ef,Kh.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},Kh.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||tf(this,this._nameDimIdx,e)||""},Kh.getId=function(t){return rf(this,this.getRawIndex(t))},Kh.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=D(af(t),this.getDimension,this)).length,a=0;a<this.count();a++)switch(r){case 0:e.call(n,a);break;case 1:e.call(n,this.get(t[0],a),a);break;case 2:e.call(n,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var o=0,s=[];o<r;o++)s[o]=this.get(t[o],a);s[o]=a,e.apply(n,s)}}},Kh.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=D(af(t),this.getDimension,this);for(var r=this.count(),a=new(Gh(this))(r),o=[],s=t.length,l=0,u=t[0],c=0;c<r;c++){var h,f=this.getRawIndex(c);if(0===s)h=e.call(n,c);else if(1===s){var d=this._getFast(u,f);h=e.call(n,d,c)}else{for(var p=0;p<s;p++)o[p]=this._getFast(u,f);o[p]=c,h=e.apply(n,o)}h&&(a[l++]=f)}return l<r&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?nf:ef,this}},Kh.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),a=new(Gh(this))(r),o=0,s=e[0],l=t[s][0],u=t[s][1],c=!1;if(!this._indices){var h=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)(l<=(x=p[v])&&x<=u||isNaN(x))&&(a[o++]=h),h++;c=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var b=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var x=p[v],w=b[v];(l<=x&&x<=u||isNaN(x))&&(y<=w&&w<=_||isNaN(w))&&(a[o++]=h),h++}}c=!0}}if(!c)if(1===i)for(v=0;v<r;v++){var S=this.getRawIndex(v);(l<=(x=this._getFast(s,S))&&x<=u||isNaN(x))&&(a[o++]=S)}else for(v=0;v<r;v++){var k=!0;for(S=this.getRawIndex(v),d=0;d<i;d++){var M=e[d];((x=this._getFast(n,S))<t[M][0]||x>t[M][1])&&(k=!1)}k&&(a[o++]=this.getRawIndex(v))}return o<r&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?nf:ef,this}}},Kh.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},Kh.map=function(t,e,n,i){n=n||i||this;var r=of(this,t=D(af(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?nf:ef;for(var a=r._storage,o=[],s=this._chunkSize,l=t.length,u=this.count(),c=[],h=r._rawExtent,f=0;f<u;f++){for(var d=0;d<l;d++)c[d]=this.get(t[d],f);c[l]=f;var p=e&&e.apply(n,c);if(null!=p){"object"!=typeof p&&(o[0]=p,p=o);for(var g=this.getRawIndex(f),v=Math.floor(g/s),m=g%s,y=0;y<p.length;y++){var _=t[y],b=p[y],x=h[_],w=a[_];w&&(w[v][m]=b),b<x[0]&&(x[0]=b),b>x[1]&&(x[1]=b)}}}return r},Kh.downSample=function(t,e,n,i){for(var r=of(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(Gh(this))(u),d=0,p=0;p<u;p+=s){u-p<s&&(s=u-p,o.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;o[g]=l[m][y]}var _=n(o),b=this.getRawIndex(Math.min(p+i(o,_)||0,u-1)),x=b%c;(l[Math.floor(b/c)][x]=_)<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=b}return r._count=d,r._indices=f,r.getRawIndex=nf,r},Kh.getItemModel=function(t){var e=this.hostModel;return new xs(this.getRawDataItem(t),e,e&&e.ecModel)},Kh.diff=function(t){var e=this;return new Nh(t?t.getIndices():[],this.getIndices(),function(e){return rf(t,e)},function(t){return rf(e,t)})},Kh.getVisual=function(t){var e=this._visual;return e&&e[t]},Kh.setVisual=function(t,e){if(Fh(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},Kh.setLayout=function(t,e){if(Fh(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},Kh.getLayout=function(t){return this._layout[t]},Kh.getItemLayout=function(t){return this._itemLayouts[t]},Kh.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?y(this._itemLayouts[t]||{},e):e},Kh.clearItemLayouts=function(){this._itemLayouts.length=0},Kh.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},Kh.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,Fh(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0);else i[e]=n,r[e]=!0},Kh.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}},Kh.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(uf,e)),this._graphicEls[t]=e},Kh.getItemGraphicEl=function(t){return this._graphicEls[t]},Kh.eachItemGraphicEl=function(t,e){M(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},Kh.cloneShallow=function(t){if(!t){var e=D(this.dimensions,this.getDimensionInfo,this);t=new Zh(e,this.hostModel)}if(t._storage=this._storage,Yh(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?nf:ef,t},Kh.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(j(arguments)))})},Kh.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],Kh.CHANGABLE_METHODS=["filterSelf","selectRange"],Eu.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return pf(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clip:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var gf=Ao({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),vf=Ao({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),mf=Ao({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,u=Math.asin(s/o),c=Math.cos(u)*o,h=Math.sin(u),f=Math.cos(u),d=.6*o,p=.7*o;t.moveTo(n-c,l+s),t.arc(n,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),yf=Ao({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2;t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),_f={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i);r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},bf={};M({line:oo,rect:ro,roundRect:ro,square:ro,circle:Ua,diamond:vf,pin:mf,arrow:yf,triangle:gf},function(t,e){bf[e]=new t});var xf=Ao({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},calculateTextPosition:function(t,e,n){var i=Nn(t,e,n),r=this.shape;return r&&"pin"===r.symbolType&&"inside"===e.textPosition&&(i.y=n.y+.4*n.height),i},buildPath:function(t,e,n){var i=e.symbolType;if("none"!==i){var r=bf[i];r=r||bf[i="rect"],_f[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n)}}});function wf(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function Sf(t,e,n,i,r,a,o){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),(s=0===t.indexOf("image://")?To(t.slice(8),new Ge(e,n,i,r),o?"center":"cover"):0===t.indexOf("path://")?Io(t.slice(7),{},new Ge(e,n,i,r),o?"center":"cover"):new xf({shape:{symbolType:t,x:e,y:n,width:i,height:r}})).__isEmptyBrush=l,s.setColor=wf,s.setColor(a),s}function kf(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return gu(t,e,n[0]);if(i){for(var r=[],a=0;a<n.length;a++){var o=gu(t,e,n[a]);r.push(o)}return r.join(" ")}}function Mf(t,e,n){qe.call(this),this.updateData(t,e,n)}var Df=Mf.prototype,Af=Mf.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};function Cf(t){return[t[0]/2,t[1]/2]}function If(t,e){this.parent.drift(t,e)}Df._createSymbol=function(t,e,n,i,r){this.removeAll();var a=Sf(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);a.attr({z2:100,culling:!0,scale:Cf(i)}),a.drift=If,this._symbolType=t,this.add(a)},Df.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},Df.getSymbolPath=function(){return this.childAt(0)},Df.getScale=function(){return this.childAt(0).scale},Df.highlight=function(){this.childAt(0).trigger("emphasis")},Df.downplay=function(){this.childAt(0).trigger("normal")},Df.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},Df.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":e.cursor},Df.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,a=Af(t,e),o=i!==this._symbolType;if(o){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,a,s)}else(l=this.childAt(0)).silent=!1,ls(l,{scale:Cf(a)},r,e);if(this._updateCommon(t,e,a,n),o){var l=this.childAt(0),u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),us(l,c,r,e)}this._seriesModel=r};var Tf=["itemStyle"],Of=["emphasis","itemStyle"],Pf=["label"],Ef=["emphasis","label"];function Lf(t,e){if(!this.incremental&&!this.useHoverLayer)if("emphasis"===e){var n=this.__symbolOriginalScale,i=n[1]/n[0],r={scale:[Math.max(1.1*n[0],n[0]+3),Math.max(1.1*n[1],n[1]+3*i)]};this.animateTo(r,400,"elasticOut")}else"normal"===e&&this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}function Bf(t){this.group=new qe,this._symbolCtor=t||Mf}Df._updateCommon=function(t,e,n,i){var r=this.childAt(0),a=t.hostModel,o=t.getItemVisual(e,"color");"image"!==r.type?r.useStyle({strokeNoScale:!0}):r.setStyle({opacity:null,shadowBlur:null,shadowOffsetX:null,shadowOffsetY:null,shadowColor:null});var s=i&&i.itemStyle,l=i&&i.hoverItemStyle,u=i&&i.symbolRotate,c=i&&i.symbolOffset,h=i&&i.labelModel,f=i&&i.hoverLabelModel,d=i&&i.hoverAnimation,p=i&&i.cursorStyle;if(!i||t.hasItemOption){var g=i&&i.itemModel?i.itemModel:t.getItemModel(e);s=g.getModel(Tf).getItemStyle(["color"]),l=g.getModel(Of).getItemStyle(),u=g.getShallow("symbolRotate"),c=g.getShallow("symbolOffset"),h=g.getModel(Pf),f=g.getModel(Ef),d=g.getShallow("hoverAnimation"),p=g.getShallow("cursor")}else l=y({},l);var v=r.style;r.attr("rotation",(u||0)*Math.PI/180||0),c&&r.attr("position",[Cs(c[0],n[0]),Cs(c[1],n[1])]),p&&r.attr("cursor",p),r.setColor(o,i&&i.symbolInnerColor),r.setStyle(s);var m=t.getItemVisual(e,"opacity");null!=m&&(v.opacity=m);var _=t.getItemVisual(e,"liftZ"),b=r.__z2Origin;null!=_?null==b&&(r.__z2Origin=r.z2,r.z2+=_):null!=b&&(r.z2=b,r.__z2Origin=null);var x=i&&i.useNameLabel;Qo(v,l,h,f,{labelFetcher:a,labelDataIndex:e,defaultText:function(e,n){return x?t.getName(e):kf(t,e)},isRectText:!0,autoColor:o}),r.__symbolOriginalScale=Cf(n),r.hoverStyle=l,r.highDownOnUpdate=d&&a.isAnimationEnabled()?Lf:null,Yo(r)},Df.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,e&&e.keepLabel||(n.style.text=null),ls(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},w(Mf,qe);var Nf=Bf.prototype;function Rf(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function zf(t){return null==t||L(t)||(t={isIgnore:t}),t||{}}function $f(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function Ff(t,e,n){var i,r=t.getBaseAxis(),a=t.getOtherAxis(r),o=function(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:0<i[0]?n=i[0]:i[1]<0&&(n=i[1]),n}(a,n),s=r.dim,l=a.dim,u=e.mapDimension(l),c=e.mapDimension(s),h="x"===l||"radius"===l?1:0,f=D(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=df(e,f[0]))&&(f[0]=d),(i|=df(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:o,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:h,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Hf(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var a=t.baseDataOffset,o=[];return o[a]=n.get(t.baseDim,i),o[1-a]=r,e.dataToPoint(o)}Nf.updateData=function(t,e){e=zf(e);var n=this.group,i=t.hostModel,r=this._data,a=this._symbolCtor,o=$f(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(Rf(t,r,i,e)){var s=new a(t,i,o);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);Rf(t,c,s,e)?(u?(u.updateData(t,s,o),ls(u,{position:c},i)):(u=new a(t,s)).attr("position",c),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},Nf.isPersistent=function(){return!0},Nf.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},Nf.incrementalPrepareUpdate=function(t){this._seriesScope=$f(t),this._data=null,this.group.removeAll()},Nf.incrementalUpdate=function(t,e,n){function i(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}n=zf(n);for(var r=t.start;r<t.end;r++){var a=e.getItemLayout(r);if(Rf(e,a,r,n)){var o=new this._symbolCtor(e,r,this._seriesScope);o.traverse(i),o.attr("position",a),this.group.add(o),e.setItemGraphicEl(r,o)}}},Nf.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var jf=ut,Vf=ct,Wf=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},Uf=function(t,e){return t[0]=e[0],t[1]=e[1],t},Gf=[],qf=[],Xf=[];function Yf(t){return isNaN(t[0])||isNaN(t[1])}function Zf(t,e,n,i,r,a,o,s,l,u){return"none"!==u&&u?function(t,e,n,i,r,a,o,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(r<=f||f<0)break;if(Yf(p)){if(c){f+=a;continue}break}if(f===n)t[0<a?"moveTo":"lineTo"](p[0],p[1]);else if(0<l){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;Uf(qf,g),qf[v]=g[v]+m,Uf(Xf,p),Xf[v]=p[v]-m,t.bezierCurveTo(qf[0],qf[1],Xf[0],Xf[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=a}return d}.apply(this,arguments):function(t,e,n,i,r,a,o,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(r<=f||f<0)break;if(Yf(p)){if(c){f+=a;continue}break}if(f===n)t[0<a?"moveTo":"lineTo"](p[0],p[1]),Uf(qf,p);else if(0<l){var g=f+a,v=e[g];if(c)for(;v&&Yf(e[g]);)v=e[g+=a];var m=.5,y=e[h];if(!(v=e[g])||Yf(v))Uf(Xf,p);else{var _,b;if(Yf(v)&&!c&&(v=p),nt(Gf,v,y),"x"===u||"y"===u){var x="x"===u?0:1;_=Math.abs(p[x]-y[x]),b=Math.abs(p[x]-v[x])}else _=ot(p,y),b=ot(p,v);Wf(Xf,p,Gf,-l*(1-(m=b/(b+_))))}jf(qf,qf,s),Vf(qf,qf,o),jf(Xf,Xf,s),Vf(Xf,Xf,o),t.bezierCurveTo(qf[0],qf[1],Xf[0],Xf[1],p[0],p[1]),Wf(qf,p,Gf,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=a}return d}.apply(this,arguments)}function Kf(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var a=t[r];a[0]<n[0]&&(n[0]=a[0]),a[1]<n[1]&&(n[1]=a[1]),a[0]>i[0]&&(i[0]=a[0]),a[1]>i[1]&&(i[1]=a[1])}return{min:e?n:i,max:e?i:n}}var Jf=Ma.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:Wa(Ma.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,a=Kf(n,e.smoothConstraint);if(e.connectNulls){for(;0<r&&Yf(n[r-1]);r--);for(;i<r&&Yf(n[i]);i++);}for(;i<r;)i+=Zf(t,n,i,r,r,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Qf=Ma.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:Wa(Ma.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,a=n.length,o=e.smoothMonotone,s=Kf(n,e.smoothConstraint),l=Kf(i,e.smoothConstraint);if(e.connectNulls){for(;0<a&&Yf(n[a-1]);a--);for(;r<a&&Yf(n[r]);r++);}for(;r<a;){var u=Zf(t,n,r,a,a,1,s.min,s.max,e.smooth,o,e.connectNulls);Zf(t,i,r+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),r+=u+1,t.closePath()}}});function td(t,e,n){var i=t.getArea(),r=t.getBaseAxis().isHorizontal(),a=i.x,o=i.y,s=i.width,l=i.height,u=n.get("lineStyle.width")||2,c=new ro({shape:{x:a-=u/2,y:o-=u/2,width:s+=u,height:l+=u}});return e&&(c.shape[r?"width":"height"]=0,us(c,{shape:{width:s,height:l}},n)),c}function ed(t,e,n){var i=t.getArea(),r=new qa({shape:{cx:Is(t.cx,1),cy:Is(t.cy,1),r0:Is(i.r0,1),r:Is(i.r,1),startAngle:i.startAngle,endAngle:i.endAngle,clockwise:i.clockwise}});return e&&(r.shape.endAngle=i.startAngle,us(r,{shape:{endAngle:i.endAngle}},n)),r}function nd(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function id(t){return"number"==typeof t?t:t?.5:0}function rd(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,a=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o];a.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],a.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],a.push(u),a.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],a.push(u)}}return t[o]&&a.push(t[o]),a}function ad(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var a=n.getAxesByScale("ordinal")[0];if(a&&(!r||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),a=Math.max(1,Math.round(r/5)),o=0;o<r;o+=a)if(1.5*Mf.getSymbolSize(e,o)[t.isHorizontal()?1:0]>i)return!1;return!0}(a,e))){var o=e.mapDimension(a.dim),s={};return M(a.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(o,t))}}}}function od(t,e,n){if("cartesian2d"!==t.type)return ed(t,e,n);var i=t.getBaseAxis().isHorizontal(),r=td(t,e,n);if(!n.get("clip",!0)){var a=r.shape,o=Math.max(a.width,a.height);i?(a.y-=o,a.height+=2*o):(a.x-=o,a.width+=2*o)}return r}function sd(t,e){return Math.round(t.length/2)}Gu.extend({type:"line",init:function(){var t=new qe,e=new Bf;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,a=t.getData(),o=t.getModel("lineStyle"),s=t.getModel("areaStyle"),l=a.mapArray(a.getItemLayout),u="polar"===i.type,c=this._coordSys,h=this._symbolDraw,f=this._polyline,d=this._polygon,p=this._lineGroup,g=t.get("animation"),v=!s.isEmpty(),m=s.get("origin"),y=function(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,a=e.count();r<a;r++)i.push(Hf(n,t,e,r));return i}(i,a,Ff(i,a,m)),b=t.get("showSymbol"),x=b&&!u&&ad(t,a,i),w=this._data;w&&w.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),w.setItemGraphicEl(e,null))}),b||h.remove(),r.add(p);var S,k=!u&&t.get("step");i&&i.getArea&&(null!=(S=i.getArea()).width?(S.x-=.1,S.y-=.1,S.width+=.2,S.height+=.2):S.r0&&(S.r0-=.5,S.r1+=.5)),f&&c.type===i.type&&k===this._step?(v&&!d?d=this._newPolygon(l,y,i,g):d&&!v&&(p.remove(d),d=this._polygon=null),p.setClipPath(od(i,!1,t)),b&&h.updateData(a,{isIgnore:x,clipShape:S}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),nd(this._stackedOnPoints,y)&&nd(this._points,l)||(g?this._updateAnimation(a,y,i,n,k,m):(k&&(l=rd(l,i,k),y=rd(y,i,k)),f.setShape({points:l}),d&&d.setShape({points:l,stackedOnPoints:y})))):(b&&h.updateData(a,{isIgnore:x,clipShape:S}),k&&(l=rd(l,i,k),y=rd(y,i,k)),f=this._newPolyline(l,i,g),v&&(d=this._newPolygon(l,y,i,g)),p.setClipPath(od(i,!0,t)));var A=function(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,a=n.length-1;0<=a;a--){var o=n[a].dimension,s=t.dimensions[o],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[a];break}}if(r){var u=e.getAxis(i),c=D(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),h=c.length,f=r.outerColors.slice();h&&c[0].coord>c[h-1].coord&&(c.reverse(),f.reverse());var d=c[0].coord-10,p=c[h-1].coord+10,g=p-d;if(g<.001)return"transparent";M(c,function(t){t.offset=(t.coord-d)/g}),c.push({offset:h?c[h-1].offset:.5,color:f[1]||"transparent"}),c.unshift({offset:h?c[0].offset:.5,color:f[0]||"transparent"});var v=new po(0,0,0,0,c,!0);return v[i]=d,v[i+"2"]=p,v}}}(a,i)||a.getVisual("color");f.useStyle(_(o.getLineStyle(),{fill:"none",stroke:A,lineJoin:"bevel"}));var C=t.get("smooth");if(C=id(t.get("smooth")),f.setShape({smooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),d){var I=a.getCalculationInfo("stackedOnSeries"),T=0;d.useStyle(_(s.getAreaStyle(),{fill:A,opacity:.7,lineJoin:"bevel"})),I&&(T=id(I.get("smooth"))),d.setShape({smooth:C,stackedOnSmooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=i,this._stackedOnPoints=y,this._points=l,this._step=k,this._valueOrigin=m},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),a=Xi(r,i);if(!(a instanceof Array)&&null!=a&&0<=a){var o=r.getItemGraphicEl(a);if(!o){var s=r.getItemLayout(a);if(!s)return;(o=new Mf(r,a)).position=s,o.setZ(t.get("zlevel"),t.get("z")),o.ignore=isNaN(s[0])||isNaN(s[1]),o.__temp=!0,r.setItemGraphicEl(a,o),o.stopSymbolAnimation(!0),this.group.add(o)}o.highlight()}else Gu.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),a=Xi(r,i);if(null!=a&&0<=a){var o=r.getItemGraphicEl(a);o&&(o.__temp?(r.setItemGraphicEl(a,null),this.group.remove(o)):o.downplay())}else Gu.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Jf({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Qf({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n},_updateAnimation:function(t,e,n,i,r,a){var o=this._polyline,s=this._polygon,l=t.hostModel,u=function(t,e,n,i,r,a,o,s){for(var l=function(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=Ff(r,e,o),m=Ff(a,t,s),y=0;y<l.length;y++){var _=l[y],b=!0;switch(_.cmd){case"=":var x=t.getItemLayout(_.idx),w=e.getItemLayout(_.idx1);(isNaN(x[0])||isNaN(x[1]))&&(x=w.slice()),u.push(x),c.push(w),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":var S=_.idx;u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Hf(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":S=_.idx;var k=t.getRawIndex(S);k!==S?(u.push(t.getItemLayout(S)),c.push(a.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Hf(m,a,t,S)),g.push(k)):b=!1}b&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var M=[],D=[],A=[],C=[],I=[];for(y=0;y<p.length;y++)S=p[y],M[y]=u[S],D[y]=c[S],A[y]=h[S],C[y]=f[S],I[y]=d[S];return{current:M,next:D,stackedOnCurrent:A,stackedOnNext:C,status:I}}(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,a),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=rd(u.current,n,r),h=rd(u.stackedOnCurrent,n,r),f=rd(u.next,n,r),d=rd(u.stackedOnNext,n,r)),o.shape.__points=u.current,o.shape.points=c,ls(o,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),ls(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",o.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var ld={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}};function ud(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function cd(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}ud.prototype.parse=function(t){return t},ud.prototype.getSetting=function(t){return this._setting[t]},ud.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},ud.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},ud.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},ud.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},ud.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},ud.prototype.getExtent=function(){return this._extent.slice()},ud.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},ud.prototype.isBlank=function(){return this._isBlank},ud.prototype.setBlank=function(t){this._isBlank=t},ud.prototype.getLabel=null,ir(ud),lr(ud,{registerWhenExtend:!0}),cd.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&D(n,dd);return new cd({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var hd=cd.prototype;function fd(t){return t._map||(t._map=Z(t.categories))}function dd(t){return L(t)&&null!=t.value?t.value:t+""}hd.getOrdinal=function(t){return fd(this).get(t)},hd.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=fd(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var pd=ud.prototype,gd=ud.extend({type:"ordinal",init:function(t,e){t&&!O(t)||(t=new cd({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),pd.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return pd.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(pd.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:K,niceExtent:K});gd.create=function(){return new gd};var vd=Is;function md(t){return Ts(t)+2}function yd(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function _d(t,e){isFinite(t[0])||(t[0]=e[0]),isFinite(t[1])||(t[1]=e[1]),yd(t,0,e),yd(t,1,e),t[0]>t[1]&&(t[0]=t[1])}var bd=Is,xd=ud.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),xd.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=md(t)},getTicks:function(){return function(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),(a=vd(a+t,i))!==r[r.length-1]);)if(1e4<r.length)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=Ts(t)||0:"auto"===n&&(n=this._intervalPrecision),Rs(t=bd(t,n,!0))},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var a=function(t,e,n,i){var r={},a=t[1]-t[0],o=r.interval=Ns(a/e,!0);null!=n&&o<n&&(o=r.interval=n),null!=i&&i<o&&(o=r.interval=i);var s=r.intervalPrecision=md(o);return _d(r.niceTickExtent=[vd(Math.ceil(t[0]/o)*o,s),vd(Math.floor(t[1]/o)*o,s)],t),r}(i,t,e,n);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax||(e[1]+=n/2),e[0]-=n/2}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=bd(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=bd(Math.ceil(e[1]/r)*r))}});xd.create=function(){return new xd};var wd="__ec_stack_",Sd="undefined"!=typeof Float32Array?Float32Array:Array;function kd(t){return t.get("stack")||wd+t.seriesIndex}function Md(t){return t.dim+t.index}function Dd(t,e){var n=[];return e.eachSeriesByType(t,function(t){Td(t)&&!Od(t)&&n.push(t)}),n}function Ad(t){var e=function(t){var e={};M(t,function(t){var n=t.coordinateSystem.getBaseAxis();if("time"===n.type||"value"===n.type)for(var i=t.getData(),r=n.dim+"_"+n.index,a=i.mapDimension(n.dim),o=0,s=i.count();o<s;++o){var l=i.get(a,o);e[r]?e[r].push(l):e[r]=[l]}});var n=[];for(var i in e)if(e.hasOwnProperty(i)){var r=e[i];if(r){r.sort(function(t,e){return t-e});for(var a=null,o=1;o<r.length;++o){var s=r[o]-r[o-1];0<s&&(a=null===a?s:Math.min(a,s))}n[i]=a}}return n}(t),n=[];return M(t,function(t){var i,r=t.coordinateSystem.getBaseAxis(),a=r.getExtent();if("category"===r.type)i=r.getBandWidth();else if("value"===r.type||"time"===r.type){var o=r.dim+"_"+r.index,s=e[o],l=Math.abs(a[1]-a[0]),u=r.scale.getExtent(),c=Math.abs(u[1]-u[0]);i=s?l/c*s:l}else{var h=t.getData();i=Math.abs(a[1]-a[0])/h.count()}var f=Cs(t.get("barWidth"),i),d=Cs(t.get("barMaxWidth"),i),p=Cs(t.get("barMinWidth")||1,i),g=t.get("barGap"),v=t.get("barCategoryGap");n.push({bandWidth:i,barWidth:f,barMaxWidth:d,barMinWidth:p,barGap:g,barCategoryGap:v,axisKey:Md(r),stackId:kd(t)})}),function(t){var e={};M(t,function(t,n){var i=t.axisKey,r=t.bandWidth,a=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=a.stacks;e[i]=a;var s=t.stackId;o[s]||a.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!o[s].width&&(o[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var u=t.barMaxWidth;u&&(o[s].maxWidth=u);var c=t.barMinWidth;c&&(o[s].minWidth=c);var h=t.barGap;null!=h&&(a.gap=h);var f=t.barCategoryGap;null!=f&&(a.categoryGap=f)});var n={};return M(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,a=Cs(t.categoryGap,r),o=Cs(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*o);u=Math.max(u,0),M(i,function(t){var e=t.maxWidth,n=t.minWidth;if(t.width)i=t.width,e&&(i=Math.min(i,e)),n&&(i=Math.max(i,n)),t.width=i,s-=i,l--;else{var i=u;e&&e<i&&(i=Math.min(e,s)),n&&i<n&&(i=n),i!==u&&(t.width=i,s-=i,l--)}}),u=(s-a)/(l+(l-1)*o),u=Math.max(u,0);var c,h=0;M(i,function(t,e){t.width||(t.width=u),h+=(c=t).width*(1+o)}),c&&(h-=c.width*o);var f=-h/2;M(i,function(t,i){n[e][i]=n[e][i]||{bandWidth:r,offset:f,width:t.width},f+=t.width*(1+o)})}),n}(n)}function Cd(t,e,n){if(t&&e){var i=t[Md(e)];return null!=i&&null!=n&&(i=i[kd(n)]),i}}var Id={seriesType:"bar",plan:Vu(),reset:function(t){if(Td(t)&&Od(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=Cd(Ad([t]),i,t).width;return.5<u||(u=.5),{progress:function(t,e){for(var c,h=t.count,f=new Sd(2*h),d=new Sd(h),p=[],g=[],v=0,m=0;null!=(c=t.next());)g[l]=e.get(a,c),g[1-l]=e.get(o,c),p=n.dataToPoint(g,null,p),f[v++]=p[0],f[v++]=p[1],d[m++]=c;e.setLayout({largePoints:f,largeDataIndices:d,barWidth:u,valueAxisStart:Pd(i,r,!1),valueAxisHorizontal:s})}}}}};function Td(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function Od(t){return t.pipelineContext&&t.pipelineContext.large}function Pd(t,e){return e.toGlobalCoord(e.dataToCoord("log"===e.type?1:0))}var Ed=xd.prototype,Ld=Math.ceil,Bd=Math.floor,Nd=36e5,Rd=864e5,zd=xd.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return Gs(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=Rd,e[1]+=Rd),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-Rd}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=Is(Bd(e[0]/i)*i)),t.fixMax||(e[1]=Is(Ld(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],a=r/t;null!=e&&a<e&&(a=e),null!=n&&n<a&&(a=n);var o=$d.length,s=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=1+r:i=r}return n}($d,a,0,o),l=$d[Math.min(s,o-1)],u=l[1];"year"===l[0]&&(u*=Ns(r/u/t,!0));var c=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,h=[Math.round(Ld((i[0]-c)/u)*u+c),Math.round(Bd((i[1]-c)/u)*u+c)];_d(h,i),this._stepLvl=l,this._interval=u,this._niceExtent=h},parse:function(t){return+Ls(t)}});M(["contain","normalize"],function(t){zd.prototype[t]=function(e){return Ed[t].call(this,this.parse(e))}});var $d=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",Nd],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",6*Nd],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",Rd],["MM-dd\nyyyy",2*Rd],["MM-dd\nyyyy",3*Rd],["MM-dd\nyyyy",4*Rd],["MM-dd\nyyyy",5*Rd],["MM-dd\nyyyy",6*Rd],["week",7*Rd],["MM-dd\nyyyy",864e6],["week",14*Rd],["week",21*Rd],["month",31*Rd],["week",42*Rd],["month",62*Rd],["week",70*Rd],["quarter",95*Rd],["month",31*Rd*4],["month",13392e6],["half-year",16416e6],["month",31*Rd*8],["month",26784e6],["year",380*Rd]];zd.create=function(t){return new zd({useUTC:t.ecModel.get("useUTC")})};var Fd=ud.prototype,Hd=xd.prototype,jd=Ts,Vd=Is,Wd=Math.floor,Ud=Math.ceil,Gd=Math.pow,qd=Math.log,Xd=ud.extend({type:"log",base:10,$constructor:function(){ud.apply(this,arguments),this._originalScale=new xd},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return D(Hd.getTicks.call(this),function(i){var r=Is(Gd(this.base,i));return r=i===e[0]&&t.__fixMin?Yd(r,n[0]):r,i===e[1]&&t.__fixMax?Yd(r,n[1]):r},this)},getLabel:Hd.getLabel,scale:function(t){return t=Fd.scale.call(this,t),Gd(this.base,t)},setExtent:function(t,e){var n=this.base;t=qd(t)/qd(n),e=qd(e)/qd(n),Hd.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Fd.getExtent.call(this);e[0]=Gd(t,e[0]),e[1]=Gd(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=Yd(e[0],i[0])),n.__fixMax&&(e[1]=Yd(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=qd(t[0])/qd(e),t[1]=qd(t[1])/qd(e),Fd.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n==1/0||n<=0)){var i=function(t){return Math.pow(10,Bs(t))}(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&0<Math.abs(i);)i*=10;var r=[Is(Ud(e[0]/i)*i),Is(Wd(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Hd.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});function Yd(t,e){return Vd(t,jd(e))}function Zd(t,e){var n,i,r,a=t.type,o=e.getMin(),s=e.getMax(),l=null!=o,u=null!=s,c=t.getExtent();"ordinal"===a?n=e.getCategories().length:(O(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=Cs(i[0],1),i[1]=Cs(i[1],1),r=c[1]-c[0]||Math.abs(c[0])),null==o&&(o="ordinal"===a?n?0:NaN:c[0]-i[0]*r),null==s&&(s="ordinal"===a?n?n-1:NaN:c[1]+i[1]*r),"dataMin"===o?o=c[0]:"function"==typeof o&&(o=o({min:c[0],max:c[1]})),"dataMax"===s?s=c[1]:"function"==typeof s&&(s=s({min:c[0],max:c[1]})),null!=o&&isFinite(o)||(o=NaN),null!=s&&isFinite(s)||(s=NaN),t.setBlank(z(o)||z(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(0<o&&0<s&&!l&&(o=0),o<0&&s<0&&!u&&(s=0));var h=e.ecModel;if(h&&"time"===a){var f,d=Dd("bar",h);if(M(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var p=Ad(d),g=function(t,e,n,i){var r=n.axis.getExtent(),a=r[1]-r[0],o=Cd(i,n.axis);if(void 0===o)return{min:t,max:e};var s=1/0;M(o,function(t){s=Math.min(t.offset,s)});var l=-1/0;M(o,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,c=e-t,h=c/(1-(s+l)/a)-c;return{min:t-=s/u*h,max:e+=l/u*h}}(o,s,e,p);o=g.min,s=g.max}}return[o,s]}function Kd(t,e){var n=Zd(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function Jd(t){var e,n=t.getLabelModel().get("formatter"),i="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof n?(e=n,n=function(n){return n=t.scale.getLabel(n),e.replace("{value}",null!=n?n:"")}):"function"==typeof n?function(e,r){return null!=i&&(r=e-i),n(function(t,e){return"category"===t.type?t.scale.getLabel(e):e}(t,e),r)}:function(e){return t.scale.getLabel(e)}}function Qd(t){var e=t.get("interval");return null==e?"auto":e}function tp(t){return"category"===t.type&&0===Qd(t.getLabelModel())}function ep(t){return this._axes[t]}function np(t){this._axes={},this._dimList=[],this.name=t||""}function ip(t){np.call(this,t)}M(["contain","normalize"],function(t){Xd.prototype[t]=function(e){return e=qd(e)/qd(this.base),Fd[t].call(this,e)}}),Xd.create=function(){return new Xd},np.prototype={constructor:np,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return D(this._dimList,ep,this)},getAxesByScale:function(t){return t=t.toLowerCase(),C(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var a=n[r],o=this._axes[a];i[a]=o[e](t[a])}return i}},ip.prototype={constructor:ip,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return(n=n||[])[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),a=i.getExtent(),o=n.parse(t[0]),s=i.parse(t[1]);return(e=e||[])[0]=Math.min(Math.max(Math.min(r[0],r[1]),o),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return(e=e||[])[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")},getArea:function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),n=Math.min(t[0],t[1]),i=Math.min(e[0],e[1]);return new Ge(n,i,Math.max(t[0],t[1])-n,Math.max(e[0],e[1])-i)}},w(ip,np);var rp=Yi();function ap(t){return"category"===t.type?function(t){var e=t.getLabelModel(),n=sp(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}(t):function(t){var e=t.scale.getTicks(),n=Jd(t);return{labels:D(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}(t)}function op(t,e){return"category"===t.type?function(t,e){var n,i,r=lp(t,"ticks"),a=Qd(e),o=up(r,a);if(o)return o;if(e.get("show")&&!t.scale.isBlank()||(n=[]),P(a))n=fp(t,a,!0);else if("auto"===a){var s=sp(t,t.getLabelModel());i=s.labelCategoryInterval,n=D(s.labels,function(t){return t.tickValue})}else n=hp(t,i=a,!0);return cp(r,a,{ticks:n,tickCategoryInterval:i})}(t,e):{ticks:t.scale.getTicks()}}function sp(t,e){var n,i=lp(t,"labels"),r=Qd(e),a=up(i,r);return a||cp(i,r,{labels:P(r)?fp(t,r):hp(t,n="auto"===r?function(t){var e=rp(t).autoInterval;return null!=e?e:rp(t).autoInterval=t.calculateCategoryInterval()}(t):r),labelCategoryInterval:n})}function lp(t,e){return rp(t)[e]||(rp(t)[e]=[])}function up(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function cp(t,e,n){return t.push({key:e,value:n}),n}function hp(t,e,n){var i=Jd(t),r=t.scale,a=r.getExtent(),o=t.getLabelModel(),s=[],l=Math.max((e||0)+1,1),u=a[0],c=r.count();0!==u&&1<l&&2<c/l&&(u=Math.round(Math.ceil(u/l)*l));var h=tp(t),f=o.get("showMinLabel")||h,d=o.get("showMaxLabel")||h;f&&u!==a[0]&&g(a[0]);for(var p=u;p<=a[1];p+=l)g(p);function g(t){s.push(n?t:{formattedLabel:i(t),rawLabel:r.getLabel(t),tickValue:t})}return d&&p-l!==a[1]&&g(a[1]),s}function fp(t,e,n){var i=t.scale,r=Jd(t),a=[];return M(i.getTicks(),function(t){var o=i.getLabel(t);e(t,o)&&a.push(n?t:{formattedLabel:r(t),rawLabel:o,tickValue:t})}),a}function dp(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1}var pp=[0,1];function gp(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function vp(t,e,n,i,r){dp.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"}dp.prototype={constructor:dp,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return n<=t&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return function(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20);return isFinite(o)?o:20}(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&gp(n=n.slice(),i.count()),As(t,pp,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&gp(n=n.slice(),i.count());var r=As(t,n,pp,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=D(op(this,e).ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this);return function(t,e,n,i){var r=e.length;if(t.onBand&&!n&&r){var a,o,s=t.getExtent();if(1===r)e[0].coord=s[0],a=e[1]={coord:s[0]};else{var l=e[r-1].tickValue-e[0].tickValue,u=(e[r-1].coord-e[0].coord)/l;M(e,function(t){t.coord-=u/2});var c=t.scale.getExtent();o=1+c[1]-e[r-1].tickValue,a={coord:e[r-1].coord+u*o},e.push(a)}var h=s[0]>s[1];f(e[0].coord,s[0])&&(i?e[0].coord=s[0]:e.shift()),i&&f(s[0],e[0].coord)&&e.unshift({coord:s[0]}),f(s[1],a.coord)&&(i?a.coord=s[1]:e.pop()),i&&f(a.coord,s[1])&&e.push({coord:s[1]})}function f(t,e){return t=Is(t),e=Is(e),h?e<t:t<e}}(this,n,e.get("alignWithLabel"),t.clamp),n},getViewLabels:function(){return ap(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return function(t){var e=function(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),n=Jd(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,a=r.getExtent(),o=r.count();if(a[1]-a[0]<1)return 0;var s=1;40<o&&(s=Math.max(1,Math.floor(o/40)));for(var l=a[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=a[1];l+=s){var p,g,v=En(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),b=rp(t.model),x=t.getExtent(),w=b.lastAutoInterval,S=b.lastTickCount;return null!=w&&null!=S&&Math.abs(w-_)<=1&&Math.abs(S-o)<=1&&_<w&&b.axisExtend0===x[0]&&b.axisExtend1===x[1]?_=w:(b.lastTickCount=o,b.lastAutoInterval=_,b.axisExtend0=x[0],b.axisExtend1=x[1]),_}(this)}},vp.prototype={constructor:vp,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},w(vp,dp);var mp={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},yp={};function _p(t,e,n,i){M(bp,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var a=this.layoutMode,o=a?Qs(e):{};m(e,i.getTheme().get(r+"Axis")),m(e,this.getDefaultOption()),e.type=n(t,e),a&&Js(e,o,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=cd.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:function(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=m(n,t[i],e);return n}([{},yp[r+"Axis"],i],!0)})}),rl.registerSubTypeDefaulter(t+"Axis",T(n,t))}yp.categoryAxis=m({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},mp),yp.valueAxis=m({boundaryGap:[0,0],splitNumber:5},mp),yp.timeAxis=_({scale:!0,min:"dataMin",max:"dataMax"},yp.valueAxis),yp.logAxis=_({scale:!0,logBase:10},yp.valueAxis);var bp=["value","category","time","log"],xp={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!z(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!z(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:K,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},wp=rl.extend({type:"cartesian2dAxis",axis:null,init:function(){wp.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){wp.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){wp.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});function Sp(t,e){return e.type||(e.data?"category":"value")}m(wp.prototype,xp);var kp={offset:0};function Mp(t,e){return t.getCoordSysModel()===e}function Dp(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}_p("x",wp,Sp,kp),_p("y",wp,Sp,kp),rl.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var Ap=Dp.prototype;function Cp(t,e,n,i){n.getAxesOnZeroOf=function(){return r?[r]:[]};var r,a=t[e],o=n.model,s=o.get("axisLine.onZero"),l=o.get("axisLine.onZeroAxisIndex");if(s){if(null!=l)Ip(a[l])&&(r=a[l]);else for(var u in a)if(a.hasOwnProperty(u)&&Ip(a[u])&&!i[c(a[u])]){r=a[u];break}r&&(i[c(r)]=!0)}function c(t){return t.dim+"_"+t.index}}function Ip(t){return t&&"category"!==t.type&&"time"!==t.type&&function(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(0<n&&0<i||n<0&&i<0)}(t)}Ap.type="grid",Ap.axisPointerEnabled=!0,Ap.getRect=function(){return this._rect},Ap.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),M(n.x,function(t){Kd(t.scale,t.model)}),M(n.y,function(t){Kd(t.scale,t.model)});var i={};M(n.x,function(t){Cp(n,"y",t,i)}),M(n.y,function(t){Cp(n,"x",t,i)}),this.resize(this.model,e)},Ap.resize=function(t,e,n){var i=function(t,e,n){n=zs(n||0);var i=e.width,r=e.height,a=Cs(t.left,i),o=Cs(t.top,r),s=Cs(t.right,i),l=Cs(t.bottom,r),u=Cs(t.width,i),c=Cs(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-a),isNaN(c)&&(c=r-l-h-o),null!=d&&(isNaN(u)&&isNaN(c)&&(i/r<d?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(a)&&(a=i-s-u-f),isNaN(o)&&(o=r-l-c-h),t.left||t.right){case"center":a=i/2-u/2-n[3];break;case"right":a=i-u-f}switch(t.top||t.bottom){case"middle":case"center":o=r/2-c/2-n[0];break;case"bottom":o=r-c-h}a=a||0,o=o||0,isNaN(u)&&(u=i-f-a-(s||0)),isNaN(c)&&(c=r-h-o-(l||0));var p=new Ge(a+n[3],o+n[0],u,c);return p.margin=n,p}(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=i;var r=this._axesList;function a(){M(r,function(t){var e=t.isHorizontal(),n=e?[0,i.width]:[0,i.height],r=t.inverse?1:0;t.setExtent(n[r],n[1-r]),function(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}(t,e?i.x:i.y)})}a(),!n&&t.get("containLabel")&&(M(r,function(t){if(!t.model.get("axisLabel.inside")){var e=function(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent();r=a?n.count():(i=n.getTicks()).length;var s,l,u,c,h,f,d,p,g,v=t.getLabelModel(),m=Jd(t),y=1;40<r&&(y=Math.ceil(r/40));for(var _=0;_<r;_+=y){var b=m(i?i[_]:o[0]+_),x=v.getTextRect(b),w=(l=x,u=v.get("rotate")||0,c=u*Math.PI/180,h=l.plain(),f=h.width,d=h.height,p=f*Math.cos(c)+d*Math.sin(c),g=f*Math.sin(c)+d*Math.cos(c),new Ge(h.x,h.y,p,g));s?s.union(w):s=w}return s}}(t);if(e){var n=t.isHorizontal()?"height":"width",r=t.model.get("axisLabel.margin");i[n]-=e[n]+r,"top"===t.position?i.y+=e.height+r:"left"===t.position&&(i.x+=e.width+r)}}}),a())},Ap.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},Ap.getAxes=function(){return this._axesList.slice()},Ap.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}L(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},Ap.getCartesians=function(){return this._coordsList.slice()},Ap.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},Ap.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},Ap._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],o=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?x(l,n=r.coordinateSystem)<0&&(n=null):a&&o?n=this.getCartesian(a.componentIndex,o.componentIndex):a?i=this.getAxis("x",a.componentIndex):o?i=this.getAxis("y",o.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},Ap.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},Ap._initCartesian=function(t,e,n){var i={left:!1,right:!1,top:!1,bottom:!1},r={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",o("x"),this),e.eachComponent("yAxis",o("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);function o(e){return function(n,o){if(Mp(n,t)){var s=n.get("position");"x"===e?"top"!==s&&"bottom"!==s&&(s=i.bottom?"top":"bottom"):"left"!==s&&"right"!==s&&(s=i.left?"right":"left"),i[s]=!0;var l=new vp(e,function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new gd(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new xd;default:return(ud.getClass(e)||xd).create(t)}}(n),[0,0],n.get("type"),s),u="category"===l.type;l.onBand=u&&n.get("boundaryGap"),l.inverse=n.get("inverse"),(n.axis=l).model=n,l.grid=this,l.index=o,this._axesList.push(l),r[e][o]=l,a[e]++}}}M((this._axesMap=r).x,function(e,n){M(r.y,function(i,r){var a="x"+n+"y"+r,o=new ip(a);o.grid=this,o.model=t,this._coordsMap[a]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(i)},this)},this)},Ap._updateScale=function(t,e){function n(t,e){M(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,function(t,e){return df(t,e)?t.getCalculationInfo("stackResultDimension"):e}(t,n))})}M(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(Pp(i)){var r=Op(i,t),a=r[0],o=r[1];if(!Mp(a,e)||!Mp(o,e))return;var s=this.getCartesian(a.componentIndex,o.componentIndex),l=i.getData(),u=s.getAxis("x"),c=s.getAxis("y");"list"===l.type&&(n(l,u,i),n(l,c,i))}},this)},Ap.getTooltipAxes=function(t){var e=[],n=[];return M(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r);x(e,r)<0&&e.push(r),x(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}};var Tp=["xAxis","yAxis"];function Op(t){return D(Tp,function(e){return t.getReferringComponents(e)[0]})}function Pp(t){return"cartesian2d"===t.get("coordinateSystem")}function Ep(t,e){this.opt=e,this.axisModel=t,_(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new qe;var n=new qe({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n}Dp.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var a=new Dp(i,t,e);a.name="grid_"+r,a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(t){if(Pp(t)){var e=Op(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Dp.dimensions=Dp.prototype.dimensions=ip.prototype.dimensions,Ll.register("cartesian2d",Dp);var Lp=Math.PI;Ep.prototype={constructor:Ep,hasBuilder:function(t){return!!Bp[t]},add:function(t){Bp[t].call(this)},getGroup:function(){return this.group}};var Bp={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],a=[n[1],0];i&&(lt(r,r,i),lt(a,a,i));var o=y({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new oo({anid:"line",subPixelOptimize:!0,shape:{x1:r[0],y1:r[1],x2:a[0],y2:a[1]},style:o,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1}));var s=e.get("axisLine.symbol"),l=e.get("axisLine.symbolSize"),u=e.get("axisLine.symbolOffset")||0;if("number"==typeof u&&(u=[u,u]),null!=s){"string"==typeof s&&(s=[s,s]),"string"!=typeof l&&"number"!=typeof l||(l=[l,l]);var c=l[0],h=l[1];M([{rotate:t.rotation+Math.PI/2,offset:u[0],r:0},{rotate:t.rotation-Math.PI/2,offset:u[1],r:Math.sqrt((r[0]-a[0])*(r[0]-a[0])+(r[1]-a[1])*(r[1]-a[1]))}],function(e,n){if("none"!==s[n]&&null!=s[n]){var i=Sf(s[n],-c/2,-h/2,c,h,o.stroke,!0),a=e.r+e.offset,l=[r[0]+a*Math.cos(t.rotation),r[1]-a*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:l,silent:!0,z2:11}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=function(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),a=r.getModel("lineStyle"),o=r.get("length"),s=i.getTicksCoords(),l=[],u=[],c=t._transform,h=[],f=0;f<s.length;f++){var d=s[f].coord;l[0]=d,l[1]=0,u[0]=d,u[1]=n.tickDirection*o,c&&(lt(l,l,c),lt(u,u,c));var p=new oo({anid:"tick_"+s[f].tickValue,subPixelOptimize:!0,shape:{x1:l[0],y1:l[1],x2:u[0],y2:u[1]},style:_(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0});t.group.add(p),h.push(p)}return h}}(this,t,e);!function(t,e,n){if(!tp(t.axis)){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");n=n||[];var a=(e=e||[])[0],o=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?($p(a),$p(u)):Fp(a,o)&&(i?($p(o),$p(c)):($p(a),$p(u))),!1===r?($p(s),$p(h)):Fp(l,s)&&(r?($p(l),$p(f)):($p(s),$p(h)))}}(t,function(t,e,n){var i=e.axis;if($(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),a=r.get("margin"),o=i.getViewLabels(),s=($(n.labelRotate,r.get("rotate"))||0)*Lp/180,l=Rp(n.rotation,s,n.labelDirection),u=e.getCategories&&e.getCategories(!0),c=[],h=zp(e),f=e.get("triggerEvent");return M(o,function(o,s){var d=o.tickValue,p=o.formattedLabel,g=o.rawLabel,v=r;u&&u[d]&&u[d].textStyle&&(v=new xs(u[d].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(d),n.labelOffset+n.labelDirection*a],_=new Va({anid:"label_"+d,position:y,rotation:l.rotation,silent:h,z2:10});ts(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?d+"":d,s):m}),f&&(_.eventData=Np(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),c.push(_),t.group.add(_),_.decomposeTransform()}),c}}(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=$(t.axisName,e.get("name"));if(n){var i,r,a=e.get("nameLocation"),o=t.nameDirection,s=e.getModel("nameTextStyle"),l=e.get("nameGap")||0,u=this.axisModel.axis.getExtent(),c=u[0]>u[1]?-1:1,h=["start"===a?u[0]-c*l:"end"===a?u[1]+c*l:(u[0]+u[1])/2,Hp(a)?t.labelOffset+o*l:0],f=e.get("nameRotate");null!=f&&(f=f*Lp/180),Hp(a)?i=Rp(t.rotation,null!=f?f:t.rotation,o):(i=function(t,e,n,i){var r,a,o=Os(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return r=Ps(o-Lp/2)?(a=l?"bottom":"top","center"):Ps(o-1.5*Lp)?(a=l?"top":"bottom","center"):(a="middle",o<1.5*Lp&&Lp/2<o?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,textVerticalAlign:a}}(t,a,f||0,u),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),isFinite(r)||(r=null)));var d=s.getFont(),p=e.get("nameTruncate",!0)||{},g=p.ellipsis,v=$(t.nameTruncateMaxWidth,p.maxWidth,r),m=null!=g&&null!=v?qs(n,v,d,g,{minChar:2,placeholder:p.placeholder}):n,_=e.get("tooltip",!0),b=e.mainType,x={componentType:b,name:n,$vars:["name"]};x[b+"Index"]=e.componentIndex;var w=new Va({anid:"name",__fullText:n,__truncatedText:m,position:h,rotation:i.rotation,silent:zp(e),z2:1,tooltip:_&&_.show?y({content:n,formatter:function(){return n},formatterParams:x},_):null});ts(w.style,s,{text:m,textFont:d,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:s.get("align")||i.textAlign,textVerticalAlign:s.get("verticalAlign")||i.textVerticalAlign}),e.get("triggerEvent")&&(w.eventData=Np(e),w.eventData.targetType="axisName",w.eventData.name=n),this._dumbGroup.add(w),w.updateTransform(),this.group.add(w),w.decomposeTransform()}}},Np=Ep.makeAxisEventDataBase=function(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e},Rp=Ep.innerTextLayout=function(t,e,n){var i,r=Os(e-t);return{rotation:r,textAlign:Ps(r)?(i=0<n?"top":"bottom","center"):Ps(r-Lp)?(i=0<n?"bottom":"top","center"):(i="middle",0<r&&r<Lp?0<n?"right":"left":0<n?"left":"right"),textVerticalAlign:i}},zp=Ep.isLabelSilent=function(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)};function $p(t){t&&(t.ignore=!0)}function Fp(t,e){var n=t&&t.getBoundingRect().clone(),i=e&&e.getBoundingRect().clone();if(n&&i){var r=Rt([]);return Ft(r,r,-t.rotation),n.applyTransform(zt([],r,t.getLocalTransform())),i.applyTransform(zt([],r,e.getLocalTransform())),n.intersect(i)}}function Hp(t){return"middle"===t||"center"===t}function jp(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[function(t){return t.type+"||"+t.id}(t)]}var Vp=Ph({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&function(t){var e=jp(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,a=n.get("status"),o=n.get("value");null!=o&&(o=i.parse(o));var s=function(t){return!!t.get("handle.show")}(n);null==a&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==o||o>l[1])&&(o=l[1]),o<l[0]&&(o=l[0]),r.value=o,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}(t),Vp.superApply(this,"render",arguments),Wp(this,t,e,n,i,!0)},updateAxisPointer:function(t,e,n,i,r){Wp(this,t,e,n,i,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),Vp.superApply(this,"remove",arguments)},dispose:function(t,e){Up(this,e),Vp.superApply(this,"dispose",arguments)}});function Wp(t,e,n,i,r,a){var o=Vp.getAxisPointerClass(t.axisPointerClass);if(o){var s=function(t){var e=jp(t);return e&&e.axisPointerModel}(e);s?(t._axisPointer||(t._axisPointer=new o)).render(e,s,i,a):Up(t,i)}}function Up(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}var Gp=[];Vp.registerAxisPointerClass=function(t,e){Gp[t]=e},Vp.getAxisPointerClass=function(t){return t&&Gp[t]};var qp,Xp,Yp,Zp=["axisLine","axisTickLabel","axisName"],Kp=["splitArea","splitLine"],Jp=Vp.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new qe,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),o=function(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,a={},o=r.getAxesOnZeroOf()[0],s=r.position,l=o?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(o){var g=o.toGlobalCoord(o.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}a.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],a.rotation=Math.PI/2*("x"===u?0:1),a.labelDirection=a.tickDirection=a.nameDirection={top:-1,bottom:1,left:-1,right:1}[s],a.labelOffset=o?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),$(n.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var v=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-v:v,a.z2=1,a}(a,t),s=new Ep(t,o);M(Zp,s.add,s),this._axisGroup.add(s.getGroup()),M(Kp,function(e){t.get(e+".show")&&this["_"+e](t,a)},this),hs(r,this._axisGroup,t),Jp.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),a=r.get("color");a=O(a)?a:[a];for(var o=e.coordinateSystem.getRect(),s=n.isHorizontal(),l=0,u=n.getTicksCoords({tickModel:i}),c=[],h=[],f=r.getLineStyle(),d=0;d<u.length;d++){var p=n.toGlobalCoord(u[d].coord);s?(c[0]=p,c[1]=o.y,h[0]=p,h[1]=o.y+o.height):(c[0]=o.x,c[1]=p,h[0]=o.x+o.width,h[1]=p);var g=l++%a.length,v=u[d].tickValue;this._axisGroup.add(new oo({anid:null!=v?"line_"+u[d].tickValue:null,subPixelOptimize:!0,shape:{x1:c[0],y1:c[1],x2:h[0],y2:h[1]},style:_({stroke:a[g]},f),silent:!0}))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),a=r.get("color"),o=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var l=a.length,u=this._splitAreaColors,c=Z(),h=0;if(u)for(var f=0;f<s.length;f++){var d=u.get(s[f].tickValue);if(null!=d){h=(d+(l-1)*f)%l;break}}var p=n.toGlobalCoord(s[0].coord),g=r.getAreaStyle();for(a=O(a)?a:[a],f=1;f<s.length;f++){var v,m,y,b,x=n.toGlobalCoord(s[f].coord);p=n.isHorizontal()?(v=p,m=o.y,y=x-v,b=o.height,v+y):(v=o.x,m=p,y=o.width,m+(b=x-m));var w=s[f-1].tickValue;null!=w&&c.set(w,h),this._axisGroup.add(new ro({anid:null!=w?"area_"+w:null,shape:{x:v,y:m,width:y,height:b},style:_({fill:a[h]},g),silent:!0})),h=(h+1)%l}this._splitAreaColors=c}}}});function Qp(t,e){"outside"===t.textPosition&&(t.textPosition=e)}Jp.extend({type:"xAxis"}),Jp.extend({type:"yAxis"}),Ph({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new ro({shape:t.coordinateSystem.getRect(),style:_({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Mh(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),Ih((Xp="circle",Yp=qp="line",{seriesType:qp,performRawSeries:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("symbol"),a=t.get("symbolSize"),o=t.get("symbolKeepAspect"),s=P(r),l=P(a),u=s||l,c=!s&&r?r:Xp,h=l?null:a;if(i.setVisual({legendSymbol:Yp||c,symbol:c,symbolSize:h,symbolKeepAspect:o}),!e.isSeriesFiltered(t))return{dataEach:i.hasItemOption||u?function(e,n){if(u){var i=t.getRawValue(n),o=t.getDataParams(n);s&&e.setItemVisual(n,"symbol",r(i,o)),l&&e.setItemVisual(n,"symbolSize",a(i,o))}if(e.hasItemOption){var c=e.getItemModel(n),h=c.getShallow("symbol",!0),f=c.getShallow("symbolSize",!0),d=c.getShallow("symbolKeepAspect",!0);null!=h&&e.setItemVisual(n,"symbol",h),null!=f&&e.setItemVisual(n,"symbolSize",f),null!=d&&e.setItemVisual(n,"symbolKeepAspect",d)}}:null}}})),Ch({seriesType:"line",plan:Vu(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=D(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),a=r.length,o=e.getCalculationInfo("stackResultDimension");return df(e,r[0])&&(r[0]=o),df(e,r[1])&&(r[1]=o),a&&{progress:function(t,e){for(var o=t.end-t.start,s=i&&new Float32Array(o*a),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===a){var d=e.get(r[0],l);f=!isNaN(d)&&n.dataToPoint(d,null,h)}else{d=c[0]=e.get(r[0],l);var p=c[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(c,null,h)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}),Dh(zc.PROCESSOR.STATISTIC,{seriesType:"line",modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),a=t.coordinateSystem;if("cartesian2d"===a.type&&r){var o,s=a.getBaseAxis(),l=a.getOtherAxis(s),u=s.getExtent(),c=u[1]-u[0],h=Math.round(i.count()/c);1<h&&("string"==typeof r?o=ld[r]:"function"==typeof r&&(o=r),o&&t.setData(i.downSample(i.mapDimension(l.dim),1/h,o,sd)))}}}),Eu.extend({type:"series.__base_bar__",getInitialData:function(t,e){return pf(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),a=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+a/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return t<e&&(t=e),t},defaultOption:{clip:!0,roundCap:!1}});var tg=ur([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),eg={getBarItemStyle:function(t){var e=tg(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},ng=Ao({type:"sausage",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=.5*(a-r),s=r+o,l=e.startAngle,u=e.endAngle,c=e.clockwise,h=Math.cos(l),f=Math.sin(l),d=Math.cos(u),p=Math.sin(u);(c?u-l<2*Math.PI:l-u<2*Math.PI)&&(t.moveTo(h*r+n,f*r+i),t.arc(h*s+n,f*s+i,o,-Math.PI+l,l,!c)),t.arc(n,i,a,l,u,!c),t.moveTo(d*a+n,p*a+i),t.arc(d*s+n,p*s+i,o,u-2*Math.PI,u-Math.PI,!c),0!==r&&(t.arc(n,i,r,u,l,c),t.moveTo(h*r+n,p*r+i)),t.closePath()}}),ig=["itemStyle","barBorderWidth"],rg=[0,0];y(xs.prototype,eg),Lh({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,a=t.getData(),o=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null,c=t.get("clip",!0),h=function(t,e){var n=t.getArea&&t.getArea();if("cartesian2d"===t.type){var i=t.getBaseAxis();if("category"!==i.type||!i.onBand){var r=e.getLayout("bandWidth");i.isHorizontal()?(n.x-=r,n.width+=2*r):(n.y-=r,n.height+=2*r)}}return n}(s,a);r.removeClipPath();var f=t.get("roundCap",!0);a.diff(o).add(function(e){if(a.hasValue(e)){var n=a.getItemModel(e),o=hg[s.type](a,e,n);if(c&&sg[s.type](h,o))return void r.remove(l);var l=lg[s.type](e,o,i,u,!1,f);a.setItemGraphicEl(e,l),r.add(l),fg(l,a,e,n,o,t,i,"polar"===s.type)}}).update(function(e,n){var l=o.getItemGraphicEl(n);if(a.hasValue(e)){var d=a.getItemModel(e),p=hg[s.type](a,e,d);if(c&&sg[s.type](h,p))return void r.remove(l);l?ls(l,{shape:p},u,e):l=lg[s.type](e,p,i,u,!0,f),a.setItemGraphicEl(e,l),r.add(l),fg(l,a,e,d,p,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=o.getItemGraphicEl(t);"cartesian2d"===s.type?e&&ug(t,u,e):e&&cg(t,u,e)}).execute(),this._data=a},_renderLarge:function(t,e,n){this._clear(),pg(t,this.group);var i=t.get("clip",!0)?function(t,e,n){return t?"polar"===t.type?ed(t,e,n):"cartesian2d"===t.type?td(t,e,n):null:null}(t.coordinateSystem,!1,t):null;i?this.group.setClipPath(i):this.group.removeClipPath()},_incrementalRenderLarge:function(t,e){pg(e,this.group,!0)},dispose:K,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?cg(e.dataIndex,t,e):ug(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var ag=Math.max,og=Math.min,sg={cartesian2d:function(t,e){var n=e.width<0?-1:1,i=e.height<0?-1:1;n<0&&(e.x+=e.width,e.width=-e.width),i<0&&(e.y+=e.height,e.height=-e.height);var r=ag(e.x,t.x),a=og(e.x+e.width,t.x+t.width),o=ag(e.y,t.y),s=og(e.y+e.height,t.y+t.height);e.x=r,e.y=o,e.width=a-r,e.height=s-o;var l=e.width<0||e.height<0;return n<0&&(e.x+=e.width,e.width=-e.width),i<0&&(e.y+=e.height,e.height=-e.height),l},polar:function(t){return!1}},lg={cartesian2d:function(t,e,n,i,r){var a=new ro({shape:y({},e)});if(i){var o=n?"height":"width",s={};a.shape[o]=0,s[o]=e[o],ps[r?"updateProps":"initProps"](a,{shape:s},i,t)}return a},polar:function(t,e,n,i,r,a){var o=e.startAngle<e.endAngle,s=new(!n&&a?ng:qa)({shape:_({clockwise:o},e)});if(i){var l=n?"r":"endAngle",u={};s.shape[l]=n?0:e.startAngle,u[l]=e[l],ps[r?"updateProps":"initProps"](s,{shape:u},i,t)}return s}};function ug(t,e,n){n.style.text=null,ls(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function cg(t,e,n){n.style.text=null,ls(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}var hg={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=function(t,e){var n=t.get(ig)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}(n,i),a=0<i.width?1:-1,o=0<i.height?1:-1;return{x:i.x+a*r/2,y:i.y+o*r/2,width:i.width-a*r,height:i.height-o*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}};function fg(t,e,n,i,r,a,o,s){var l=e.getItemVisual(n,"color"),u=e.getItemVisual(n,"opacity"),c=i.getModel("itemStyle"),h=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(_({fill:l,opacity:u},c.getBarItemStyle()));var f=i.getShallow("cursor");f&&t.attr("cursor",f),o?r.height:r.width,s||function(t,e,n,i,r,a){Qo(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:a,defaultText:kf(r.getData(),a),isRectText:!0,autoColor:i}),Qp(t),Qp(e)}(t.style,h,i,l,a,n),Yo(t,h)}var dg=Ma.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__baseDimIdx,a=0;a<n.length;a+=2)i[r]=n[a+r],t.moveTo(i[0],i[1]),t.lineTo(n[a],n[a+1])}});function pg(t,e,n){var i=t.getData(),r=[],a=i.getLayout("valueAxisHorizontal")?1:0;r[1-a]=i.getLayout("valueAxisStart");var o=new dg({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__baseDimIdx:a,__largeDataIndices:i.getLayout("largeDataIndices"),__barWidth:i.getLayout("barWidth")});e.add(o),function(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}(o,t,i),o.seriesIndex=t.seriesIndex,t.get("silent")||(o.on("mousedown",gg),o.on("mousemove",gg))}var gg=Qu(function(t){var e=function(t,e,n){var i=t.__baseDimIdx,r=1-i,a=t.shape.points,o=t.__largeDataIndices,s=Math.abs(t.__barWidth/2),l=t.__startPoint[r];rg[0]=e,rg[1]=n;for(var u=rg[i],c=rg[1-i],h=u-s,f=u+s,d=0,p=a.length/2;d<p;d++){var g=2*d,v=a[g+i],m=a[g+r];if(h<=v&&v<=f&&(l<=m?l<=c&&c<=m:m<=c&&c<=l))return o[d]}return-1}(this,t.offsetX,t.offsetY);this.dataIndex=0<=e?e:null},30,!1);Ch(zc.VISUAL.LAYOUT,T(function(t,e){var n=Dd(t,e),i=Ad(n),r={};M(n,function(t){var e=t.getData(),n=t.coordinateSystem,a=n.getBaseAxis(),o=kd(t),s=i[Md(a)][o],l=s.offset,u=s.width,c=n.getOtherAxis(a),h=t.get("barMinHeight")||0;r[o]=r[o]||[],e.setLayout({bandWidth:s.bandWidth,offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(a.dim),p=df(e,f),g=c.isHorizontal(),v=Pd(a,c,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),b=e.get(d,m);if(!isNaN(_)&&!isNaN(b)){var x,w,S,k,M,D=0<=_?"p":"n",A=v;p&&(r[o][b]||(r[o][b]={p:v,n:v}),A=r[o][b][D]),g?(x=A,w=(M=n.dataToPoint([_,b]))[1]+l,S=M[0]-v,k=u,Math.abs(S)<h&&(S=(S<0?-1:1)*h),p&&(r[o][b][D]+=S)):(x=(M=n.dataToPoint([b,_]))[0]+l,w=A,S=u,k=M[1]-v,Math.abs(k)<h&&(k=(k<=0?-1:1)*h),p&&(r[o][b][D]+=k)),e.setItemLayout(m,{x:x,y:w,width:S,height:k})}}},this)},"bar")),Ch(zc.VISUAL.PROGRESSIVE_LAYOUT,Id),Ih({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var vg={updateSelectedMap:function(t){this._targetList=O(t)?t.slice():[],this._selectTargetMap=A(t||[],function(t,e){return t.set(e.name,e),t},Z())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},mg=Eh({type:"series.pie",init:function(t){mg.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){mg.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return function(t,e,n){e=O(e)&&{coordDimensions:e}||y({},e);var i=t.getSource(),r=ff(i,e),a=new Zh(r,t);return a.initData(i,n),a}(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:vu(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=mg.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=function(t,e,n){if(!t[e])return 0;var i=A(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),a=D(t,function(t){return(isNaN(t)?0:t)/i*r*100}),o=100*r,s=D(a,function(t){return Math.floor(t)}),l=A(s,function(t,e){return t+e},0),u=D(a,function(t,e){return t-s[e]});l<o;){for(var c=Number.NEGATIVE_INFINITY,h=null,f=0,d=u.length;f<d;++f)u[f]>c&&(c=u[f],h=f);++s[h],u[h]=0,++l}return s[e]/r}(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){ji(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationTypeUpdate:"transition",animationEasing:"cubicOut"}});function yg(t,e,n,i){var r=e.getData(),a=this.dataIndex,o=r.getName(a),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:o,seriesId:e.id}),r.each(function(t){_g(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function _g(t,e,n,i,r){var a=(e.startAngle+e.endAngle)/2,o=n?i:0,s=[Math.cos(a)*o,Math.sin(a)*o];r?t.animate().when(200,{position:s}).start("bounceOut"):t.attr("position",s)}function bg(t,e){qe.call(this);var n=new qa({z2:2}),i=new Ja,r=new Va;this.add(n),this.add(i),this.add(r),this.updateData(t,e,!0)}S(mg,vg);var xg=bg.prototype;xg.updateData=function(t,e,n){var i=this.childAt(0),r=this.childAt(1),a=this.childAt(2),o=t.hostModel,s=t.getItemModel(e),l=t.getItemLayout(e),u=y({},l);u.label=null;var c=o.getShallow("animationTypeUpdate");n?(i.setShape(u),"scale"===o.getShallow("animationType")?(i.shape.r=l.r0,us(i,{shape:{r:l.r}},o,e)):(i.shape.endAngle=l.startAngle,ls(i,{shape:{endAngle:l.endAngle}},o,e))):"expansion"===c?i.setShape(u):ls(i,{shape:u},o,e);var h=t.getItemVisual(e,"color");i.useStyle(_({lineJoin:"bevel",fill:h},s.getModel("itemStyle").getItemStyle())),i.hoverStyle=s.getModel("emphasis.itemStyle").getItemStyle();var f=s.getShallow("cursor");f&&i.attr("cursor",f),_g(this,t.getItemLayout(e),o.isSelected(null,e),o.get("selectedOffset"),o.get("animation"));var d=!n&&"transition"===c;this._updateLabel(t,e,d),this.highDownOnUpdate=s.get("hoverAnimation")&&o.isAnimationEnabled()?function(t,e){"emphasis"===e?(r.ignore=r.hoverIgnore,a.ignore=a.hoverIgnore,i.stopAnimation(!0),i.animateTo({shape:{r:l.r+o.get("hoverOffset")}},300,"elasticOut")):(r.ignore=r.normalIgnore,a.ignore=a.normalIgnore,i.stopAnimation(!0),i.animateTo({shape:{r:l.r}},300,"elasticOut"))}:null,Yo(this)},xg._updateLabel=function(t,e,n){var i=this.childAt(1),r=this.childAt(2),a=t.hostModel,o=t.getItemModel(e),s=t.getItemLayout(e).label,l=t.getItemVisual(e,"color");if(!s||isNaN(s.x)||isNaN(s.y))r.ignore=r.normalIgnore=r.hoverIgnore=i.ignore=i.normalIgnore=i.hoverIgnore=!0;else{var u={points:s.linePoints||[[s.x,s.y],[s.x,s.y],[s.x,s.y]]},c={x:s.x,y:s.y};n?(ls(i,{shape:u},a,e),ls(r,{style:c},a,e)):(i.attr({shape:u}),r.attr({style:c})),r.attr({rotation:s.rotation,origin:[s.x,s.y],z2:10});var h=o.getModel("label"),f=o.getModel("emphasis.label"),d=o.getModel("labelLine"),p=o.getModel("emphasis.labelLine");l=t.getItemVisual(e,"color"),Qo(r.style,r.hoverStyle={},h,f,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:l,useInsideStyle:!!s.inside},{textAlign:s.textAlign,textVerticalAlign:s.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),r.ignore=r.normalIgnore=!h.get("show"),r.hoverIgnore=!f.get("show"),i.ignore=i.normalIgnore=!d.get("show"),i.hoverIgnore=!p.get("show"),i.setStyle({stroke:l,opacity:t.getItemVisual(e,"opacity")}),i.setStyle(d.getModel("lineStyle").getLineStyle()),i.hoverStyle=p.getModel("lineStyle").getLineStyle();var g=d.get("smooth");g&&!0===g&&(g=.4),i.setShape({smooth:g})}},w(bg,qe),Gu.extend({type:"pie",init:function(){var t=new qe;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),a=this._data,o=this.group,s=e.get("animation"),l=!a,u=t.get("animationType"),c=t.get("animationTypeUpdate"),h=T(yg,this.uid,t,s,n),f=t.get("selectedMode");if(r.diff(a).add(function(t){var e=new bg(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),f&&e.on("click",h),r.setItemGraphicEl(t,e),o.add(e)}).update(function(t,e){var n=a.getItemGraphicEl(e);l||"transition"===c||n.eachChild(function(t){t.stopAnimation(!0)}),n.updateData(r,t),n.off("click"),f&&n.on("click",h),o.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=a.getItemGraphicEl(t);o.remove(e)}).execute(),s&&0<r.count()&&(l?"scale"!==u:"transition"!==c)){for(var d=r.getItemLayout(0),p=1;isNaN(d.startAngle)&&p<r.count();++p)d=r.getItemLayout(p);var g=Math.max(n.getWidth(),n.getHeight())/2,v=I(o.removeClipPath,o);o.setClipPath(this._createClipPath(d.cx,d.cy,g,d.startAngle,d.clockwise,v,t,l))}else o.removeClipPath();this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,a,o,s){var l=new qa({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return(s?us:ls)(l,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},o,a),l},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,a=Math.sqrt(i*i+r*r);return a<=n.r&&a>=n.r0}}});var wg=Math.PI/180;function Sg(t,e,n,i,r,a,o){function s(e,n,i){for(var r=e;r<n;r++)if(t[r].y+=i,e<r&&r+1<n&&t[r+1].y>t[r].y+t[r].height)return void l(r,i/2);l(n-1,i/2)}function l(e,n){for(var i=e;0<=i&&(t[i].y-=n,!(0<i&&t[i].y>t[i-1].y+t[i-1].height));i--);}function u(t,e,n,i,r,a){for(var o=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=u<r+c?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&o<=f&&(f=o-10),!e&&f<=o&&(f=o+10),t[s].x=n+f*a,o=f}}t.sort(function(t,e){return t.y-e.y});for(var c,h=0,f=t.length,d=[],p=[],g=0;g<f;g++)(c=t[g].y-h)<0&&s(g,f,-c),h=t[g].y+t[g].height;for(o-h<0&&l(f-1,h-o),g=0;g<f;g++)t[g].y>=n?p.push(t[g]):d.push(t[g]);u(d,!1,e,n,i,r),u(p,!0,e,n,i,r)}function kg(t){return"center"===t.position}function Mg(t,e,n,i,r){var a,o,s=t.getData(),l=[],u=!1,c=(t.get("minShowLabelAngle")||0)*wg;s.each(function(n){var i=s.getItemLayout(n),r=s.getItemModel(n),h=r.getModel("label"),f=h.get("position")||r.get("emphasis.label.position"),d=r.getModel("labelLine"),p=d.get("length"),g=d.get("length2");if(!(i.angle<c)){var v,m,y,_,b=(i.startAngle+i.endAngle)/2,x=Math.cos(b),w=Math.sin(b);a=i.cx,o=i.cy;var S="inside"===f||"inner"===f;if("center"===f)v=i.cx,m=i.cy,_="center";else{var k=(S?(i.r+i.r0)/2*x:i.r*x)+a,M=(S?(i.r+i.r0)/2*w:i.r*w)+o;if(v=k+3*x,m=M+3*w,!S){var D=k+x*(p+e-i.r),A=M+w*(p+e-i.r),C=D+(x<0?-1:1)*g;v=C+(x<0?-5:5),y=[[k,M],[D,A],[C,m=A]]}_=S?"center":0<x?"left":"right"}var I,T=h.getFont(),O=h.get("rotate");I="number"==typeof O?O*(Math.PI/180):O?x<0?-b+Math.PI:-b:0;var P=En(t.getFormattedLabel(n,"normal")||s.getName(n),T,_,"top");u=!!I,i.label={x:v,y:m,position:f,height:P.height,len:p,len2:g,linePoints:y,textAlign:_,verticalAlign:"middle",rotation:I,inside:S},S||l.push(i.label)}}),!u&&t.get("avoidLabelOverlap")&&function(t,e,n,i,r,a){for(var o=[],s=[],l=0;l<t.length;l++)kg(t[l])||(t[l].x<e?o.push(t[l]):s.push(t[l]));for(Sg(s,e,n,i,1,0,a),Sg(o,e,n,i,-1,0,a),l=0;l<t.length;l++)if(!kg(t[l])){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}(l,a,o,e,0,i)}var Dg,Ag,Cg=2*Math.PI,Ig=Math.PI/180;Dg="pie",M([{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}],function(t){t.update="updateView",Ah(t,function(e,n){var i={};return n.eachComponent({mainType:"series",subType:Dg,query:e},function(n){n[t.method]&&n[t.method](e.name,e.dataIndex);var r=n.getData();r.each(function(t){var e=r.getName(t);i[e]=n.isSelected(e)||!1})}),{name:e.name,selected:i,seriesId:e.seriesId}})}),Ih((Ag="pie",{getTargetSeries:function(t){var e={},n=Z();return t.eachSeriesByType(Ag,function(t){t.__paletteScope=e,n.set(t.uid,t)}),n},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var a,o=i[e],s=null!=o&&r.getItemVisual(o,"color",!0),l=null!=o&&r.getItemVisual(o,"borderColor",!0);if(s&&l||(a=n.getItemModel(e)),s)n.setItemVisual(e,"color",s);else{var u=a.get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",u),null!=o&&r.setItemVisual(o,"color",u)}if(l)n.setItemVisual(e,"borderColor",l);else{var c=a.get("itemStyle.borderColor");n.setItemVisual(e,"borderColor",c),null!=o&&r.setItemVisual(o,"borderColor",c)}})}})),Ch(T(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),a=t.get("radius");O(a)||(a=[0,a]),O(r)||(r=[r,r]);var o=n.getWidth(),s=n.getHeight(),l=Math.min(o,s),u=Cs(r[0],o),c=Cs(r[1],s),h=Cs(a[0],l/2),f=Cs(a[1],l/2),d=-t.get("startAngle")*Ig,p=t.get("minAngle")*Ig,g=0;e.each(i,function(t){isNaN(t)||g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),b=t.get("stillShowZeroSum"),x=e.getDataExtent(i);x[0]=0;var w=Cg,S=0,k=d,M=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:c,r0:h,r:_?NaN:f});else{(i="area"!==_?0===v&&b?m:t*m:Cg/g)<p?w-=i=p:S+=t;var r=k+M*i;e.setItemLayout(n,{angle:i,startAngle:k,endAngle:r,clockwise:y,cx:u,cy:c,r0:h,r:_?As(t,x,[h,f]):f}),k=r}}),w<Cg&&g)if(w<=.001){var D=Cg/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=D,i.startAngle=d+M*n*D,i.endAngle=d+M*(n+1)*D}})}else m=w/S,k=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=k,i.endAngle=k+M*r,k+=M*r}});Mg(t,f,0,s)})},"pie")),Dh({seriesType:"pie",reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}),e.version="4.5.0",e.dependencies={zrender:"4.1.2"},e.PRIORITY=zc,e.init=function(t,e,n){var i=Sh(t);if(i)return i;var r=new Wc(t,e,n);return r.id="ec_"+yh++,vh[r.id]=r,Qi(t,bh,r.id),function(t){var e="__connectUpdateStatus";function n(t,n){for(var i=0;i<t.length;i++)t[i][e]=n}Lc(uh,function(i,r){t._messageCenter.on(r,function(i){if(mh[t.group]&&0!==t[e]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),a=[];Lc(vh,function(e){e!==t&&e.group===t.group&&a.push(e)}),n(a,0),Lc(a,function(t){1!==t[e]&&t.dispatchAction(r)}),n(a,2)}})})}(r),r},e.connect=function(t){if(O(t)){var e=t;t=null,Lc(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+_h++,Lc(e,function(e){e.group=t})}return mh[t]=!0,t},e.disConnect=xh,e.disconnect=wh,e.dispose=function(t){"string"==typeof t?t=vh[t]:t instanceof Wc||(t=Sh(t)),t instanceof Wc&&!t.isDisposed()&&t.dispose()},e.getInstanceByDom=Sh,e.getInstanceById=function(t){return vh[t]},e.registerTheme=kh,e.registerPreprocessor=Mh,e.registerProcessor=Dh,e.registerPostUpdate=function(t){fh.push(t)},e.registerAction=Ah,e.registerCoordinateSystem=function(t,e){Ll.register(t,e)},e.getCoordinateSystemDimensions=function(t){var e=Ll.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},e.registerLayout=Ch,e.registerVisual=Ih,e.registerLoading=Oh,e.extendComponentModel=function(t){return rl.extend(t)},e.extendComponentView=Ph,e.extendSeriesModel=Eh,e.extendChartView=Lh,e.setCanvasCreator=function(t){!function(t,e){"createCanvas"===t&&(n=null),g[t]=e}("createCanvas",t)},e.registerMap=function(t,e,n){Tc(t,e,n)},e.getMap=function(t){var e=Oc(t);return e&&e[0]&&{geoJson:e[0].geoJSON,specialAreas:e[0].specialAreas}},e.dataTool={}})}).call(this,n("0de9")["default"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function c(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||c(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function x(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var w=/-(\w)/g,S=x(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),k=x(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),M=/\B([A-Z])/g,D=x(function(t){return t.replace(M,"-$1").toLowerCase()});function A(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var I=Function.prototype.bind?C:A;function T(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function O(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function E(t,e,n){}var L=function(t,e,n){return!1},B=function(t){return t};function N(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),a=Array.isArray(e);if(r&&a)return t.length===e.length&&t.every(function(t,n){return N(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return N(t[n],e[n])})}catch(u){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function z(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var $=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:E,parsePlatformTagName:B,mustUseProp:L,async:!0,_lifecycleHooks:F},j=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var U=new RegExp("[^"+j.source+".$_\\d]");function G(t){if(!U.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var q,X="__proto__"in{},Y="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Z&&WXEnvironment.platform.toLowerCase(),J=Y&&window.navigator.userAgent.toLowerCase(),Q=J&&/msie|trident/.test(J),tt=(J&&J.indexOf("msie 9.0"),J&&J.indexOf("edge/")>0),et=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===K),nt=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/),{}.watch);if(Y)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===q&&(q=!Y&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),q},at=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=E,ct=0,ht=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ct++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function dt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){y(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var pt=function(t,e,n,i,r,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function mt(t){return new pt(void 0,void 0,void 0,String(t))}function yt(t){var e=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,bt=Object.create(_t),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach(function(t){var e=_t[t];W(bt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a})});var wt=Object.getOwnPropertyNames(bt),St=!0;function kt(t){St=t}var Mt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?At(t,bt,wt):Dt(t,bt):At(t,bt,wt),this.observeArray(t)):this.walk(t)};function Dt(t,e){t.__proto__=e}function At(t,e,n){for(var i=0,r=n.length;i<r;i++){var a=n[i];W(t,a,e[a])}}function Ct(t,e){var n;if(l(t)&&!(t instanceof pt))return b(t,"__ob__")&&t.__ob__ instanceof Mt?n=t.__ob__:St&&!rt()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Mt(t)),e&&n&&n.vmCount++,n}function It(t,e,n,i,r){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var u=!r&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(a.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,u=!r&&Ct(e),a.notify())}})}}function Tt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(It(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}Mt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)It(t,e[n])},Mt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e])};var Et=H.optionMergeStrategies;function Lt(t,e){if(!e)return t;for(var n,i,r,a=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(i=t[n],r=e[n],b(t,n)?i!==r&&c(i)&&c(r)&&Lt(i,r):Tt(t,n,r));return t}function Bt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Lt(i,r):r}:e?t?function(){return Lt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Nt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function zt(t,e,n,i){var r=Object.create(t||null);return e?O(r,e):r}Et.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},F.forEach(function(t){Et[t]=Nt}),$.forEach(function(t){Et[t+"s"]=zt}),Et.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var a in O(r,t),e){var o=r[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},Et.props=Et.methods=Et.inject=Et.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return O(r,t),e&&O(r,e),r},Et.provide=Bt;var $t=function(t,e){return void 0===e?t:e};function Ft(t,e){var n=t.props;if(n){var i,r,a,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(a=S(r),o[a]={type:null})}else if(c(n))for(var s in n)r=n[s],a=S(s),o[a]=c(r)?r:{type:r};else 0;t.props=o}}function Ht(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(c(n))for(var a in n){var o=n[a];i[a]=c(o)?O({from:a},o):{from:o}}else 0}}function jt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Vt(t,e,n){if("function"===typeof e&&(e=e.options),Ft(e,n),Ht(e,n),jt(e),!e._base&&(e.extends&&(t=Vt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Vt(t,e.mixins[i],n);var a,o={};for(a in t)s(a);for(a in e)b(t,a)||s(a);function s(i){var r=Et[i]||$t;o[i]=r(t[i],e[i],n,i)}return o}function Wt(t,e,n,i){if("string"===typeof n){var r=t[e];if(b(r,n))return r[n];var a=S(n);if(b(r,a))return r[a];var o=k(a);if(b(r,o))return r[o];var s=r[n]||r[a]||r[o];return s}}function Ut(t,e,n,i){var r=e[t],a=!b(n,t),o=n[t],s=Yt(Boolean,r.type);if(s>-1)if(a&&!b(r,"default"))o=!1;else if(""===o||o===D(t)){var l=Yt(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Gt(i,r,t);var u=St;kt(!0),Ct(o),kt(u)}return o}function Gt(t,e,n){if(b(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==qt(e.type)?i.call(t):i}}function qt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return qt(t)===qt(e)}function Yt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Xt(e[n],t))return n;return-1}function Zt(t,e,n){ft();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(i,t,e,n);if(o)return}catch(nr){Jt(nr,i,"errorCaptured hook")}}}Jt(t,e,n)}finally{dt()}}function Kt(t,e,n,i,r){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&d(a)&&!a._handled&&(a.catch(function(t){return Zt(t,i,r+" (Promise/async)")}),a._handled=!0)}catch(nr){Zt(nr,i,r)}return a}function Jt(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&Qt(nr,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!Y&&!Z||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(E)}}else if(Q||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var ae=1,oe=new MutationObserver(ie),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(nr){Zt(nr,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function ce(t){he(t,ue),ue.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof pt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var fe=x(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function de(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Kt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),a=0;a<r.length;a++)Kt(r[a],null,t,e,"v-on handler")}return n.fns=t,n}function pe(t,e,n,r,o,s){var l,u,c,h;for(l in t)u=t[l],c=e[l],h=fe(l),i(u)||(i(c)?(i(u.fns)&&(u=t[l]=de(u,s)),a(h.once)&&(u=t[l]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==c&&(c.fns=u,t[l]=c));for(l in e)i(t[l])&&(h=fe(l),r(h.name,e[l],h.capture))}function ge(t,e,n,a){var o=e.options.mpOptions&&e.options.mpOptions.properties;if(i(o))return n;var s=e.options.mpOptions.externalClasses||[],l=t.attrs,u=t.props;if(r(l)||r(u))for(var c in o){var h=D(c),f=me(n,u,c,h,!0)||me(n,l,c,h,!1);f&&n[c]&&-1!==s.indexOf(h)&&a[S(n[c])]&&(n[c]=a[S(n[c])])}return n}function ve(t,e,n,a){var o=e.options.props;if(i(o))return ge(t,e,{},a);var s={},l=t.attrs,u=t.props;if(r(l)||r(u))for(var c in o){var h=D(c);me(s,u,c,h,!0)||me(s,l,c,h,!1)}return ge(t,e,s,a)}function me(t,e,n,i,a){if(r(e)){if(b(e,n))return t[n]=e[n],a||delete e[n],!0;if(b(e,i))return t[n]=e[i],a||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[mt(t)]:Array.isArray(t)?xe(t):void 0}function be(t){return r(t)&&r(t.text)&&o(t.isComment)}function xe(t,e){var n,o,l,u,c=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(l=c.length-1,u=c[l],Array.isArray(o)?o.length>0&&(o=xe(o,(e||"")+"_"+n),be(o[0])&&be(u)&&(c[l]=mt(u.text+o[0].text),o.shift()),c.push.apply(c,o)):s(o)?be(u)?c[l]=mt(u.text+o):""!==o&&c.push(mt(o)):be(o)&&be(u)?c[l]=mt(u.text+o.text):(a(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),c.push(o)));return c}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=ke(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){It(t,n,e[n])}),kt(!0))}function ke(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var a=i[r];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&b(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var l=t[a].default;n[a]="function"===typeof l?l.call(e):l}else 0}}return n}}function Me(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var a=t[i],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var u in n)n[u].every(De)&&delete n[u];return n}function De(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ae(t,e,i){var r,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&s===i.$key&&!a&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=Ce(e,l,t[l]))}else r={};for(var u in e)u in r||(r[u]=Ie(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),W(r,"$stable",o),W(r,"$key",s),W(r,"$hasNormal",a),r}function Ce(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ie(t,e){return function(){return t[e]}}function Te(t,e){var n,i,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,a=t.length;i<a;i++)n[i]=e(t[i],i,i,i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i,i,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),c=u.next();while(!c.done)n.push(e(c.value,n.length,i++,i)),c=u.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,a=o.length;i<a;i++)s=o[i],n[i]=e(t[s],s,i,i);return r(n)||(n=[]),n._isVList=!0,n}function Oe(t,e,n,i){var r,a=this.$scopedSlots[t];a?(n=n||{},i&&(n=O(O({},i),n)),r=a(n,this,n._i)||e):r=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Pe(t){return Wt(this.$options,"filters",t,!0)||B}function Ee(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Le(t,e,n,i,r){var a=H.keyCodes[e]||n;return r&&i&&!H.keyCodes[e]?Ee(r,i):a?Ee(a,t):i?D(i)!==e:void 0}function Be(t,e,n,i,r){if(n)if(l(n)){var a;Array.isArray(n)&&(n=P(n));var o=function(o){if("class"===o||"style"===o||m(o))a=t;else{var s=t.attrs&&t.attrs.type;a=i||H.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(o),u=D(o);if(!(l in a)&&!(u in a)&&(a[o]=n[o],r)){var c=t.on||(t.on={});c["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ze(i,"__static__"+t,!1),i)}function Re(t,e,n){return ze(t,"__once__"+e+(n?"_"+n:""),!0),t}function ze(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&$e(t[i],e+"_"+i,n);else $e(t,e,n)}function $e(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Fe(t,e){if(e)if(c(e)){var n=t.on=t.on?O({},t.on):{};for(var i in e){var r=n[i],a=e[i];n[i]=r?[].concat(r,a):a}}else;return t}function He(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var a=t[r];Array.isArray(a)?He(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return i&&(e.$key=i),e}function je(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=Re,t._n=g,t._s=p,t._l=Te,t._t=Oe,t._q=N,t._i=R,t._m=Ne,t._f=Pe,t._k=Le,t._b=Be,t._v=mt,t._e=vt,t._u=He,t._g=Fe,t._d=je,t._p=Ve}function Ue(t,e,i,r,o){var s,l=this,u=o.options;b(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var c=a(u._compiled),h=!c;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=ke(u.inject,r),this.slots=function(){return l.$slots||Ae(t.scopedSlots,l.$slots=Me(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(t.scopedSlots,this.slots())}}),c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Ae(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var a=an(s,t,e,n,i,h);return a&&!Array.isArray(a)&&(a.fnScopeId=u._scopeId,a.fnContext=r),a}:this._c=function(t,e,n,i){return an(s,t,e,n,i,h)}}function Ge(t,e,i,a,o){var s=t.options,l={},u=s.props;if(r(u))for(var c in u)l[c]=Ut(c,u,e||n);else r(i.attrs)&&Xe(l,i.attrs),r(i.props)&&Xe(l,i.props);var h=new Ue(i,l,o,a,t),f=s.render.call(null,h._c,h);if(f instanceof pt)return qe(f,i,h.parent,s,h);if(Array.isArray(f)){for(var d=_e(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=qe(d[g],i,h.parent,s,h);return p}}function qe(t,e,n,i,r){var a=yt(t);return a.fnContext=n,a.fnOptions=i,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Xe(t,e){for(var n in e)t[S(n)]=e[n]}We(Ue.prototype);var Ye={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ye.prepatch(n,n)}else{var i=t.componentInstance=Je(t,kn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Cn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(Pn(n,"onServiceCreated"),Pn(n,"onServiceAttached"),n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Tn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?On(e,!0):e.$destroy())}},Ze=Object.keys(Ye);function Ke(t,e,n,o,s){if(!i(t)){var u=n.$options._base;if(l(t)&&(t=u.extend(t)),"function"===typeof t){var c;if(i(t.cid)&&(c=t,t=gn(c,u),void 0===t))return pn(c,e,n,o,s);e=e||{},di(t),r(e.model)&&en(t.options,e);var h=ve(e,t,s,n);if(a(t.options.functional))return Ge(t,h,e,n,o);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Qe(e);var p=t.options.name||s,g=new pt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:o},c);return g}}}function Je(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ze.length;n++){var i=Ze[n],r=e[i],a=Ye[i];r===a||r&&r._merged||(e[i]=r?tn(a,r):a)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[i],s=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[i]=[s].concat(o)):a[i]=s}var nn=1,rn=2;function an(t,e,n,i,r,o){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),a(o)&&(r=rn),on(t,e,n,i,r)}function on(t,e,n,i,a){if(r(n)&&r(n.__ob__))return vt();if(r(n)&&r(n.is)&&(e=n.is),!e)return vt();var o,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),a===rn?i=_e(i):a===nn&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),o=H.isReservedTag(e)?new pt(H.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Wt(t.$options,"components",e))?new pt(e,n,i,void 0,void 0,t):Ke(l,n,t,i,e)):o=Ke(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(s)&&sn(o,s),r(n)&&ln(n),o):vt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];r(l.tag)&&(i(l.ns)||a(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&ce(t.style),l(t.class)&&ce(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Me(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return an(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return an(t,e,n,i,r,!0)};var a=i&&i.data;It(t,"$attrs",a&&a.attrs||n,null,!0),It(t,"$listeners",e._parentListeners||n,null,!0)}var cn,hn=null;function fn(t){We(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Ae(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{hn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Zt(nr,e,"render"),t=e._vnode}finally{hn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof pt||(t=vt()),t.parent=r,t}}function dn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pn(t,e,n,i,r){var a=vt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:i,tag:r},a}function gn(t,e){if(a(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=hn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],s=!0,u=null,c=null;n.$on("hook:destroyed",function(){return y(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},f=z(function(n){t.resolved=dn(n,e),s?o.length=0:h(!0)}),p=z(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,p);return l(g)&&(d(g)?i(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),r(g.error)&&(t.errorComp=dn(g.error,e)),r(g.loading)&&(t.loadingComp=dn(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout(function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(c=setTimeout(function(){c=null,i(t.resolved)&&p(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function mn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function _n(t,e){cn.$on(t,e)}function bn(t,e){cn.$off(t,e)}function xn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function wn(t,e,n){cn=t,pe(e,n||{},_n,bn,xn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var i=T(arguments,1),r='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Kt(n[a],e,i,e,r)}return e}}var kn=null;function Mn(t){var e=kn;return kn=t,function(){kn=e}}function Dn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,a=Mn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),a(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Cn(t,e,i,r,a){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),u=!!(a||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=a,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){kt(!1);for(var c=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;c[d]=Ut(d,p,e,t)}kt(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,wn(t,i,g),u&&(t.$slots=Me(a,r.context),t.$forceUpdate())}function In(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Tn(t,e){if(e){if(t._directInactive=!1,In(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Tn(t.$children[n]);Pn(t,"activated")}}function On(t,e){if((!e||(t._directInactive=!0,!In(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){ft();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,a=n.length;r<a;r++)Kt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var En=[],Ln=[],Bn={},Nn=!1,Rn=!1,zn=0;function $n(){zn=En.length=Ln.length=0,Bn={},Nn=Rn=!1}var Fn=Date.now;if(Y&&!Q){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&Fn()>document.createEvent("Event").timeStamp&&(Fn=function(){return Hn.now()})}function jn(){var t,e;for(Fn(),Rn=!0,En.sort(function(t,e){return t.id-e.id}),zn=0;zn<En.length;zn++)t=En[zn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=Ln.slice(),i=En.slice();$n(),Un(n),Vn(i),at&&H.devtools&&at.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Pn(i,"updated")}}function Wn(t){t._inactive=!1,Ln.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Tn(t[e],!0)}function Gn(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Rn){var n=En.length-1;while(n>zn&&En[n].id>t.id)n--;En.splice(n+1,0,t)}else En.push(t);Nn||(Nn=!0,le(jn))}}var qn=0,Xn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Zt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ce(t),dt(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Zt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Yn={enumerable:!0,configurable:!0,get:E,set:E};function Zn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function Kn(t){t._watchers=[];var e=t.$options;e.props&&Jn(t,e.props),e.methods&&oi(t,e.methods),e.data?Qn(t):Ct(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Jn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],a=!t.$parent;a||kt(!1);var o=function(a){r.push(a);var o=Ut(a,e,n,t);It(i,a,o),a in t||Zn(t,"_props",a)};for(var s in e)o(s);kt(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},c(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var a=n[r];0,i&&b(i,a)||V(a)||Zn(t,"_data",a)}Ct(e,!0)}function ti(t,e){ft();try{return t.call(e,e)}catch(nr){return Zt(nr,e,"data()"),{}}finally{dt()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var a=e[r],o="function"===typeof a?a:a.get;0,i||(n[r]=new Xn(t,o||E,E,ei)),r in t||ii(t,r,a)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Yn.get=i?ri(e):ai(n),Yn.set=E):(Yn.get=n.get?i&&!1!==n.cache?ri(e):ai(n.get):E,Yn.set=n.set||E),Object.defineProperty(t,e,Yn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ai(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?E:I(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return c(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ui(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Tt,t.prototype.$delete=Ot,t.prototype.$watch=function(t,e,n){var i=this;if(c(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new Xn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(a){Zt(a,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function hi(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?fi(e,t):e.$options=Vt(di(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Dn(e),yn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Kn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function di(t){var e=t.options;if(t.super){var n=di(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=pi(t);r&&O(t.extendOptions,r),e=t.options=Vt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function gi(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function mi(t){t.mixin=function(t){return this.options=Vt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Vt(n.options,t),o["super"]=n,o.options.props&&_i(o),o.options.computed&&bi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,$.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=O({},o.options),r[i]=o,o}}function _i(t){var e=t.options.props;for(var n in e)Zn(t.prototype,"_props",n)}function bi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function xi(t){$.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wi(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function ki(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var a in n){var o=n[a];if(o){var s=wi(o.componentOptions);s&&!e(s)&&Mi(n,a,i,r)}}}function Mi(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}hi(gi),ui(gi),Sn(gi),An(gi),fn(gi);var Di=[String,RegExp,Array],Ai={name:"keep-alive",abstract:!0,props:{include:Di,exclude:Di,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Mi(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){ki(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){ki(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=mn(t),n=e&&e.componentOptions;if(n){var i=wi(n),r=this,a=r.include,o=r.exclude;if(a&&(!i||!Si(a,i))||o&&i&&Si(o,i))return e;var s=this,l=s.cache,u=s.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[c]?(e.componentInstance=l[c].componentInstance,y(u,c),u.push(c)):(l[c]=e,u.push(c),this.max&&u.length>parseInt(this.max)&&Mi(l,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Ci={KeepAlive:Ai};function Ii(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:O,mergeOptions:Vt,defineReactive:It},t.set=Tt,t.delete=Ot,t.nextTick=le,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),$.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,Ci),vi(t),mi(t),yi(t),xi(t)}Ii(gi),Object.defineProperty(gi.prototype,"$isServer",{get:rt}),Object.defineProperty(gi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(gi,"FunctionalRenderContext",{value:Ue}),gi.version="2.6.11";var Ti="[object Array]",Oi="[object Object]";function Pi(t,e){var n={};return Ei(t,e),Li(t,e,"",n),n}function Ei(t,e){if(t!==e){var n=Ni(t),i=Ni(e);if(n==Oi&&i==Oi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var a=t[r];void 0===a?t[r]=null:Ei(a,e[r])}}else n==Ti&&i==Ti&&t.length>=e.length&&e.forEach(function(e,n){Ei(t[n],e)})}}function Li(t,e,n,i){if(t!==e){var r=Ni(t),a=Ni(e);if(r==Oi)if(a!=Oi||Object.keys(t).length<Object.keys(e).length)Bi(i,n,t);else{var o=function(r){var a=t[r],o=e[r],s=Ni(a),l=Ni(o);if(s!=Ti&&s!=Oi)a!=e[r]&&Bi(i,(""==n?"":n+".")+r,a);else if(s==Ti)l!=Ti?Bi(i,(""==n?"":n+".")+r,a):a.length<o.length?Bi(i,(""==n?"":n+".")+r,a):a.forEach(function(t,e){Li(t,o[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Oi)if(l!=Oi||Object.keys(a).length<Object.keys(o).length)Bi(i,(""==n?"":n+".")+r,a);else for(var u in a)Li(a[u],o[u],(""==n?"":n+".")+r+"."+u,i)};for(var s in t)o(s)}else r==Ti?a!=Ti?Bi(i,n,t):t.length<e.length?Bi(i,n,t):t.forEach(function(t,r){Li(t,e[r],n+"["+r+"]",i)}):Bi(i,n,t)}}function Bi(t,e,n){t[e]=n}function Ni(t){return Object.prototype.toString.call(t)}function Ri(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function zi(t){return En.find(function(e){return t._watcher===e})}function $i(t,e){if(!t.__next_tick_pending&&!zi(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Zt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Fi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Hi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Fi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var a=Object.create(null);Object.keys(r).forEach(function(t){a[t]=i.data[t]});var o=!1===this.$shouldDiffData?r:Pi(r,a);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,i.setData(o,function(){n.__next_tick_pending=!1,Ri(n)})):Ri(this)}};function ji(){}function Vi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=ji),t.$options.render||(t.$options.render=ji),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Xn(t,i,E,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Wi(t,e){return r(t)||r(e)?Ui(t,Gi(e)):""}function Ui(t,e){return t?e?t+" "+e:t:e||""}function Gi(t){return Array.isArray(t)?qi(t):l(t)?Xi(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,a=t.length;i<a;i++)r(e=Gi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Yi=x(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Zi(t){return Array.isArray(t)?P(t):"string"===typeof t?Yi(t):t}var Ki=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ji(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ji(t[i],n.slice(1).join("."))}function Qi(t){t.config.errorHandler=function(t){console.error(t);var e=getApp();e&&e.onError&&e.onError(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:T(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return $i(this,t)},Ki.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;ft();var i,r=n.$options[t],a=t+" hook";if(r)for(var o=0,s=r.length;o<s;o++)i=Kt(r[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t,e),dt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return c(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ji(e||this,t)},t.prototype.__get_class=function(t,e){return Wi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Zi(t),i=e?O(e,n):n;return Object.keys(i).map(function(t){return D(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,a,o;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(a=Object.keys(t),n=Object.create(null),i=0,r=a.length;i<r;i++)o=a[i],n[o]=e(t[o],o,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}gi.prototype.__patch__=Hi,gi.prototype.$mount=function(t,e){return Vi(this,t,e)},er(gi),Qi(gi),e["default"]=gi}.call(this,n("c8ba"))},"68b3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("34ff"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.date,i=e.selected,r=e.startDate,o=e.endDate,s=e.range;a(this,t),this.date=this.getDate(n),this.selected=i||[],this.startDate=r,this.endDate=o,this.range=s,this.multipleStatus={before:"",after:"",data:[]},this.weeks={},this._getWeek(this.date.fullDate)}return s(t,[{key:"getDate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day";t||(t=new Date),"object"!==typeof t&&(t=t.replace(/-/g,"/"));var i=new Date(t);switch(n){case"day":i.setDate(i.getDate()+e);break;case"month":31===i.getDate()?i.setDate(i.getDate()+e):i.setMonth(i.getMonth()+e);break;case"year":i.setFullYear(i.getFullYear()+e);break}var r=i.getFullYear(),a=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,o=i.getDate()<10?"0"+i.getDate():i.getDate();return{fullDate:r+"-"+a+"-"+o,year:r,month:a,date:o,day:i.getDay()}}},{key:"_getLastMonthDays",value:function(t,e){for(var n=[],i=t;i>0;i--){var r=new Date(e.year,e.month-1,1-i).getDate();n.push({date:r,month:e.month-1,lunar:this.getlunar(e.year,e.month-1,r),disable:!0})}return n}},{key:"_currentMonthDys",value:function(t,e){for(var n=this,i=[],r=this.date.fullDate,a=function(t){var a=e.year+"-"+(e.month,e.month)+"-"+(t<10?"0"+t:t),o=r===a,s=n.selected&&n.selected.find(function(t){if(n.dateEqual(a,t.date))return t}),l=!0,u=!0;if(n.startDate){var c=n.dateCompare(n.startDate,r);l=n.dateCompare(c?n.startDate:r,a)}if(n.endDate){var h=n.dateCompare(r,n.endDate);u=n.dateCompare(a,h?n.endDate:r)}var f=n.multipleStatus.data,d=!1,p=-1;n.range&&(f&&(p=f.findIndex(function(t){return n.dateEqual(t,a)})),-1!==p&&(d=!0));var g={fullDate:a,year:e.year,date:t,multiple:!!n.range&&d,month:e.month,lunar:n.getlunar(e.year,e.month,t),disable:!l||!u,isDay:o};s&&(g.extraInfo=s),i.push(g)},o=1;o<=t;o++)a(o);return i}},{key:"_getNextMonthDays",value:function(t,e){for(var n=[],i=1;i<t+1;i++)n.push({date:i,month:Number(e.month)+1,lunar:this.getlunar(e.year,Number(e.month)+1,i),disable:!0});return n}},{key:"setDate",value:function(t){this._getWeek(t)}},{key:"getInfo",value:function(t){var e=this;t||(t=new Date);var n=this.canlender.find(function(n){return n.fullDate===e.getDate(t).fullDate});return n}},{key:"dateCompare",value:function(t,e){return t=new Date(t.replace("-","/").replace("-","/")),e=new Date(e.replace("-","/").replace("-","/")),t<=e}},{key:"dateEqual",value:function(t,e){return t=new Date(t.replace("-","/").replace("-","/")),e=new Date(e.replace("-","/").replace("-","/")),t.getTime()-e.getTime()===0}},{key:"geDateAll",value:function(t,e){var n=[],i=t.split("-"),r=e.split("-"),a=new Date;a.setFullYear(i[0],i[1]-1,i[2]);var o=new Date;o.setFullYear(r[0],r[1]-1,r[2]);for(var s=a.getTime()-864e5,l=o.getTime()-864e5,u=s;u<=l;)u+=864e5,n.push(this.getDate(new Date(parseInt(u))).fullDate);return n}},{key:"getlunar",value:function(t,e,n){return i.default.solar2lunar(t,e,n)}},{key:"setSelectInfo",value:function(t,e){this.selected=e,this._getWeek(t)}},{key:"setMultiple",value:function(t){var e=this.multipleStatus,n=e.before,i=e.after;this.range&&(n&&i?(this.multipleStatus.before="",this.multipleStatus.after="",this.multipleStatus.data=[],this._getWeek(t)):n?(this.multipleStatus.after=t,this.dateCompare(this.multipleStatus.before,this.multipleStatus.after)?this.multipleStatus.data=this.geDateAll(this.multipleStatus.before,this.multipleStatus.after):this.multipleStatus.data=this.geDateAll(this.multipleStatus.after,this.multipleStatus.before),this._getWeek(t)):this.multipleStatus.before=t)}},{key:"_getWeek",value:function(t){var e=this.getDate(t),n=(e.fullDate,e.year),i=e.month,r=(e.date,e.day,new Date(n,i-1,1).getDay()),a=new Date(n,i,0).getDate(),o={lastMonthDays:this._getLastMonthDays(r,this.getDate(t)),currentMonthDys:this._currentMonthDys(a,this.getDate(t)),nextMonthDays:[],weeks:[]},s=[],l=42-(o.lastMonthDays.length+o.currentMonthDys.length);o.nextMonthDays=this._getNextMonthDays(l,this.getDate(t)),s=s.concat(o.lastMonthDays,o.currentMonthDys,o.nextMonthDays);for(var u={},c=0;c<s.length;c++)c%7===0&&(u[parseInt(c/7)]=new Array(7)),u[parseInt(c/7)][c%7]=s[c];this.canlender=s,this.weeks=u}}]),t}(),u=l;e.default=u},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=ge,e.createComponent=Me,e.createPage=ke,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function o(t,e){return u(t)||l(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){r=!0,a=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){return p(t)||d(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var g=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function m(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===g.call(t)}function b(t,e){return v.call(t,e)}function x(){}function w(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,k=w(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),M=["invoke","success","fail","complete","returnValue"],D={},A={};function C(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?I(n):n}function I(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function T(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function O(t,e){Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&m(e[n])&&(t[n]=C(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&m(e[n])&&T(t[n],e[n])})}function E(t,e){"string"===typeof t&&_(e)?O(A[t]||(A[t]={}),e):_(t)&&O(D,t)}function L(t,e){"string"===typeof t?_(e)?P(A[t],e):delete A[t]:_(t)&&P(D,t)}function B(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(B(r));else{var a=r(e);if(N(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){R(t[n],e).then(function(t){return m(i)&&i(t)||t})}}}),e}function $(t,e){var n=[];Array.isArray(D.returnValue)&&n.push.apply(n,h(D.returnValue));var i=A[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,h(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function F(t){var e=Object.create(null);Object.keys(D).forEach(function(t){"returnValue"!==t&&(e[t]=D[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function H(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),a=3;a<i;a++)r[a-3]=arguments[a];var o=F(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=R(o.invoke,n);return s.then(function(t){return e.apply(void 0,[z(o,t)].concat(r))})}return e.apply(void 0,[z(o,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var j={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},V=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,U=/^on/;function G(t){return W.test(t)}function q(t){return V.test(t)}function X(t){return U.test(t)&&"onPush"!==t}function Y(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function Z(t){return!(G(t)||q(t)||X(t))}function K(t,e){return Z(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return m(n.success)||m(n.fail)||m(n.complete)?$(t,H.apply(void 0,[t,e,n].concat(r))):$(t,Y(new Promise(function(i,a){H.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:a})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var J=1e-4,Q=750,tt=!1,et=0,nt=0;function it(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;et=i,nt=n,tt="ios"===e}function rt(t,e){if(0===et&&it(),t=Number(t),0===t)return 0;var n=t/Q*(e||et);return n<0&&(n=-n),n=Math.floor(n+J),0===n?1!==nt&&tt?.5:1:t<0?-n:n}var at={promiseInterceptor:j},ot=Object.freeze({__proto__:null,upx2px:rt,interceptors:at,addInterceptor:E,removeInterceptor:L}),st={},lt=[],ut=[],ct=["success","fail","cancel","complete"];function ht(t,e,n){return function(i){return e(dt(t,i,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var a=!0===r?e:{};for(var o in m(n)&&(n=n(e,a)||{}),e)if(b(n,o)){var s=n[o];m(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:_(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?a[o]=ht(t,e[o],i):r||(a[o]=e[o]);return a}return m(e)&&(e=ht(t,e,i)),e}function dt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return m(st.returnValue)&&(e=st.returnValue(t,e)),ft(t,e,n,{},i)}function pt(t,e){if(b(st,t)){var n=st[t];return n?function(e,i){var r=n;m(n)&&(r=n(e)),e=ft(t,e,r.args,r.returnValue);var a=[e];"undefined"!==typeof i&&a.push(i);var o=wx[r.name||t].apply(wx,a);return q(t)?dt(t,o,r.returnValue,G(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var gt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function mt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};m(n)&&n(r),m(i)&&i(r)}}vt.forEach(function(t){gt[t]=mt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function bt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function xt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function St(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var kt=Object.freeze({__proto__:null,$on:bt,$off:xt,$once:wt,$emit:St});function Mt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Dt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Mt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,a=t.hide,o=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return a.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return o.apply(t,i)}}}function At(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Dt(e),e}var Ct=Object.freeze({__proto__:null,getSubNVueById:At,requireNativePlugin:Mt}),It=Page,Tt=Component,Ot=/:/g,Pt=w(function(t){return k(t.replace(Ot,"-"))});function Et(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return e.apply(t,[Pt(n)].concat(r))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){Et(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Et(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),It(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),Tt(t)};var Bt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){b(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,m(e))return!!m(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(m(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function zt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function $t(t,e){var n;return e=e.default||e,m(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ft(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ht(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function jt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return _(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||b(n,t)||(n[t]=i[t])}),n}var Vt=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(i)&&i.props&&o.push(e({properties:qt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){_(t)&&t.props&&o.push(e({properties:qt(t.props,!0)}))}),o}function Gt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Wt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(_(i)){var r=i["default"];m(r)&&(r=r()),i.type=Gt(e,i.type),n[e]={type:-1!==Vt.indexOf(i.type)?i.type:null,value:r,observer:Wt(e)}}else{var a=Gt(e,i);n[e]={type:-1!==Vt.indexOf(a)?a:null,observer:Wt(e)}}}),n}function Xt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=x,t.preventDefault=x,t.target=t.target||{},b(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Yt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var a=e[1],o=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===r}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],o&&(n=t.__get_value(o,n))}}),n}function Zt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Yt(t,e)}),i}function Kt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Jt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(r&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Zt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||r?r&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Kt(t)):"string"===typeof t&&b(s,t)?l.push(s[t]):l.push(t)}),l}var Qt="~",te="^";function ee(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ne(t){var e=this;t=Xt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,a=[];return i.forEach(function(n){var i=n[0],o=n[1],s=i.charAt(0)===te;i=s?i.slice(1):i;var l=i.charAt(0)===Qt;i=l?i.slice(1):i,o&&ee(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;if(r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent),"$emit"===i)return void r.$emit.apply(r,Jt(e.$vm,t,n[1],n[2],s,i));var o=r[i];if(!m(o))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(o.once)return;o.once=!0}a.push(o.apply(r,Jt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ie=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Nt(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};a.globalData=t.$options.globalData||{};var o=t.$options.methods;return o&&Object.keys(o).forEach(function(t){a[t]=o[t]}),zt(a,ie),a}var ae=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){for(var n,i=t.$children,r=i.length-1;r>=0;r--){var a=i[r];if(a.$scope._$vueId===e)return a}for(var o=i.length-1;o>=0;o--)if(n=oe(i[o],e),n)return n}function se(t){return Behavior(t)}function le(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function he(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function fe(t){return re(t,{mocks:ae,initRefs:ce})}var de=["onUniNViewMessage"];function pe(t){var e=fe(t);return zt(e,de),e}function ge(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,s=$t(i.default,t),l=o(s,2),u=l[0],c=l[1],h=a({multipleSlots:!0,addGlobalClass:!0},c.options||{}),f={options:h,data:jt(c,i.default.prototype),behaviors:Ut(c,se),properties:qt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ht(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Ft(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:he,__e:ne}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,u]}function me(t){return ve(t,{isPage:le,initRelation:ue})}function ye(t){var e=me(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function be(t,e){e.isPage,e.initRelation;var n=ye(t);return zt(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function xe(t){return be(t,{isPage:le,initRelation:ue})}_e.push.apply(_e,Bt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=xe(t);return zt(e.methods,we),e}function ke(t){return Component(Se(t))}function Me(t){return Component(ye(t))}lt.forEach(function(t){st[t]=!1}),ut.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var De={};Object.keys(ot).forEach(function(t){De[t]=ot[t]}),Object.keys(kt).forEach(function(t){De[t]=kt[t]}),Object.keys(Ct).forEach(function(t){De[t]=K(t,Ct[t])}),Object.keys(wx).forEach(function(t){(b(wx,t)||b(st,t))&&(De[t]=K(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=De,t.UniEmitter=kt),wx.createApp=ge,wx.createPage=ke,wx.createComponent=Me;var Ae=De,Ce=Ae;e.default=Ce}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26420200313001",_inBundle:!1,_integrity:"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz",_shasum:"a006e329e033cd412accfa635f8933dbb822a9c3",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"b1fdbafab5dd4673cff64188a5203d0c947e4f50",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26420200313001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",p=1800,g=300,v=10,m="__DC_STAT_UUID",y="__DC_UUID_VALUE";function _(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(m)}catch(n){e=y}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(m,e)}catch(n){t.setStorageSync(m,y)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var a in n)i[n[a]]=t[n[a]],r+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},x=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},M=function(){return"n"===S()?plus.runtime.version:""},D=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},A=function(e){var n=S(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},C="First__Visit__Time",I="Last__Visit__Time",T=function(){var e=t.getStorageSync(C),n=0;return e?n=e:(n=w(),t.setStorageSync(C,n),t.removeStorageSync(I)),n},O=function(){var e=t.getStorageSync(I),n=0;return n=e||"",t.setStorageSync(I,w()),n},P="__page__residence__time",E=0,L=0,B=function(){return E=w(),"n"===S()&&t.setStorageSync(P,w()),E},N=function(){return L=w(),"n"===S()&&(E=t.getStorageSync(P)),L-E},R="Total__Visit__Count",z=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},$=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},F=0,H=0,j=function(){var t=(new Date).getTime();return F=t,H=0,t},V=function(){var t=(new Date).getTime();return H=t,t},W=function(t){var e=0;if(0!==F&&(e=H-F),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>p;return{residenceTime:e,overtime:i}}return{residenceTime:e}},U=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},G=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,a=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===S()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},q=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},Y=n("cecf").default,Z=n("c6eb").default||n("c6eb"),K=t.getSystemInfoSync(),J=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:S(),mpn:k(),ak:Z.appid,usv:h,v:M(),ch:D(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return c(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=W("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var n=W();j();var i=G(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=G(this),e=U();if(this._navigationBarTitle.config=Y&&Y.pages[e]&&Y.pages[e].titleNView&&Y.pages[e].titleNView.titleText||Y&&Y.pages[e]&&Y.pages[e].navigationBarTitleText||"",this.__licationShow)return j(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var n=W("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}j()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=W("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=A(t.scene),this.statData.fvts=T(),this.statData.lvts=O(),this.statData.tvc=z(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Z.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=w(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===S()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",o),!(N()<v)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),B();var l=[],u=[],c=[],f=function(t){var e=s[t];e.forEach(function(e){var n=x(e);0===t?l.push(n):3===t?c.push(n):u.push(n)})};for(var d in s)f(d);l.push.apply(l,u.concat(c));var p={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){i._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b($(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return l(this,n),e=i(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),c(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),c(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,B(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,q(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,q(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(J),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},"986c":function(t,e,n){},b470:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return a(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=o},c6eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__9894FCF"};e.default=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},cecf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/login/login":{},"pages/spectrum/spectrum":{},"pages/condition/condition":{},"pages/dataIntegrityDetails/dataIntegrityDetails":{},"pages/terminalStatus/terminalStatus":{},"pages/chooseLine/chooseLine":{},"pages/index/index":{},"pages/report/report":{},"pages/information/information":{enablePullDownRefresh:!0},"pages/me/me":{},"pages/levelUp/levelUp":{},"pages/transientDetails/transientDetails":{},"pages/preview/preview":{},"pages/vercode/vercode":{},"pages/forgetPassword/forgetPassword":{},"pages/forgetPasswordVercode/forgetPasswordVercode":{},"pages/setNewPassword/setNewPassword":{},"pages/fastLogin/fastLogin":{},"pages/fastLoginVercode/fastLoginVercode":{},"pages/fastLoginSetPassword/fastLoginSetPassword":{},"pages/data/data":{},"pages/history/history":{},"pages/userAgreement/userAgreement":{navigationStyle:"default",navigationBarTitleText:"用户协议",titleNView:{type:"default",titleText:"用户协议"}},"pages/privacyAgreement/privacyAgreement":{navigationStyle:"default",navigationBarTitleText:"隐私协议",titleNView:{type:"default",titleText:"隐私协议"}},"pages/modifyPassword/modifyPassword":{},"pages/modifyPasswordSetpassword/modifyPasswordSetpassword":{},"pages/modifyUserPhoneNum/modifyUserPhoneNum":{},"pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum":{},"pages/systemIntroduce/systemIntroduce":{navigationStyle:"default",navigationBarTitleText:"系统介绍",titleNView:{type:"default",titleText:"系统介绍"}},"pages/companyIntroduce/companyIntroduce":{navigationStyle:"default",navigationBarTitleText:"公司简介",titleNView:{type:"default",titleText:"公司简介"}},"pages/setting/setting":{},"pages/steady/steady":{},"pages/steadyDetails/steadyDetails":{},"pages/steadyIndex/steadyIndex":{},"pages/terminal/terminal":{},"pages/terminalDetails/terminalDetails":{},"pages/myApply/myApply":{},"pages/setNewMessage/setNewMessage":{},"pages/terminalHistory/terminalHistory":{},"pages/transientWave/transientWave":{},"pages/us/us":{},"pages/terminalStatusAll/terminalStatusAll":{}},globalStyle:{navigationStyle:"custom",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=i},d9f0:function(t,e,n){"use strict";function i(t,e){return"10031"==t?"未注册的手机号":"10022"==t||"10025"==t?"验证码错误":"10019"==t?"推荐码不正确":"10003"==t||"10013"==t||"10021"==t||"10028"==t?"请联系管理员":"10005"==t?"账户被锁定30分钟":"10010"==t||"10111"==t||"10172"==t?"用户不存在":"10016"==t||"10018"==t||"10027"==t?"网络异常，请重试":"10030"==t?"网络异常，请重试":"10112"==t?"未找到该暂态事件信息":"10173"==t?"未找到该终端消息":e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={judgeError:i};e.default=r},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s,l,u){var c,h="function"===typeof t?t.options:t;if(l&&(h.components=Object.assign(l,h.components||{})),u&&((u.beforeCreate||(u.beforeCreate=[])).unshift(function(){this[u.__module]=this}),(h.mixins||(h.mixins=[])).push(u)),e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),a&&(h._scopeId="data-v-"+a),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var f=h.render;h.render=function(t,e){return c.call(e),f(t,e)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:h}}n.d(e,"a",function(){return i})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/back';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/back.js';

define('components/back.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/back"], {
  "082f": function f(t, n, e) {
    "use strict";

    var a,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return a;
    });
  },
  1898: function _(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("082f"),
        u = e("de4c");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("e4db");
    var r,
        f = e("f0c5"),
        o = Object(f["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
    n["default"] = o.exports;
  },
  7211: function _(t, n, e) {},
  de4c: function de4c(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("f1d5"),
        u = e.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(c);
    }

    n["default"] = u.a;
  },
  e4db: function e4db(t, n, e) {
    "use strict";

    var a = e("7211"),
        u = e.n(a);
    u.a;
  },
  f1d5: function f1d5(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "back",
        data: function data() {
          return {};
        },
        methods: {
          backTo: function backTo() {
            t.navigateBack({
              delta: 1
            });
          }
        },
        props: {
          errorMsg: "",
          showFlag: 0,
          pageName: "",
          pageNameFlag: 0,
          backShowFlag: {
            type: Number,
            default: 1
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/back-create-component', {
  'components/back-create-component': function componentsBackCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1898"));
  }
}, [['components/back-create-component']]]);
});
require('components/back.js');
__wxRoute = 'components/keyboard';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/keyboard.js';

define('components/keyboard.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/keyboard"], {
  "2a0a": function a0a(t, e, n) {
    "use strict";

    var u,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return u;
    });
  },
  4931: function _(t, e, n) {
    "use strict";

    var u = n("bcfd"),
        a = n.n(u);
    a.a;
  },
  "82b1": function b1(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("eacc"),
        a = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  "875f": function f(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("2a0a"),
        a = n("82b1");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("4931");
    var r,
        c = n("f0c5"),
        f = Object(c["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
    e["default"] = f.exports;
  },
  bcfd: function bcfd(t, e, n) {},
  eacc: function eacc(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "keyboard",
      data: function data() {
        return {
          valueList: []
        };
      },
      methods: {
        bindKeyEvent: function bindKeyEvent(t) {
          var e = this;

          if ("delete" != t) {
            if (6 == e.valueList.length) return;
            e.valueList.push(t), e.$emit("valueList", e.valueList);
          } else {
            if (0 == e.valueList.length) return;
            e.valueList.pop(), e.$emit("valueList", e.valueList);
          }
        }
      }
    };
    e.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/keyboard-create-component', {
  'components/keyboard-create-component': function componentsKeyboardCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("875f"));
  }
}, [['components/keyboard-create-component']]]);
});
require('components/keyboard.js');
__wxRoute = 'components/loading/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loading/loading.js';

define('components/loading/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/loading/loading"], {
  6873: function _(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      data: function data() {
        return {};
      },
      methods: {}
    };
    t.default = e;
  },
  "8a1f": function a1f(n, t, u) {
    "use strict";

    var e,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "b", function () {
      return r;
    }), u.d(t, "c", function () {
      return a;
    }), u.d(t, "a", function () {
      return e;
    });
  },
  b9d6: function b9d6(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("8a1f"),
        r = u("d87c");

    for (var a in r) {
      "default" !== a && function (n) {
        u.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    var c,
        o = u("f0c5"),
        f = Object(o["a"])(r["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], c);
    t["default"] = f.exports;
  },
  d87c: function d87c(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("6873"),
        r = u.n(e);

    for (var a in e) {
      "default" !== a && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(a);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/loading/loading-create-component', {
  'components/loading/loading-create-component': function componentsLoadingLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b9d6"));
  }
}, [['components/loading/loading-create-component']]]);
});
require('components/loading/loading.js');
__wxRoute = 'components/mpvue-echarts/src/echarts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-echarts/src/echarts.js';

define('components/mpvue-echarts/src/echarts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-echarts/src/echarts"], {
  "0bf4": function bf4(t, e, n) {
    "use strict";

    var a = n("63df"),
        r = n.n(a);
    r.a;
  },
  "30a36": function a36(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("4a15"),
        r = n.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    e["default"] = r.a;
  },
  "4a15": function a15(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = r(n("b470"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
        "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), a.forEach(function (e) {
          i(t, e, n[e]);
        });
      }

      return t;
    }

    function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var o = {
      props: {
        canvasId: {
          type: String,
          default: "ec-canvas"
        },
        lazyLoad: {
          type: Boolean,
          default: !1
        },
        disableTouch: {
          type: Boolean,
          default: !1
        },
        throttleTouch: {
          type: Boolean,
          default: !1
        }
      },
      onReady: function onReady() {
        this.lazyLoad || this.init();
      },
      methods: {
        setChart: function setChart(t) {
          this.chart = t;
        },
        init: function init() {
          var t = this,
              e = this.canvasId;
          this.ctx = wx.createCanvasContext(e, this), this.canvas = new a.default(this.ctx, e);
          var n = wx.createSelectorQuery().in(this);
          n.select("#".concat(e)).boundingClientRect(function (e) {
            e ? t.$emit("onInit", {
              width: e.width,
              height: e.height
            }) : setTimeout(function () {
              return t.init();
            }, 50);
          }).exec();
        },
        canvasToTempFilePath: function canvasToTempFilePath(t) {
          var e = this.canvasId;
          this.ctx.draw(!0, function () {
            wx.canvasToTempFilePath(c({
              canvasId: e
            }, t));
          });
        },
        touchStart: function touchStart(t) {
          var e = this.disableTouch,
              n = this.chart;

          if (!e && n && t.mp.touches.length) {
            var a = t.mp.touches[0];
            n._zr.handler.dispatch("mousedown", {
              zrX: a.x,
              zrY: a.y
            }), n._zr.handler.dispatch("mousemove", {
              zrX: a.x,
              zrY: a.y
            });
          }
        },
        touchMove: function touchMove(t) {
          var e = this.disableTouch,
              n = this.throttleTouch,
              a = this.chart,
              r = this.lastMoveTime;

          if (!e && a && t.mp.touches.length) {
            if (n) {
              var c = Date.now();
              if (c - r < 240) return;
              this.lastMoveTime = c;
            }

            var i = t.mp.touches[0];

            a._zr.handler.dispatch("mousemove", {
              zrX: i.x,
              zrY: i.y
            });
          }
        },
        touchEnd: function touchEnd(t) {
          var e = this.disableTouch,
              n = this.chart;

          if (!e && n) {
            var a = t.mp.changedTouches ? t.mp.changedTouches[0] : {};
            n._zr.handler.dispatch("mouseup", {
              zrX: a.x,
              zrY: a.y
            }), n._zr.handler.dispatch("click", {
              zrX: a.x,
              zrY: a.y
            });
          }
        }
      }
    };
    e.default = o;
  },
  "5af2": function af2(t, e, n) {
    "use strict";

    var a,
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        c = [];

    n.d(e, "b", function () {
      return r;
    }), n.d(e, "c", function () {
      return c;
    }), n.d(e, "a", function () {
      return a;
    });
  },
  "63df": function df(t, e, n) {},
  b92b: function b92b(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("5af2"),
        r = n("30a36");

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    n("0bf4");
    var i,
        o = n("f0c5"),
        u = Object(o["a"])(r["default"], a["b"], a["c"], !1, null, "e16df1f4", null, !1, a["a"], i);
    e["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-echarts/src/echarts-create-component', {
  'components/mpvue-echarts/src/echarts-create-component': function componentsMpvueEchartsSrcEchartsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b92b"));
  }
}, [['components/mpvue-echarts/src/echarts-create-component']]]);
});
require('components/mpvue-echarts/src/echarts.js');
__wxRoute = 'components/personalModule';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/personalModule.js';

define('components/personalModule.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/personalModule"], {
  "15ae": function ae(n, t, e) {},
  2122: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      name: "personalModule",
      data: function data() {
        return {};
      },
      props: {
        imgsrc: "",
        name: ""
      }
    };
    t.default = a;
  },
  "563a": function a(n, t, e) {
    "use strict";

    var a,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "b", function () {
      return u;
    }), e.d(t, "c", function () {
      return r;
    }), e.d(t, "a", function () {
      return a;
    });
  },
  9203: function _(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("563a"),
        u = e("9fad");

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    e("ea69");
    var o,
        c = e("f0c5"),
        f = Object(c["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
    t["default"] = f.exports;
  },
  "9fad": function fad(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("2122"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  ea69: function ea69(n, t, e) {
    "use strict";

    var a = e("15ae"),
        u = e.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/personalModule-create-component', {
  'components/personalModule-create-component': function componentsPersonalModuleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9203"));
  }
}, [['components/personalModule-create-component']]]);
});
require('components/personalModule.js');
__wxRoute = 'components/uni-calendar/uni-calendar-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-calendar/uni-calendar-item.js';

define('components/uni-calendar/uni-calendar-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-calendar/uni-calendar-item"], {
  5104: function _(t, e, n) {
    "use strict";

    var u,
        c = function c() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "b", function () {
      return c;
    }), n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return u;
    });
  },
  "9cb1": function cb1(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      props: {
        weeks: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        calendar: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        selected: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        lunar: {
          type: Boolean,
          default: !1
        }
      },
      methods: {
        choiceDate: function choiceDate(t) {
          this.$emit("change", t);
        }
      }
    };
    e.default = u;
  },
  b16b: function b16b(t, e, n) {},
  b619: function b619(t, e, n) {
    "use strict";

    var u = n("b16b"),
        c = n.n(u);
    c.a;
  },
  c1d6: function c1d6(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("9cb1"),
        c = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = c.a;
  },
  dc74: function dc74(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("5104"),
        c = n("c1d6");

    for (var r in c) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return c[t];
        });
      }(r);
    }

    n("b619");
    var a,
        o = n("f0c5"),
        f = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, "ece5bd58", null, !1, u["a"], a);
    e["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-calendar/uni-calendar-item-create-component', {
  'components/uni-calendar/uni-calendar-item-create-component': function componentsUniCalendarUniCalendarItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dc74"));
  }
}, [['components/uni-calendar/uni-calendar-item-create-component']]]);
});
require('components/uni-calendar/uni-calendar-item.js');
__wxRoute = 'components/uni-calendar/uni-calendar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-calendar/uni-calendar.js';

define('components/uni-calendar/uni-calendar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-calendar/uni-calendar"], {
  3785: function _(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("99a3"),
        i = n("fd55");

    for (var s in i) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(s);
    }

    n("d391");
    var c,
        o = n("f0c5"),
        l = Object(o["a"])(i["default"], a["b"], a["c"], !1, null, "6c1ed70b", null, !1, a["a"], c);
    e["default"] = l.exports;
  },
  "61f7": function f7(t, e, n) {},
  "6b17": function b17(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = i(n("68b3"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var s = function s() {
      return n.e("components/uni-calendar/uni-calendar-item").then(n.bind(null, "dc74"));
    },
        c = {
      components: {
        uniCalendarItem: s
      },
      props: {
        date: {
          type: String,
          default: ""
        },
        selected: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        lunar: {
          type: Boolean,
          default: !1
        },
        startDate: {
          type: String,
          default: ""
        },
        endDate: {
          type: String,
          default: ""
        },
        range: {
          type: Boolean,
          default: !1
        },
        insert: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          show: !1,
          weeks: [],
          calendar: {},
          nowDate: "",
          aniMaskShow: !1
        };
      },
      watch: {
        selected: function selected(t) {
          this.cale.setSelectInfo(this.nowDate.fullDate, t), this.weeks = this.cale.weeks;
        }
      },
      created: function created() {
        this.cale = new a.default({
          date: this.date,
          selected: this.selected,
          startDate: this.startDate,
          endDate: this.endDate,
          range: this.range
        }), this.init(this.cale.date.fullDate);
      },
      methods: {
        clean: function clean() {},
        init: function init(t) {
          this.weeks = this.cale.weeks, this.nowDate = this.calendar = this.cale.getInfo(t);
        },
        open: function open() {
          var t = this;
          this.show = !0, this.$nextTick(function () {
            t.aniMaskShow = !0;
          });
        },
        close: function close() {
          var t = this;
          this.aniMaskShow = !1, this.$nextTick(function () {
            setTimeout(function () {
              t.show = !1;
            }, 300);
          });
        },
        confirm: function confirm() {
          this.setEmit("confirm"), this.close();
        },
        change: function change() {
          this.insert && this.setEmit("change");
        },
        monthSwitch: function monthSwitch() {
          var t = this.nowDate,
              e = t.year,
              n = t.month;
          this.$emit("monthSwitch", {
            year: e,
            month: Number(n)
          });
        },
        setEmit: function setEmit(t) {
          var e = this.calendar,
              n = e.year,
              a = e.month,
              i = e.date,
              s = e.fullDate,
              c = e.lunar,
              o = e.extraInfo;
          this.$emit(t, {
            range: this.cale.multipleStatus,
            year: n,
            month: a,
            date: i,
            fulldate: s,
            lunar: c,
            extraInfo: o || {}
          });
        },
        choiceDate: function choiceDate(t) {
          t.disable || (this.calendar = t, this.cale.setMultiple(this.calendar.fullDate), this.weeks = this.cale.weeks, this.change());
        },
        backtoday: function backtoday() {
          this.cale.setDate(this.date), this.weeks = this.cale.weeks, this.nowDate = this.calendar = this.cale.getInfo(this.date), this.change();
        },
        pre: function pre() {
          var t = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
          this.setDate(t), this.monthSwitch();
        },
        next: function next() {
          var t = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
          this.setDate(t), this.monthSwitch();
        },
        setDate: function setDate(t) {
          this.cale.setDate(t), this.weeks = this.cale.weeks, this.nowDate = this.cale.getInfo(t);
        }
      }
    };

    e.default = c;
  },
  "99a3": function a3(t, e, n) {
    "use strict";

    var a,
        i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    n.d(e, "b", function () {
      return i;
    }), n.d(e, "c", function () {
      return s;
    }), n.d(e, "a", function () {
      return a;
    });
  },
  d391: function d391(t, e, n) {
    "use strict";

    var a = n("61f7"),
        i = n.n(a);
    i.a;
  },
  fd55: function fd55(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("6b17"),
        i = n.n(a);

    for (var s in a) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(s);
    }

    e["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-calendar/uni-calendar-create-component', {
  'components/uni-calendar/uni-calendar-create-component': function componentsUniCalendarUniCalendarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3785"));
  }
}, [['components/uni-calendar/uni-calendar-create-component']]]);
});
require('components/uni-calendar/uni-calendar.js');
__wxRoute = 'components/xuan-loading/xuan-loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/xuan-loading/xuan-loading.js';

define('components/xuan-loading/xuan-loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/xuan-loading/xuan-loading"], {
  "88ca": function ca(t, n, a) {
    "use strict";

    var e = a("acad"),
        u = a.n(e);
    u.a;
  },
  "8b5f": function b5f(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("f681"),
        u = a("93e0");

    for (var o in u) {
      "default" !== o && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    a("88ca");
    var i,
        c = a("f0c5"),
        f = Object(c["a"])(u["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], i);
    n["default"] = f.exports;
  },
  "93e0": function e0(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("f596"),
        u = a.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  acad: function acad(t, n, a) {},
  f596: function f596(t, n, a) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: {
        shadeShow: {
          value: Boolean,
          default: !0
        },
        shadeClick: {
          value: Boolean,
          default: !1
        },
        custom: {
          value: Boolean,
          default: !1
        },
        type: {
          value: Number,
          default: 1
        },
        width: {
          value: String,
          default: "450rpx"
        },
        height: {
          value: String,
          default: "300rpx"
        },
        backgroundColor: {
          value: String,
          default: "#fff"
        },
        callback: {
          type: Function,
          default: function _default() {}
        }
      },
      data: function data() {
        return {
          isPopup: !1,
          ani: ""
        };
      },
      methods: {
        open: function open() {
          var t = this;
          this.isPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "open-animation";
            }, 30);
          });
        },
        close: function close(t) {
          var n = this,
              a = 0 != t;
          a && (this.ani = "", setTimeout(function () {
            n.isPopup = !1, n.$emit("callback");
          }, 200));
        }
      }
    };
    n.default = e;
  },
  f681: function f681(t, n, a) {
    "use strict";

    var e,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    a.d(n, "b", function () {
      return u;
    }), a.d(n, "c", function () {
      return o;
    }), a.d(n, "a", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/xuan-loading/xuan-loading-create-component', {
  'components/xuan-loading/xuan-loading-create-component': function componentsXuanLoadingXuanLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8b5f"));
  }
}, [['components/xuan-loading/xuan-loading-create-component']]]);
});
require('components/xuan-loading/xuan-loading.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"4fba":function(e,a,t){"use strict";t.r(a);var n=t("8937"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=o.a},"7f18":function(e,a,t){},8937:function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{vercodeFlag:0,loadingFlag:!1,phoneNum:"",errorMsg:"",showFlag:0,loginType:1,password:"",passwordFlag:!0,seeFlag:0,resetFlag:0,backShowFlag:0,rememberFlag:1,disabledFlag:!1}},methods:{changeRememberFlag:function(){var e=this;0==e.rememberFlag?e.rememberFlag=1:e.rememberFlag=0},changeClass:function(e){var a=this,t=e.detail.value.length,n=a.loginType;t>0?(a.resetFlag=1,a.phoneNum=e.detail.value):(a.resetFlag=0,a.phoneNum=""),t>=10?0==n?a.vercodeFlag=1:null!=a.password&&""!=a.password&&(a.vercodeFlag=1):a.vercodeFlag=0},resetPhoneNum:function(){this.phoneNum="",this.resetFlag=0,this.vercodeFlag=0},changePasswordClass:function(e){var a=this,t=e.detail.value.length,n=a.phoneNum;t>0?(a.password=e.detail.value,a.seeFlag=1,null!=n&&""!=n&&(a.vercodeFlag=1)):(a.vercodeFlag=0,a.password="",a.seeFlag=0)},reset:function(){this.password="",this.passwordFlag=!0,this.seeFlag=0,this.vercodeFlag=0},see:function(e){this.passwordFlag=e},getVercode:function(){var e=this;if(e.disabledFlag=!0,e.loadingFlag=!0,11!=e.phoneNum.length)return e.showFlag=1,e.errorMsg="请检查号码",e.loadingFlag=!1,void setTimeout(function(){e.errorMsg="",e.showFlag=0,e.disabledFlag=!1},5e3);uni.request({url:e.serverUrl+"/user/authCode",method:"POST",data:{phone:e.phoneNum,devCode:e.cid(),type:0},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(a){e.loadingFlag=!1,"10000"==a.data.resultCode?(e.disabledFlag=!1,uni.navigateTo({url:"../vercode/vercode?phoneNum="+e.phoneNum})):(e.errorMsg=e.showError(a.data.msgCode,a.data.msg),e.showFlag=1,setTimeout(function(){e.errorMsg="",e.showFlag=0,e.disabledFlag=!1},5e3))},fail:function(a){e.loadingFlag=!1,e.disabledFlag=!1,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\login\\login.vue:212"):e.cancel&&__f__("log","用户点击取消"," at pages\\login\\login.vue:214")}})}})},loginIn:function loginIn(account,password){var that=this;if(that.loadingFlag=!0,that.disabledFlag=!0,11!=account.length)return that.loadingFlag=!1,that.showFlag=1,that.errorMsg="请检查号码",void setTimeout(function(){that.errorMsg="",that.showFlag=0,that.disabledFlag=!1},5e3);uni.request({url:that.serverUrl+"/user/login",method:"POST",data:{phone:account,devCode:that.cid(),key:password.trim(),type:1},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(that.loadingFlag=!1,"10000"==res.data.resultCode){1==that.rememberFlag&&null!=that.phoneNum&&void 0!=that.phoneNum&&""!=that.phoneNum&&null!=that.password&&void 0!=that.password&&""!=that.password&&(uni.setStorageSync("account",that.phoneNum),uni.setStorageSync("password",that.password)),uni.setStorageSync("loginType",1),uni.setStorageSync("loginTime",new Date);var userInfo=eval(res.data.data);userInfo.phoneNum=that.phoneNum,uni.setStorageSync("userInfo",userInfo),that.disabledFlag=!1,uni.switchTab({url:"../information/information"})}else{var msg="";msg=void 0==res.data.msg||null==res.data.msg||""==res.data.msg?"服务器或网络异常":res.data.msg,that.errorMsg=that.showError(res.data.msgCode,msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0,that.disabledFlag=!1},5e3)}},fail:function(e){that.disabledFlag=!1,that.loadingFlag=!1,uni.showModal({title:"提示",content:"服务器或网络异常",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\login\\login.vue:292"):e.cancel&&__f__("log","用户点击取消"," at pages\\login\\login.vue:294")}})}})},changeLoginType:function(e){var a=this;a.loginType=e,a.loadingFlag=!1,a.errorMsg="",a.showFlag=0,a.password="",a.passwordFlag=!1,a.seeFlag=0,a.vercodeFlag=0,0==e&&a.phoneNum.length>=10&&(a.vercodeFlag=1)},jumpToForgetPassword:function(){uni.navigateTo({url:"../forgetPassword/forgetPassword"})},jumpToFastlogin:function(){uni.navigateTo({url:"../fastLogin/fastLogin"})},jumpToUserAgreement:function(){uni.navigateTo({url:"../userAgreement/userAgreement"})},jumpToPrivacyAgreement:function(){uni.navigateTo({url:"../privacyAgreement/privacyAgreement"})}},onLoad:function(){var e=this;e.getCid();var a=e.cid();if(a){var t=uni.getStorageSync("loginTime");if(t)if((new Date-t)/864e5>30||new Date-t<0)uni.removeStorageSync("account"),uni.removeStorageSync("password");else if(1==uni.getStorageSync("loginType")){var n=uni.getStorageSync("account"),o=uni.getStorageSync("password");null!=n&&void 0!=n&&""!=n&&null!=o&&void 0!=o&&""!=o&&(e.phoneNum=n,e.password=o,e.vercodeFlag=1,e.resetFlag=1,e.seeFlag=1,e.passwordFlag=1,e.loginIn(n,o))}else uni.getStorageSync("userInfo")&&uni.switchTab({url:"../information/information"})}else setTimeout(function(){var a=uni.getStorageSync("loginTime");if(a)if((new Date-a)/864e5>30||new Date-a<0)uni.removeStorageSync("account"),uni.removeStorageSync("password");else{var t=uni.getStorageSync("account"),n=uni.getStorageSync("password");null!=t&&void 0!=t&&""!=t&&null!=n&&void 0!=n&&""!=n&&(e.phoneNum=t,e.password=n,e.vercodeFlag=1,e.resetFlag=1,e.seeFlag=1,e.passwordFlag=1,e.loginIn(t,n))}},2e3)},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"93c7":function(e,a,t){"use strict";(function(e){t("986c"),t("921b");n(t("66fd"));var a=n(t("a4b4"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},a4b4:function(e,a,t){"use strict";t.r(a);var n=t("bc6d"),o=t("4fba");for(var r in o)"default"!==r&&function(e){t.d(a,e,function(){return o[e]})}(r);t("f5a5");var s,i=t("f0c5"),l=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);a["default"]=l.exports},bc6d:function(e,a,t){"use strict";var n,o=function(){var e=this,a=e.$createElement;e._self._c},r=[];t.d(a,"b",function(){return o}),t.d(a,"c",function(){return r}),t.d(a,"a",function(){return n})},f5a5:function(e,a,t){"use strict";var n=t("7f18"),o=t.n(n);o.a}},[["93c7","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/spectrum/spectrum';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/spectrum/spectrum.js';

define('pages/spectrum/spectrum.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spectrum/spectrum"],{"0470":function(a,e,t){"use strict";t.r(e);var r=t("c2cf"),h=t("789b");for(var i in h)"default"!==i&&function(a){t.d(e,a,function(){return h[a]})}(i);t("548e");var n,s=t("f0c5"),u=Object(s["a"])(h["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],n);e["default"]=u.exports},"05e1":function(a,e,t){"use strict";(function(a,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var h=i(t("36e0"));function i(a){if(a&&a.__esModule)return a;var e={};if(null!=a)for(var t in a)if(Object.prototype.hasOwnProperty.call(a,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,t):{};r.get||r.set?Object.defineProperty(e,t,r):e[t]=a[t]}return e.default=a,e}var n=function(){return t.e("components/back").then(t.bind(null,"1898"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/mpvue-echarts/src/echarts")]).then(t.bind(null,"b92b"))},u={data:function(){return{lineInfo:{},pageNameFlag:1,pageName:"谐波频谱",scrollHeight:"",tabNum:1,option:{},winWidth:0,current:0,picHeight:""}},methods:{scrollH:function(){var e=this,t=a.getSystemInfoSync(),r=t.windowWidth,h=750/r,i=t.windowHeight,n=t.statusBarHeight;e.scrollHeight=parseInt((i-n)*h-254)+"rpx"},changeTab:function(a){this.tabNum=a,this.current=a-1},changeTabBySwiper:function(a){this.tabNum=a.detail.current+1,this.current=a.detail.current},getHarmRateV:function(){var e=this;a.request({url:e.serverUrl+"/realtimeinfo/getHarmRateV",method:"POST",data:{lineIndex:e.lineInfo.lineIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){if("10000"==t.data.resultCode){var h=[],i=[],n=t.data.data;h.push(n.harmRateV.v2),h.push(n.harmRateV.v3),h.push(n.harmRateV.v4),h.push(n.harmRateV.v5),h.push(n.harmRateV.v6),h.push(n.harmRateV.v7),h.push(n.harmRateV.v8),h.push(n.harmRateV.v9),h.push(n.harmRateV.v10),h.push(n.harmRateV.v11),h.push(n.harmRateV.v12),h.push(n.harmRateV.v13),h.push(n.harmRateV.v14),h.push(n.harmRateV.v15),h.push(n.harmRateV.v16),h.push(n.harmRateV.v17),h.push(n.harmRateV.v18),h.push(n.harmRateV.v19),h.push(n.harmRateV.v20),h.push(n.harmRateV.v21),h.push(n.harmRateV.v22),h.push(n.harmRateV.v23),h.push(n.harmRateV.v24),h.push(n.harmRateV.v25),i.push(n.vharm.uharm2),i.push(n.vharm.uharm3),i.push(n.vharm.uharm4),i.push(n.vharm.uharm5),i.push(n.vharm.uharm6),i.push(n.vharm.uharm7),i.push(n.vharm.uharm8),i.push(n.vharm.uharm9),i.push(n.vharm.uharm10),i.push(n.vharm.uharm11),i.push(n.vharm.uharm12),i.push(n.vharm.uharm13),i.push(n.vharm.uharm14),i.push(n.vharm.uharm15),i.push(n.vharm.uharm16),i.push(n.vharm.uharm17),i.push(n.vharm.uharm18),i.push(n.vharm.uharm19),i.push(n.vharm.uharm20),i.push(n.vharm.uharm21),i.push(n.vharm.uharm22),i.push(n.vharm.uharm23),i.push(n.vharm.uharm24),i.push(n.vharm.uharm25),e.drawVoltage(h,i)}else a.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(a){a.confirm?e.getHarmRateV():a.cancel&&r("log","用户点击取消"," at pages\\spectrum\\spectrum.vue:193")}})},fail:function(){a.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(a){a.confirm?r("log","用户点击确定"," at pages\\spectrum\\spectrum.vue:206"):a.cancel&&r("log","用户点击取消"," at pages\\spectrum\\spectrum.vue:208")}})}})},drawVoltage:function(e,t){var r=this;r.option={xAxis:{type:"value",name:"谐波电压含有率(%)",nameGap:30,nameLocation:"center",axisLabel:{formatter:function(a,e){return a.toFixed(2)},margin:10}},yAxis:[{name:"(次)",nameLocation:"start",type:"category",inverse:!0,data:["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","21","23","24","25"]},{show:!1,type:"category",inverse:!0,data:["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","21","23","24","25"]}],series:[{name:"国际限值(%)",type:"bar",label:{normal:{show:!0,position:"right"}},data:t,yAxisIndex:0,itemStyle:{color:"#DAA520",position:"top"},barWidth:"90%"},{name:"谐波电压含有率(%)",type:"bar",label:{normal:{show:!0,textBorderColor:"#333",textBorderWidth:2,position:"right"}},data:e,yAxisIndex:1,itemStyle:{color:"#2E8B57"},barWidth:"65%"}]};var i=a.getSystemInfoSync(),n=i.windowWidth,s=i.windowHeight,u=750/n,m=s-400/u;r.picHeight=m*u+"rpx";var o=r.$refs.lineChart.canvas;h.setCanvasCreator(function(){return o});var p=h.init(o,null,{width:n,height:m});o.setChart(p),p.setOption(r.option),r.$refs.lineChart.setChart(p)},getHarmRateI:function(){var e=this;a.request({url:e.serverUrl+"/realtimeinfo/getHarmRateI",method:"POST",data:{lineIndex:e.lineInfo.lineIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){if("10000"==t.data.resultCode){var h=[],i=[],n=t.data.data;h.push(n.harmRateI.i2),h.push(n.harmRateI.i3),h.push(n.harmRateI.i4),h.push(n.harmRateI.i5),h.push(n.harmRateI.i6),h.push(n.harmRateI.i7),h.push(n.harmRateI.i8),h.push(n.harmRateI.i9),h.push(n.harmRateI.i10),h.push(n.harmRateI.i11),h.push(n.harmRateI.i12),h.push(n.harmRateI.i13),h.push(n.harmRateI.i14),h.push(n.harmRateI.i15),h.push(n.harmRateI.i16),h.push(n.harmRateI.i17),h.push(n.harmRateI.i18),h.push(n.harmRateI.i19),h.push(n.harmRateI.i20),h.push(n.harmRateI.i21),h.push(n.harmRateI.i22),h.push(n.harmRateI.i23),h.push(n.harmRateI.i24),h.push(n.harmRateI.i25),i.push(n.iharm.iharm2),i.push(n.iharm.iharm3),i.push(n.iharm.iharm4),i.push(n.iharm.iharm5),i.push(n.iharm.iharm6),i.push(n.iharm.iharm7),i.push(n.iharm.iharm8),i.push(n.iharm.iharm9),i.push(n.iharm.iharm10),i.push(n.iharm.iharm11),i.push(n.iharm.iharm12),i.push(n.iharm.iharm13),i.push(n.iharm.iharm14),i.push(n.iharm.iharm15),i.push(n.iharm.iharm16),i.push(n.iharm.iharm17),i.push(n.iharm.iharm18),i.push(n.iharm.iharm19),i.push(n.iharm.iharm20),i.push(n.iharm.iharm21),i.push(n.iharm.iharm22),i.push(n.iharm.iharm23),i.push(n.iharm.iharm24),i.push(n.iharm.iharm25),e.drawCurrent(h,i)}else a.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(a){a.confirm?e.getHarmRateI():a.cancel&&r("log","用户点击取消"," at pages\\spectrum\\spectrum.vue:404")}})},fail:function(){a.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(a){a.confirm?r("log","用户点击确定"," at pages\\spectrum\\spectrum.vue:417"):a.cancel&&r("log","用户点击取消"," at pages\\spectrum\\spectrum.vue:419")}})}})},drawCurrent:function(e,t){var r=this;r.option={xAxis:{type:"value",name:"谐波电流幅值(A)",nameGap:30,nameLocation:"center",axisLabel:{formatter:function(a,e){return a.toFixed(2)},margin:10}},yAxis:[{name:"(次)",nameLocation:"start",type:"category",inverse:!0,data:["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","21","23","24","25"]},{show:!1,type:"category",inverse:!0,data:["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","21","23","24","25"]}],series:[{name:"国际限值(%)",type:"bar",label:{normal:{show:!0,position:"right"}},data:t,yAxisIndex:0,itemStyle:{color:"#DAA520",position:"top"},barWidth:"90%"},{name:"谐波电流含有率(%)",type:"bar",label:{normal:{show:!0,textBorderColor:"#333",textBorderWidth:2,position:"right"}},data:e,yAxisIndex:1,itemStyle:{color:"#2E8B57"},barWidth:"65%"}]};var i=a.getSystemInfoSync(),n=i.windowWidth,s=i.windowHeight,u=750/n,m=s-400/u;r.picHeight=m*u+"rpx";var o=r.$refs.lineChart2.canvas;h.setCanvasCreator(function(){return o});var p=h.init(o,null,{width:n,height:m});o.setChart(p),p.setOption(r.option),r.$refs.lineChart2.setChart(p)}},onLoad:function(a){var e=this;e.lineInfo=JSON.parse(a.lineInfo),e.scrollH()},onReady:function(){var a=this;a.getHarmRateV(),a.getHarmRateI()},components:{back:n,mpvueEcharts:s}};e.default=u}).call(this,t("6e42")["default"],t("0de9")["default"])},"199e":function(a,e,t){},"1a73":function(a,e,t){"use strict";(function(a){t("986c"),t("921b");r(t("66fd"));var e=r(t("0470"));function r(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("6e42")["createPage"])},"548e":function(a,e,t){"use strict";var r=t("199e"),h=t.n(r);h.a},"789b":function(a,e,t){"use strict";t.r(e);var r=t("05e1"),h=t.n(r);for(var i in r)"default"!==i&&function(a){t.d(e,a,function(){return r[a]})}(i);e["default"]=h.a},c2cf:function(a,e,t){"use strict";var r,h=function(){var a=this,e=a.$createElement;a._self._c},i=[];t.d(e,"b",function(){return h}),t.d(e,"c",function(){return i}),t.d(e,"a",function(){return r})}},[["1a73","common/runtime","common/vendor"]]]);
});
require('pages/spectrum/spectrum.js');
__wxRoute = 'pages/condition/condition';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/condition/condition.js';

define('pages/condition/condition.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/condition/condition"],{"4f21":function(e,t,n){"use strict";var a=n("56c2"),o=n.n(a);o.a},"56c2":function(e,t,n){},a413:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("a6e4"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a6e4:function(e,t,n){"use strict";n.r(t);var a=n("e68b"),o=n("d940");for(var l in o)"default"!==l&&function(e){n.d(t,e,function(){return o[e]})}(l);n("4f21");var r,i=n("f0c5"),s=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=s.exports},d940:function(e,t,n){"use strict";n.r(t);var a=n("e8ed"),o=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);t["default"]=o.a},e68b:function(e,t,n){"use strict";var a={"uni-calendar":()=>Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"3785"))},o=function(){var e=this,t=e.$createElement;e._self._c},l=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return a})},e8ed:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"3785"))},o=function(){return n.e("components/back").then(n.bind(null,"1898"))},l={data:function(){return{chooseDateTypeFlag:0,chooseDateFlag:0,chooseLineFlag:0,dateTypes:[],dateTypesIndex:0,startDate:"",endDate:"",lineInfo:{},startDateMills:"",endDateMills:""}},methods:{changeDateType:function(e){var t=this;t.dateTypesIndex=e.detail.value,"申请"==t.dateTypes[t.dateTypesIndex]&&t.doQuery()},doQuery:function(){var t=this,n={};n.startDate=t.startDate,n.endDate=t.endDate,n.startDateMills=t.startDateMills,n.endDateMills=t.endDateMills,n.lineInfo=t.lineInfo,n.steadyDate=t.dateTypes[t.dateTypesIndex],n.transientDate=t.dateTypes[t.dateTypesIndex],e.$emit("doQueryInfo",n),e.navigateBack({delta:1})},chooseDate:function(){this.$refs.calendar.open()},confirm:function(e){var t=this,n=e.range.before,a=e.range.after;if(n&&a){var o=parseInt(n.replace("-","").replace("-","")),l=parseInt(a.replace("-","").replace("-",""));l>o?(t.startDate=n,t.endDate=a,t.startDateMills=Date.parse(n.replace(/-/g,"/")),t.endDateMills=Date.parse(a.replace(/-/g,"/"))+86399999):(t.startDate=a,t.endDate=n,t.startDateMills=Date.parse(a.replace(/-/g,"/")),t.endDateMills=Date.parse(n.replace(/-/g,"/"))+86399999)}},jumpToChooseLine:function(){var t=this;e.navigateTo({url:"../chooseLine/chooseLine"}),e.$on("lineInfoSelect",function(e){t.lineInfo=e}),e.$on("lineInfoQuery",function(e){t.lineInfo=e})}},onLoad:function(e){var t=this;t.endDate=e.endDate,t.startDate=e.startDate,t.startDateMills=e.startDateMills,t.endDateMills=e.endDateMills,e.dateTypes&&(t.dateTypes=JSON.parse(e.dateTypes)),e.lineInfo&&(t.lineInfo=JSON.parse(e.lineInfo)),t.chooseDateTypeFlag=e.chooseDateTypeFlag,t.chooseDateFlag=e.chooseDateFlag,t.chooseLineFlag=e.chooseLineFlag},components:{back:o,uniCalendar:a}};t.default=l}).call(this,n("6e42")["default"])}},[["a413","common/runtime","common/vendor"]]]);
});
require('pages/condition/condition.js');
__wxRoute = 'pages/dataIntegrityDetails/dataIntegrityDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/dataIntegrityDetails/dataIntegrityDetails.js';

define('pages/dataIntegrityDetails/dataIntegrityDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dataIntegrityDetails/dataIntegrityDetails"],{"0e25":function(e,t,n){"use strict";n.r(t);var a=n("ea90"),r=n("8219");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("fe31");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=u.exports},"527e":function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("0e25"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},8219:function(e,t,n){"use strict";n.r(t);var a=n("cf29"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},ab22:function(e,t,n){},cf29:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("36e0"));function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}var i=function(){return n.e("components/back").then(n.bind(null,"1898"))},o=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"3785"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"b92b"))},u={data:function(){return{pageNameFlag:1,pageName:"数据完整性详情",startDate:"",endDate:"",picHeight:"",option:{},dataIntegrity:{},timeEnd:"",timeStart:"",errorFlag:0,integrityz:"",srollHeight:""}},methods:{chooseDate:function(){this.$refs.calendar.open()},confirm:function(e){var t=this,n=e.range.before,a=e.range.after,r=parseInt(n.replace("-","").replace("-","")),i=parseInt(a.replace("-","").replace("-",""));i>r?(t.startDate=n,t.endDate=a):(t.startDate=a,t.endDate=n)},getDataIntegrity:function(){var t=this;t.judgeLogin()&&e.request({url:t.serverUrl+"/dataIntegrity/getDataIntegrity",method:"POST",data:{userId:e.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if(e.hideLoading(),"10000"==n.data.resultCode){var a=n.data,r=n.data.data;t.timeStart=t.formatTime(a.timeStart),t.timeEnd=t.formatTime(a.timeEnd),t.integrityz=a.integrityz+"",t.dataIntegrity=r;for(var i=[],o=[],c=0;c<r.length;c++)i.push(r[c].lineName),o.push(r[c].integrity);t.drawPic(i,o)}else e.hideLoading(),t.errorFlag=1},fail:function(){e.hideLoading(),t.errorFlag=1}})},drawPic:function(t,n){var r=this,i="55%",o="30%";r.option={grid:{width:i,left:o},xAxis:{name:"数据完整性(%)",type:"value",nameGap:30,nameLocation:"center",max:100,axisLabel:{margin:10}},yAxis:{type:"category",inverse:!0,data:t,axisLabel:{interval:0,fontsize:6,formatter:function(e){return e.length>9?e.substring(0,8)+"...":e}}},series:{type:"bar",label:{normal:{show:!0,position:"right"}},data:n,itemStyle:{color:"#58C1FF",position:"top"},barWidth:"90%"}};var c=e.getSystemInfoSync(),u=c.windowWidth,s=c.windowHeight,l=750/u,d=c.statusBarHeight;r.srollHeight=parseInt((s-d)*l-300)+"rpx";var f=50*t.length+50;r.picHeight=f*l+"rpx";var g=r.$refs.lineChart.canvas;a.setCanvasCreator(function(){return g});var p=a.init(g,null,{width:u,height:f});g.setChart(p),p.setOption(r.option),r.$refs.lineChart.setChart(p)},retry:function(){this.getDataIntegrity()}},onLoad:function(){e.showLoading({mask:!0})},onReady:function(){var e=this;e.getDataIntegrity()},components:{back:i,uniCalendar:o,mpvueEcharts:c}};t.default=u}).call(this,n("6e42")["default"])},ea90:function(e,t,n){"use strict";var a={"uni-calendar":()=>Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"3785"))},r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})},fe31:function(e,t,n){"use strict";var a=n("ab22"),r=n.n(a);r.a}},[["527e","common/runtime","common/vendor"]]]);
});
require('pages/dataIntegrityDetails/dataIntegrityDetails.js');
__wxRoute = 'pages/terminalStatus/terminalStatus';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/terminalStatus/terminalStatus.js';

define('pages/terminalStatus/terminalStatus.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/terminalStatus/terminalStatus"],{"145c":function(e,t,n){"use strict";var r={"uni-calendar":()=>Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"3785"))},a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})},"1bc4":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("36e0"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}var o=function(){return n.e("components/back").then(n.bind(null,"1898"))},i=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"3785"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"b92b"))},u={data:function(){return{pageNameFlag:1,pageName:"终端状态详情",startDate:"",endDate:"",picHeight:"",option:{},devStatus:{},timeEnd:"",timeStart:"",comError:"",onlineRatez:"",errorFlag:0,srollHeight:""}},methods:{chooseDate:function(){this.$refs.calendar.open()},confirm:function(e){var t=this,n=e.range.before,r=e.range.after,a=parseInt(n.replace("-","").replace("-","")),o=parseInt(r.replace("-","").replace("-",""));o>a?(t.startDate=n,t.endDate=r):(t.startDate=r,t.endDate=n)},getDevStatus:function(){var t=this;t.judgeLogin()&&e.request({url:t.serverUrl+"/dataIntegrity/getDevStatus",method:"POST",data:{userId:e.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if(e.hideLoading(),"10000"==n.data.resultCode){var r=n.data,a=n.data.data;t.timeStart=t.formatTime(r.timeStart),t.timeEnd=t.formatTime(r.timeEnd),t.comError=r.comError+"",t.onlineRatez=r.onlineRatez+"",t.devStatus=a;for(var o=[],i=[],c=0;c<a.length;c++)a[c].showTime=t.formatTime_second(a[c].timeId),o.push(a[c].devName),i.push(a[c].onlineRate);t.drawPic(o,i)}else e.hideLoading(),t.errorFlag=1},fail:function(){e.hideLoading(),t.errorFlag=1}})},drawPic:function(t,n){var a=this;a.option={grid:{width:"55%",left:"35%"},xAxis:{name:"在线率(%)",type:"value",nameGap:30,nameLocation:"center",max:100,axisLabel:{margin:10}},yAxis:{type:"category",inverse:!0,name:"监测点名称",nameLocation:"start",data:t,axisLabel:{interval:0,fontsize:3,formatter:function(e){return e.length>9?e.substring(0,8)+"...":e}}},series:{type:"bar",label:{normal:{show:!0,position:"right"}},data:n,itemStyle:{color:"#58C1FF",position:"top"},barWidth:"90%"}};var o=e.getSystemInfoSync(),i=o.windowWidth,c=o.windowHeight,u=750/i,s=o.statusBarHeight,l=50*t.length+50;a.srollHeight=parseInt((c-s)*u-300)+"rpx",a.picHeight=l*u+"rpx";var d=a.$refs.lineChart.canvas;r.setCanvasCreator(function(){return d});var f=r.init(d,null,{width:i,height:l});d.setChart(f),f.setOption(a.option),a.$refs.lineChart.setChart(f),e.hideLoading()},retry:function(){this.getDevStatus()}},onLoad:function(){e.showLoading({mask:!0})},onReady:function(){var e=this;e.getDevStatus()},components:{back:o,uniCalendar:i,mpvueEcharts:c}};t.default=u}).call(this,n("6e42")["default"])},"50ce":function(e,t,n){"use strict";(function(e){n("986c"),n("921b");r(n("66fd"));var t=r(n("fb21"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"88c2":function(e,t,n){"use strict";n.r(t);var r=n("1bc4"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"9b0e":function(e,t,n){"use strict";var r=n("e7c3"),a=n.n(r);a.a},e7c3:function(e,t,n){},fb21:function(e,t,n){"use strict";n.r(t);var r=n("145c"),a=n("88c2");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("9b0e");var i,c=n("f0c5"),u=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=u.exports}},[["50ce","common/runtime","common/vendor"]]]);
});
require('pages/terminalStatus/terminalStatus.js');
__wxRoute = 'pages/chooseLine/chooseLine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chooseLine/chooseLine.js';

define('pages/chooseLine/chooseLine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chooseLine/chooseLine"],{"070a":function(e,t,n){"use strict";var a=n("dd8f"),i=n.n(a);i.a},8580:function(e,t,n){"use strict";n.r(t);var a=n("9722"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},"8cb7":function(e,t,n){"use strict";n.r(t);var a=n("e75c"),i=n("8580");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("070a");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=c.exports},9722:function(module,exports,__webpack_require__){"use strict";(function(uni){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var uniCalendar=function(){return Promise.all([__webpack_require__.e("common/vendor"),__webpack_require__.e("components/uni-calendar/uni-calendar")]).then(__webpack_require__.bind(null,"3785"))},back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{errorFlag:0,showFlag:0,errorMsg:"",provinceList:[{provinceName:"省份",provinceIndex:0}],provinceListIndex:0,provinceSelectedIndex:0,companyList:[{gdName:"供电公司",gdIndex:0}],companyListIndex:0,companySelectedIndex:0,substationList:[{subName:"变电站",subIndex:0}],substationListIndex:0,substationSelectedIndex:0,lineList:[],lineSelectedIndex:0,lineName:"",showProvinceFlag:1,lineFlag:0,pickerHeight:"",queryByNameList:[],searchResult:"",startDate:"",startDateMills:"",endDate:"",endDateMills:"",pageName:"监测点选择",pageNameFlag:1}},methods:{scrollH:function(){var e=this,t=uni.getSystemInfoSync(),n=t.windowWidth,a=750/n,i=t.windowHeight;e.pickerHeight=parseInt((i-50)*a-466)+"rpx"},queryByName:function queryByName(){var that=this;that.showProvinceFlag=0,that.judgeLogin()&&uni.request({url:that.serverUrl+"/device/queryByName",method:"POST",data:{lineName:that.lineName,userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?(that.queryByNameList=eval(res.data.data),0!=that.queryByNameList.length?that.searchResult="":that.searchResult="暂未搜索到监测点"):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},inputLine:function(e){this.lineName=e.detail.value,this.showProvinceFlag=0,this.searchResult=""},showProvince:function(){this.showProvinceFlag=1},getProvince:function getProvince(){var that=this;uni.request({url:that.serverUrl+"/device/getProvince",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.provinceList=that.provinceList.concat(eval(res.data.data)):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},getCompany:function getCompany(){var that=this;uni.request({url:that.serverUrl+"/device/getGDInfo",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,provinceIndex:that.provinceSelectedIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.companyList=that.companyList.concat(eval(res.data.data)):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},getSubstation:function getSubstation(){var that=this;uni.request({url:that.serverUrl+"/device/getSubInfo",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,gdIndex:that.companySelectedIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.substationList=that.substationList.concat(eval(res.data.data)):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},getLine:function getLine(){var that=this;uni.request({url:that.serverUrl+"/device/getLineInfo",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,subIndex:that.substationSelectedIndex,type:that.lineFlag},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.lineList=eval(res.data.data):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},selectProvince:function(e){this.provinceSelectedIndex=e,this.getCompany()},selectCompany:function(e){this.companySelectedIndex=e,this.getSubstation()},selectSubstation:function(e){this.substationSelectedIndex=e,this.getLine()},selectLine:function(e,t){var n=this;n.lineSelectedIndex=e,uni.$emit("lineInfoSelect",t),uni.navigateBack({delta:1})},changeLineFlag:function(e){var t=this;t.lineFlag=e,t.lineList&&t.getLine()},changeProvinceSelectedIndex:function(e,t){var n=this;n.companyList=[{gdName:"供电公司",gdIndex:0}],n.substationList=[{subName:"变电站",subIndex:0}],n.provinceListIndex=e.target.value,n.companyListIndex=0,n.substationListIndex=0,n.lineList=[],0!=e.target.value&&(n.provinceSelectedIndex=n.provinceList[n.provinceListIndex].provinceIndex,n.getCompany())},changeCompanySelectedIndex:function(e,t){var n=this;n.substationList=[{subName:"变电站",subIndex:0}],n.companyListIndex=e.target.value,n.substationListIndex=0,n.lineList=[],0!=e.target.value&&(n.companySelectedIndex=n.companyList[n.companyListIndex].gdIndex,n.getSubstation())},changeSubstationSelectedIndex:function(e,t){var n=this;0!=e.target.value?(n.substationListIndex=e.target.value,n.substationSelectedIndex=n.substationList[n.substationListIndex].subIndex,n.getLine()):n.lineList=[]},chooseDate:function(){this.$refs.calendar.open()},confirm:function(e){var t=this,n=e.range.before,a=e.range.after,i=parseInt(n.replace("-","").replace("-","")),r=parseInt(a.replace("-","").replace("-",""));r>i?(t.startDate=n,t.endDate=a,t.startDateMills=n+" 00:00:00.000",t.endDateMills=a+" 23:59:59.999"):(t.startDate=a,t.endDate=n,t.startDateMills=a+" 00:00:00.000",t.endDateMills=n+" 23:59:59.999")},retry:function(){this.scrollH(),this.getProvince()}},components:{back:back,uniCalendar:uniCalendar},onLoad:function(){this.scrollH(),this.getProvince(),this.queryByName(),this.endDate=this.formatTime(new Date),this.startDate=this.endDate.substring(0,8)+"01"}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"])},b78a:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("8cb7"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},dd8f:function(e,t,n){},e75c:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})}},[["b78a","common/runtime","common/vendor"]]]);
});
require('pages/chooseLine/chooseLine.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1e19":function(n,e,t){"use strict";var o={loading:()=>t.e("components/loading/loading").then(t.bind(null,"b9d6"))},u=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"b",function(){return u}),t.d(e,"c",function(){return c}),t.d(e,"a",function(){return o})},3373:function(n,e,t){"use strict";t.r(e);var o=t("bc2b"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=u.a},"5dae":function(n,e,t){"use strict";(function(n){t("986c"),t("921b");o(t("66fd"));var e=o(t("e109"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"7a90":function(n,e,t){"use strict";var o=t("f7c1"),u=t.n(o);u.a},bc2b:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return t.e("components/xuan-loading/xuan-loading").then(t.bind(null,"8b5f"))},u={components:{loading:o},data:function(){return{}},mounted:function(){var n=this;this.open(),setTimeout(function(){n.close()},2e3)},methods:{close:function(){this.$refs.loading.close()},open:function(){this.$refs.loading.open()},callback:function(){n("log","关闭后回掉"," at pages\\index\\index.vue:39")}}};e.default=u}).call(this,t("0de9")["default"])},e109:function(n,e,t){"use strict";t.r(e);var o=t("1e19"),u=t("3373");for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);t("7a90");var i,a=t("f0c5"),l=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=l.exports},f7c1:function(n,e,t){}},[["5dae","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/report/report';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/report/report.js';

define('pages/report/report.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{"081c":function(e,t,n){"use strict";n.r(t);var a=n("6ec3"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},"0e06":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},"547b":function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("8adb"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"6ec3":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var uniCalendar=function(){return Promise.all([__webpack_require__.e("common/vendor"),__webpack_require__.e("components/uni-calendar/uni-calendar")]).then(__webpack_require__.bind(null,"3785"))},_default={data:function(){return{tabNum:1,steadyDateChoose:0,transientDateChoose:0,userInfo:{},steadyDate:"周报",steadyPage:1,steadyLine:{lineName:"请选择"},transientPage:1,transientDate:"月报",steadyList:[],transientList:[],transientLine:{lineName:"请选择"},types:["年报","季报"],typesIndex:0,years:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],yearsIndex:9,yearsAndQuarter:[[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],["第一季度","第二季度","第三季度","第四季度"]],yearsAndQuarterIndex1:9,yearsAndQuarterIndex2:0,scrollHeight:"",swiperHeight:"",loadingFlag:!1,disabledFlag:!1,current:0,scrollFlag:!0,lineInfo:{lineName:"暂无默认监测点，请选择",lineIndex:""},startDate:"",endDate:"",startDateMills:"",endDateMills:"",startDate2:"",endDate2:"",startDateMills2:"",endDateMills2:""}},methods:{scrollH:function(){var e=this,t=uni.getSystemInfoSync(),n=t.windowWidth,a=750/n,i=t.windowHeight,r=t.statusBarHeight;e.scrollHeight=parseInt((i-r)*a-274)+"rpx",e.swiperHeight=parseInt((i-r)*a-172)+"rpx"},setScrollFlag:function(){var e=this;e.scrollFlag=!1,setTimeout(function(){e.scrollFlag=!0},30)},changeTab:function(e){this.tabNum=e,this.current=e-1},changeTabBySwiper:function(e){this.tabNum=e.detail.current+1,this.current=e.detail.current},steadyChangeDate:function(e){this.steadyDate=e,this.steadyChooseDate(0),"申请"!=e&&(this.steadyPage=1,this.steadyList=[],this.querySteadyList())},transientChangeDate:function(e){this.transientDate=e,this.transientChooseDate(0),this.transientPage=1,this.transientList=[],this.queryTransientList()},querySteadyList:function querySteadyList(){var that=this;if(that.judgeLogin()){var reportType="";"周报"==that.steadyDate?reportType=1:"月报"==that.steadyDate&&(reportType=2),uni.request({url:that.serverUrl+"/report/reportList",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,systemType:2,reportType:reportType,page:that.steadyPage++,num:20,lineIndex:that.lineInfo.lineIndex,startTime:that.startDateMills,endTime:that.endDateMills},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){var list=that.addDateString(eval(res.data.data));null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.steadyList=that.steadyList.concat(list))}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(e){e.confirm?that.querySteadyList():e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:637")}})},fail:function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\report\\report.vue:651"):e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:653")}})}})}},queryTransientList:function queryTransientList(){var that=this;if(that.judgeLogin()){var reportType="";"周报"==that.transientDate?reportType=1:"月报"==that.transientDate&&(reportType=2),uni.request({url:that.serverUrl+"/report/reportList",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,systemType:1,reportType:reportType,page:that.transientPage++,num:20,startTime:that.startDateMills2,endTime:that.endDateMills2},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){var list=that.addDateString(eval(res.data.data));null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.transientList=that.transientList.concat(list))}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(e){e.confirm?that.queryTransientList():e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:702")}})},fail:function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\report\\report.vue:716"):e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:718")}})}})}},download:function(e){var t=this;uni.showLoading({title:"正在下载",mask:!0}),uni.downloadFile({url:e,success:function(n){uni.hideLoading(),200===n.statusCode?uni.saveFile({tempFilePath:n.tempFilePath,success:function(e){e.savedFilePath;uni.showModal({title:"下载报告成功",content:"下载成功，是否直接打开",success:function(t){t.confirm?uni.openDocument({filePath:n.tempFilePath}):e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:751")}})},fail:function(){uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(n){n.confirm?t.download(e):n.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:765")}})}}):uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(n){n.confirm?t.download(e):n.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:780")}})},fail:function(){uni.hideLoading(),uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(n){n.confirm?t.download(e):n.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:796")}})}})},applyReport:function(e){var t=this;if(t.judgeLogin()){t.disabledFlag=!0,t.loadingFlag=!0;var n="",a=0,i=0;if(1==e)n=0;else{if(null==t.steadyLine||void 0==t.steadyLine||null==t.steadyLine.lineIndex||void 0==t.steadyLine.lineIndex||""==t.steadyLine.lineIndex)return uni.showModal({title:"提示",content:"请选择监测点",showCancel:!1}),t.loadingFlag=!1,void(t.disabledFlag=!1);n=t.steadyLine.lineIndex}t.loadingFlag=!1,t.disabledFlag=!1,uni.showLoading({mask:!0}),0==t.typesIndex?(a=0,i=t.years[t.yearsIndex]):(a=t.yearsAndQuarterIndex2+1,i=t.yearsAndQuarter[0][t.yearsAndQuarterIndex1]),uni.request({url:t.serverUrl+"/report/customReport",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,systemType:e,lineIndex:n,quarter:a,year:i},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){uni.hideLoading(),"10000"==n.data.resultCode?uni.showModal({title:"提示",content:"申请成功",showCancel:!1}):uni.showModal({title:"提示",content:"申请失败，请重试",confirmText:"重试",success:function(n){n.confirm?t.applyReport(e):n.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:880")}})},fail:function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\report\\report.vue:894"):e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:896")}})}})}},queryDefaultLine:function(){var e=this;e.judgeLogin()&&uni.request({url:e.serverUrl+"/realtimeinfo/getLineId",method:"POST",data:{userIndex:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){if("10000"==t.data.resultCode){var n=t.data.data;n&&(e.lineInfo=n,e.querySteadyList(),e.queryTransientList())}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryDefaultLine():t.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:934")}})},fail:function(){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\report\\report.vue:947"):e.cancel&&__f__("log","用户点击取消"," at pages\\report\\report.vue:949")}})}})},steadyChooseDate:function(e){this.steadyDateChoose=e},transientChooseDate:function(e){this.transientDateChoose=e},addDateString:function(e){for(var t=this,n=0;n<e.length;n++)e[n].dateString=t.formatTime(e[n].startTime)+"至"+t.formatTime(e[n].endTime);return e},changeType:function(e){this.typesIndex=e.detail.value},changeYear:function(e){this.yearsIndex=e.detail.value},changeYearsAndQuarter:function(e){this.yearsAndQuarterIndex1=e.detail.value[0],this.yearsAndQuarterIndex2=e.detail.value[1]},jumpToMyApply:function(e){uni.navigateTo({url:"../myApply/myApply?systemType="+e})},jumpToChooseLine:function(e){var t=this;uni.navigateTo({url:"../chooseLine/chooseLine"}),uni.$on("lineInfoSelect",function(n){1==e?t.transientLine=n:t.steadyLine=n}),uni.$on("lineInfoQuery",function(n){1==e?t.transientLine=n:t.steadyLine=n})},jumpToConditionSteady:function(){var e=this,t=[];t=0==e.userInfo.roleCode?["周报","月报","申请"]:["周报","月报"],uni.navigateTo({url:"../condition/condition?lineInfo="+JSON.stringify(e.lineInfo)+"&startDate="+e.startDate+"&endDate="+e.endDate+"&startDateMills="+e.startDateMills+"&endDateMills="+e.endDateMills+"&dateTypes="+JSON.stringify(t)+"&chooseDateTypeFlag=1&&chooseDateFlag=1&chooseLineFlag=1"}),uni.$once("doQueryInfo",function(t){"申请"==t.steadyDate?e.steadyDate=t.steadyDate:(e.startDate=t.startDate,e.endDate=t.endDate,e.startDateMills=t.startDateMills,e.endDateMills=t.endDateMills,e.lineInfo=t.lineInfo,e.steadyPage=1,e.steadyList=[],e.steadyDate=t.steadyDate,e.querySteadyList())})},jumpToConditionTransient:function(){var e=this,t=[];t=0==e.userInfo.roleCode?["月报","申请"]:["月报"],uni.navigateTo({url:"../condition/condition?lineInfo="+JSON.stringify(e.lineInfo)+"&startDate="+e.startDate2+"&endDate="+e.endDate2+"&startDateMills="+e.startDateMills2+"&endDateMills="+e.endDateMills2+"&dateTypes="+JSON.stringify(t)+"&chooseDateTypeFlag=1&&chooseDateFlag=1&chooseLineFlag=0"}),uni.$once("doQueryInfo",function(t){"申请"==t.transientDate?e.transientDate=t.transientDate:(e.startDate2=t.startDate,e.endDate2=t.endDate,e.startDateMills2=t.startDateMills,e.endDateMills2=t.endDateMills,e.transientPage=1,e.transientList=[],e.transientDate=t.transientDate,e.queryTransientList())})}},components:{uniCalendar:uniCalendar},onLoad:function(){var e=this;if(e.judgeLogin()){(new Date).getMilliseconds();e.userInfo=uni.getStorageSync("userInfo"),__f__("log",e.userInfo.userId," at pages\\report\\report.vue:1071"),e.scrollH(),e.endDate=e.formatTime(new Date),e.startDate=e.endDate.substring(0,8)+"01",e.startDateMills=Date.parse(e.startDate.replace(/-/g,"/")),e.endDateMills=Date.parse(e.endDate.replace(/-/g,"/"))+86399999,e.endDate2=e.formatTime(new Date),e.startDate2=e.endDate.substring(0,8)+"01",e.startDateMills2=Date.parse(e.startDate.replace(/-/g,"/")),e.endDateMills2=Date.parse(e.endDate.replace(/-/g,"/"))+86399999,e.queryDefaultLine()}},onShow:function(){var e=this;if(e.judgeLogin()){var t=uni.getStorageSync("userInfo");e.userInfo.roleCode!=t.roleCode&&(e.userInfo=t)}}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"8adb":function(e,t,n){"use strict";n.r(t);var a=n("0e06"),i=n("081c");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("f9d0");var s,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=l.exports},bd15:function(e,t,n){},f9d0:function(e,t,n){"use strict";var a=n("bd15"),i=n.n(a);i.a}},[["547b","common/runtime","common/vendor"]]]);
});
require('pages/report/report.js');
__wxRoute = 'pages/information/information';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/information/information.js';

define('pages/information/information.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/information/information"],{"09dc":function(t,e,n){"use strict";n.r(e);var a=n("b78e"),i=n("a943");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("3449");var r,u=n("f0c5"),l=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=l.exports},3449:function(t,e,n){"use strict";var a=n("feed"),i=n.n(a);i.a},a943:function(t,e,n){"use strict";n.r(e);var a=n("f3de"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},ac9f:function(t,e,n){"use strict";(function(t){n("986c"),n("921b");a(n("66fd"));var e=a(n("09dc"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b78e:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(t){})},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},f3de:function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={data:function(){return{tabNum:1,terminalNum:0,terminalShowNum:0,steadyNum:0,steadyShowNum:0,transientNum:0,transientShowNum:0,transientPage:1,steadyPage:1,terminalPage:1,transientList:[],steadyList:[],terminalList:[],scrollHeight:"",eventMsgIndexList:[],steadyIndexList:[],devMsgIndexList:[],allNum:0,transientScrollTop:0,steadyScrollTop:0,terminalScrollTop:0,pullHeight:"",pullFlag:0,startY:0,pullText:"下拉刷新",transientRefreshFlag:0,steadyRefreshFlag:0,terminalRefreshFlag:0,current:0,scrollFlag:!0,noTransient:"",noSteady:"",noTerminal:""}},methods:{transientScrollMove:function(t){this.transientScrollTop=t.detail.scrollTop},transientTouchstart:function(t){this.startY=t.touches[0].clientY},transientTouchmove:function(t){var e=this;if(e.transientScrollTop<2){var n=t.changedTouches[0].clientY-e.startY;if(n>66||n<0)return;n<33?(e.pullText="下拉刷新",e.pullHeight=n+"px",e.pullFlag=1):(e.pullText="加载中...",e.pullHeight=n+"px",e.pullFlag=1,e.transientRefreshFlag=1,e.communicateState())}},transientTouchend:function(t){var e=this;e.scrollFlag=!1,setTimeout(function(){e.scrollFlag=!0},30),e.transientScrollTop=0,e.pullHeight="",e.startY=0,e.pullText="下拉刷新",e.pullFlag=0,1==e.transientRefreshFlag&&(e.transientRefreshFlag=0,e.transientList=[],e.noTransient="",e.transientNum=0,e.transientPage=1,e.queryTransientList())},steadyScrollMove:function(t){this.steadyScrollTop=t.detail.scrollTop},steadyTouchstart:function(t){this.startY=t.touches[0].clientY},steadyTouchmove:function(t){var e=this;if(e.steadyScrollTop<2){var n=t.changedTouches[0].clientY-e.startY;if(n>66||n<0)return;n<33?(e.pullText="下拉刷新",e.pullHeight=n+"px",e.pullFlag=1):(e.pullText="加载中...",e.pullHeight=n+"px",e.pullFlag=1,e.steadyRefreshFlag=1,e.communicateState())}},steadyTouchend:function(t){var e=this;e.scrollFlag=!1,setTimeout(function(){e.scrollFlag=!0},30),e.steadyScrollTop=0,e.pullHeight="",e.startY=0,e.pullText="下拉刷新",e.pullFlag=0,1==e.steadyRefreshFlag&&(e.steadyRefreshFlag=0,e.steadyList=[],e.noSteady="",e.steadyNum=0,e.steadyPage=1,e.querySteadyList())},terminalScrollMove:function(t){this.terminalScrollTop=t.detail.scrollTop},terminalTouchstart:function(t){this.startY=t.touches[0].clientY},terminalTouchmove:function(t){var e=this;if(e.terminalScrollTop<2){var n=t.changedTouches[0].clientY-e.startY;if(n>66||n<0)return;n<33?(e.pullText="下拉刷新",e.pullHeight=n+"px",e.pullFlag=1):(e.pullText="加载中...",e.pullHeight=n+"px",e.pullFlag=1,e.terminalRefreshFlag=1,e.communicateState())}},terminalTouchend:function(t){var e=this;e.scrollFlag=!1,setTimeout(function(){e.scrollFlag=!0},30),e.terminalScrollTop=0,e.pullHeight="",e.startY=0,e.pullText="下拉刷新",e.pullFlag=0,1==e.terminalRefreshFlag&&(e.terminalRefreshFlag=0,e.terminalList=[],e.noTerminal="",e.terminalNum=0,e.terminalPage=1,e.queryTerminalList())},scrollH:function(){var t=this,e=uni.getSystemInfoSync(),n=e.windowWidth,a=750/n,i=e.windowHeight,s=e.statusBarHeight;t.scrollHeight=parseInt((i-s)*a-152)+"rpx"},changeTab:function(t){var e=this;e.current=t-1,e.tabNum=t},changeTabBySwiper:function(t){this.tabNum=t.detail.current+1,this.current=t.detail.current},jumpToTransientDetails:function(t,e,n,a){var i=this;i.transientNum>0&&0==a&&(i.transientNum--,i.eventMsgIndexList.push(e),i.transientList[n].state=1),i.judgeTransientNum(),i.setAllNum(),i.communicateState(),uni.navigateTo({url:"../transientDetails/transientDetails?eventDetailIndex="+t+"&eventMsgIndex="+e})},jumpToSteady:function(t,e,n,a){var i=this;i.steadyNum>0&&0==a&&(i.steadyNum--,i.steadyIndexList.push(e),i.steadyList[n].state=1),i.judgeSteadyNum(),i.setAllNum(),i.communicateState(),uni.navigateTo({url:"../steady/steady?steadyIndex="+e+"&showTime="+t})},jumpToTerminal:function(t,e,n,a){var i=this;i.terminalNum>0&&0==a&&(i.terminalNum--,i.devMsgIndexList.push(e),i.terminalList[n].state=1),i.judgeTerminalNum(),i.setAllNum(),i.communicateState(),uni.navigateTo({url:"../terminal/terminal?devMsgIndex="+e+"&showTime="+t})},communicateState:function(){var t=this;uni.request({url:t.serverUrl+"/cleanmsg/clearMsg",method:"POST",data:{eventMsgList:t.eventMsgIndexList,steadyMsgList:t.steadyIndexList,deviceMsgList:t.devMsgIndexList},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){"10000"==t.data.resultCode?__f__("log","同步成功"," at pages\\information\\information.vue:393"):__f__("log","同步失败"," at pages\\information\\information.vue:395")},fail:function(t){__f__("log","同步网络异常"," at pages\\information\\information.vue:399")}})},queryTransientList:function queryTransientList(){var that=this;that.judgeLogin()&&uni.request({url:that.serverUrl+"/eventmsg/eventDetailList",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,page:that.transientPage++,num:20},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){that.transientNum=res.data.unstate,that.judgeTransientNum();var list=[];list=that.countTransientNum(eval(res.data.data),1),2==that.transientPage&&(that.transientList=[]),null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.transientList=that.transientList.concat(list)),0==that.transientList.length&&(that.noTransient="暂无暂态消息")}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?(that.transientPage--,that.queryTransientList()):t.cancel&&__f__("log","用户点击取消"," at pages\\information\\information.vue:445")}})},fail:function(t){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?__f__("log","用户点击确定"," at pages\\information\\information.vue:459"):t.cancel&&__f__("log","用户点击取消"," at pages\\information\\information.vue:461")}})}})},countTransientNum:function(t,e){var n=this;if(1==e)for(var a=0;a<t.length;a++)t[a].showTime=n.formatTime_mills(t[a].timeID);else{var i=0;for(a=0;a<t.length;a++)0==t[a].state&&i++,n.transientNum=i}return n.setAllNum(),t},judgeTransientNum:function(){var t=this;t.transientNum>99?t.transientShowNum="99+":t.transientShowNum=t.transientNum},querySteadyList:function querySteadyList(){var that=this;that.judgeLogin()&&uni.request({url:that.serverUrl+"/steadymsg/steadyState",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,page:that.steadyPage++,num:20},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){that.steadyNum=res.data.unstate,that.judgeSteadyNum();var list=[];list=that.countSteadyNum(eval(res.data.data),1),2==that.steadyPage&&(that.steadyList=[]),null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.steadyList=that.steadyList.concat(list)),0==that.steadyList.length&&(that.noSteady="暂无稳态越限消息")}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?(that.steadyPage--,that.querySteadyList()):t.cancel&&__f__("log","用户点击取消"," at pages\\information\\information.vue:543")}})},fail:function(t){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?__f__("log","用户点击确定"," at pages\\information\\information.vue:557"):t.cancel&&__f__("log","用户点击取消"," at pages\\information\\information.vue:559")}})}})},countSteadyNum:function(t,e){var n=this;if(1==e)for(var a=0;a<t.length;a++)t[a].showTime=n.formatTime(t[a].timeID);else{var i=0;for(a=0;a<t.length;a++)0==t[a].state&&i++,n.steadyNum=i}return n.setAllNum(),t},judgeSteadyNum:function(){var t=this;t.steadyNum>99?t.steadyShowNum="99+":t.steadyShowNum=t.steadyNum},queryTerminalList:function queryTerminalList(){var that=this;that.judgeLogin()&&uni.request({url:that.serverUrl+"/deviceMsg/deviceMsgList",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,page:that.terminalPage++,num:20},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){that.terminalNum=res.data.unstate,that.judgeTerminalNum();var list=[];list=that.countTerminalNum(eval(res.data.data),1),2==that.terminalPage&&(that.terminalList=[]),null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.terminalList=that.terminalList.concat(list)),0==that.terminalList.length&&(that.noTerminal="暂无终端越限消息")}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?(that.terminalPage--,that.queryTerminalList()):t.cancel&&__f__("log","用户点击取消"," at pages\\information\\information.vue:641")}})},fail:function(t){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?__f__("log","用户点击确定"," at pages\\information\\information.vue:655"):t.cancel&&__f__("log","用户点击取消"," at pages\\information\\information.vue:657")}})}})},countTerminalNum:function(t,e){var n=this;if(1==e)for(var a=0;a<t.length;a++)t[a].showTime=n.formatTime(t[a].timeID);else{var i=0;for(a=0;a<t.length;a++)0==t[a].state&&i++,n.terminalNum=i}return n.setAllNum(),t},judgeTerminalNum:function(){var t=this;t.terminalNum>99?t.terminalShowNum="99+":t.terminalShowNum=t.terminalNum},setAllNum:function(){var t=this,e=parseInt(t.steadyNum)+parseInt(t.terminalNum)+parseInt(t.transientNum);uni.setStorageSync("allNum",e),e=e>99?"99+":""+e,0!=e?uni.setTabBarBadge({index:0,text:e}):uni.removeTabBarBadge({index:0})},refresh:function(){this.communicateState(),this.transientList=[],this.steadyList=[],this.terminalList=[],this.noTransient="",this.noSteady="",this.noTerminal="",this.steadyNum=0,this.terminalNum=0,this.transientNum=0,this.terminalPage=1,this.steadyPage=1,this.transientPage=1,this.$nextTick(function(){this.queryTransientList(),this.querySteadyList(),this.queryTerminalList()})}},onShow:function(){var t=this,e=uni.getStorageSync("tabNum");e&&(t.refresh(),t.tabNum=e,t.current=e-1,uni.removeStorageSync("tabNum"))},onLoad:function(t){var e=this;e.queryTransientList(),e.querySteadyList(),e.queryTerminalList(),e.scrollH(),uni.$on("tabNum",function(t){e.refresh(),e.tabNum=t,e.current=t-1})},onPullDownRefresh:function(){this.refresh(),setTimeout(function(){uni.stopPullDownRefresh()},2e3)}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},feed:function(t,e,n){}},[["ac9f","common/runtime","common/vendor"]]]);
});
require('pages/information/information.js');
__wxRoute = 'pages/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me.js';

define('pages/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{"21fa":function(e,n,o){"use strict";o.r(n);var u=o("ad94"),t=o.n(u);for(var r in u)"default"!==r&&function(e){o.d(n,e,function(){return u[e]})}(r);n["default"]=t.a},"2a6c":function(e,n,o){"use strict";var u,t=function(){var e=this,n=e.$createElement;e._self._c},r=[];o.d(n,"b",function(){return t}),o.d(n,"c",function(){return r}),o.d(n,"a",function(){return u})},5956:function(e,n,o){"use strict";var u=o("dfc6"),t=o.n(u);t.a},abf8:function(e,n,o){"use strict";(function(e){o("986c"),o("921b");u(o("66fd"));var n=u(o("c02a"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("6e42")["createPage"])},ad94:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return o.e("components/personalModule").then(o.bind(null,"9203"))},t={data:function(){return{phoneNum:"",roleName:"",userId:"",roleCode:1,userName:"",showName:""}},methods:{jumpToSetting:function(){e.navigateTo({url:"../setting/setting"})},jumpToLevelUp:function(){e.navigateTo({url:"../levelUp/levelUp"})},jumpToModifyPassword:function(){e.navigateTo({url:"../modifyPasswordSetpassword/modifyPasswordSetpassword"})},jumpToModifyUserPhoneNum:function(){var n=this;e.navigateTo({url:"../modifyUserPhoneNum/modifyUserPhoneNum?phoneNum="+n.phoneNum})},jumpToUserAgreement:function(){e.navigateTo({url:"../userAgreement/userAgreement"})},jumpToSystemIntroduce:function(){e.navigateTo({url:"../systemIntroduce/systemIntroduce"})},jumpToCompanyIntroduce:function(){e.navigateTo({url:"../companyIntroduce/companyIntroduce"})},jumpToSetNewMessage:function(){e.navigateTo({url:"../setNewMessage/setNewMessage"})},jumpToUs:function(){e.navigateTo({url:"../us/us"})}},onLoad:function(){var n=this;if(n.judgeLogin()){var o=e.getStorageSync("userInfo");n.roleName=o.roleName,n.userId=o.userId,n.phoneNum=o.phone,n.roleCode=o.roleCode,n.userName=o.userName,null!=n.userName&&void 0!=n.userName&&""!=n.userName?n.showName=n.userName:n.showName=n.userId.substring(0,15)+"..."}},onShow:function(){var n=this;if(n.judgeLogin()){var o=e.getStorageSync("userInfo");n.roleCode!=o.roleCode&&(n.roleName=o.roleName,n.roleCode=o.roleCode)}},components:{personalModule:u}};n.default=t}).call(this,o("6e42")["default"])},c02a:function(e,n,o){"use strict";o.r(n);var u=o("2a6c"),t=o("21fa");for(var r in t)"default"!==r&&function(e){o.d(n,e,function(){return t[e]})}(r);o("5956");var a,s=o("f0c5"),i=Object(s["a"])(t["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=i.exports},dfc6:function(e,n,o){}},[["abf8","common/runtime","common/vendor"]]]);
});
require('pages/me/me.js');
__wxRoute = 'pages/levelUp/levelUp';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/levelUp/levelUp.js';

define('pages/levelUp/levelUp.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/levelUp/levelUp"],{"017f":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"角色升级",errorMsg:"",levelUpFlag:0,content:"",loadingFlag:!1,disabledFlag:!1}},methods:{levelUp:function levelUp(){var that=this;that.judgeLogin()&&(that.disabledFlag=!0,that.loadingFlag=!0,uni.request({url:that.serverUrl+"/user/roleUpdate",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,devCode:that.cid(),referralCode:that.content},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(that.loadingFlag=!1,that.disabledFlag=!1,"10000"==res.data.resultCode){var userInfo=uni.getStorageSync("userInfo"),info=eval(res.data.data);userInfo.roleName=info.roleName,userInfo.roleCode=info.roleCode,uni.setStorageSync("userInfo",userInfo),uni.showToast({icon:"success",title:"升级成功",duration:2e3,mask:!0}),setTimeout(function(){uni.switchTab({url:"../me/me"})},2e3)}else that.errorMsg=that.showError(res.data.msgCode,res.data.msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0},5e3)},fail:function(e){that.loadingFlag=!1,that.disabledFlag=!1,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\levelUp\\levelUp.vue:87"):e.cancel&&__f__("log","用户点击取消"," at pages\\levelUp\\levelUp.vue:89")}})}}))},inputText:function(e){var t=this;6==e.detail.value.length?t.levelUpFlag=1:t.levelUpFlag=0,t.content=e.detail.value}},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"1b4b":function(e,t,a){"use strict";var n=a("4977"),o=a.n(n);o.a},"1b70":function(e,t,a){"use strict";a.r(t);var n=a("017f"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},4977:function(e,t,a){},9383:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return n})},a8c6:function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("ce5c"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},ce5c:function(e,t,a){"use strict";a.r(t);var n=a("9383"),o=a("1b70");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("1b4b");var l,u=a("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);t["default"]=c.exports}},[["a8c6","common/runtime","common/vendor"]]]);
});
require('pages/levelUp/levelUp.js');
__wxRoute = 'pages/transientDetails/transientDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/transientDetails/transientDetails.js';

define('pages/transientDetails/transientDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/transientDetails/transientDetails"],{"06a4":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"暂态消息详情",radioFlag:0,eventDetailIndex:"",errorFlag:2,baseInfo:{},eigenvalueList:[],wave:{},sendAgain:"更新",second:60,sendAgainFlag:0,backNumber:0,eventMsgIndex:"",scrollHeight:"",loadingFlag:!1,disabledFlag:!1,judgeFlag:0,sagReason:"",transientName:"",sucessNum:0,baseFlag:0}},methods:{scrollH:function(){var e=this,t=uni.getSystemInfoSync(),a=t.windowWidth,n=750/a,s=t.windowHeight,i=t.statusBarHeight;e.scrollHeight=parseInt((s-i)*n-94)+"rpx"},changeRadioFlag:function(e){this.radioFlag=e},confirmJudge:function(e){var t=this,a="";0==uni.getStorageSync("userInfo").roleCode?(a=0==e?"确认对设备无影响？":"确认对设备有影响？",uni.showModal({title:"提示",content:a,success:function(a){if(a.confirm)t.judgeLogin()&&uni.request({url:t.serverUrl+"/eventmsg/eventDetailEvaluate",method:"POST",data:{eventDetailIndex:t.eventDetailIndex,evaluate:e,userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(a){uni.hideLoading(),"10000"==a.data.resultCode?(uni.showModal({title:"提示",content:"评价更新成功",showCancel:!1}),t.judgeFlag=e):uni.showModal({title:"提示",content:"评价更新失败，请重试",confirmText:"重试",success:function(e){e.confirm?t.updateEvaluate():e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:375")}})},fail:function(e){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\transientDetails\\transientDetails.vue:388"):e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:390")}})}});else if(a.cancel)return}})):uni.showModal({title:"提示",content:"您暂无评价权限",showCancel:!1})},eventDetailBaseInfo:function eventDetailBaseInfo(){var that=this;uni.request({url:that.serverUrl+"/eventmsg/eventDetailBaseInfo",method:"POST",data:{eventMsgIndex:that.eventMsgIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){"10000"==res.data.resultCode?(that.baseInfo=eval(res.data.data),that.baseInfo.showTime=that.formatTime_mills(that.baseInfo.timeID),that.baseInfo.eventValue<100?that.transientName="暂降":that.transientName="暂升",that.judgeFlag=that.baseInfo.evaluate,that.sucessNum++,that.baseFlag=0,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag)):(that.sucessNum++,that.baseFlag=1,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag))},fail:function(e){that.sucessNum++,that.baseFlag=1,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag)}})},eventDetailEigenvalue:function eventDetailEigenvalue(){var that=this;uni.request({url:that.serverUrl+"/eventmsg/eventDetailEigenvalue",method:"POST",data:{eventDetailIndex:that.eventDetailIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){"10000"==res.data.resultCode?(that.backNumber=res.data.backNumber,that.backNumber>0&&(that.sagReason=res.data.sagReason,that.eigenvalueList=eval(res.data.data)),that.sucessNum++,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag)):(that.backNumber=0,that.sucessNum++,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag))},fail:function(e){that.backNumber=0,that.sucessNum++,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag)}})},eventDetailWave:function eventDetailWave(){var that=this;uni.request({url:that.serverUrl+"/eventmsg/eventDetailWave",method:"POST",data:{eventDetailIndex:that.eventDetailIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){"10000"==res.data.resultCode?(that.wave=eval(res.data.data),that.sucessNum++,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag)):(that.sucessNum++,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag))},fail:function(e){that.sucessNum++,3==that.sucessNum&&(uni.hideLoading(),that.errorFlag=that.baseFlag)}})},updateEvaluate:function(){var e=this;if(e.judgeLogin()){if(e.sendAgainFlag=1,uni.request({url:e.serverUrl+"/eventmsg/eventDetailEvaluate",method:"POST",data:{eventDetailIndex:e.eventDetailIndex,evaluate:e.radioFlag,userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){uni.hideLoading(),"10000"==t.data.resultCode?uni.showModal({title:"提示",content:"评价更新成功",showCancel:!1}):uni.showModal({title:"提示",content:"评价更新失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.updateEvaluate():t.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:564")}})},fail:function(e){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\transientDetails\\transientDetails.vue:577"):e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:579")}})}}),60!=e.second)return;e.second--;var t=setInterval(function(){e.sendAgain="更新("+e.second--+"S)"},1e3);setTimeout(function(){clearInterval(t),e.sendAgain="更新",e.second=60,e.sendAgainFlag=0},61e3)}},applyReport:function(){var e=this;e.judgeLogin()&&(e.disabledFlag=!0,e.loadingFlag=!0,uni.request({url:e.serverUrl+"/report/eventDetailReportApply",method:"POST",data:{eventDetailIndex:e.eventDetailIndex,userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){e.loadingFlag=!1,e.disabledFlag=!1,"10000"==t.data.resultCode?(uni.showModal({title:"提示",content:"申请报告成功",showCancel:!1}),e.eventDetailBaseInfo()):uni.showModal({title:"提示",content:e.showError(t.data.msgCode,t.data.msg),confirmText:"重试",success:function(t){t.confirm?e.applyReport():t.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:635")}})},fail:function(t){e.loadingFlag=!1,e.disabledFlag=!1,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\transientDetails\\transientDetails.vue:650"):e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:652")}})}}))},downloadReport:function(){var e=this;e.judgeLogin()&&uni.request({url:e.serverUrl+"/report/eventDetailReportDownLoad",method:"POST",data:{eventDetailIndex:e.eventDetailIndex,userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){uni.hideLoading(),"10000"==t.data.resultCode?(uni.showLoading({title:"正在下载",mask:!0}),uni.downloadFile({url:t.data.data.reportUrl,success:function(t){uni.hideLoading(),200===t.statusCode?uni.saveFile({tempFilePath:t.tempFilePath,success:function(e){e.savedFilePath;uni.showModal({title:"下载报告成功",content:"下载成功，是否直接打开",success:function(a){a.confirm?uni.openDocument({filePath:t.tempFilePath}):e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:700")}})},fail:function(){uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.downloadReport():t.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:714")}})}}):uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.downloadReport():t.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:730")}})},fail:function(){uni.hideLoading(),uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.downloadReport():t.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:746")}})}})):uni.showModal({title:"提示",content:"下载报告失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.downloadReport():t.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:761")}})},fail:function(e){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\transientDetails\\transientDetails.vue:774"):e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:776")}})}})},previewPic:function(e){null!=e&&void 0!=e&&""!=e&&0!=e.length&&uni.previewImage({urls:[e],current:0,longPressActions:{itemList:["保存图片"],success:function(t){0==t.tapIndex&&(uni.showLoading({title:"图片保存中"}),uni.downloadFile({url:e,success:function(e){var t=e.tempFilePath;uni.saveImageToPhotosAlbum({filePath:t,success:function(){uni.showToast({icon:"success",title:"保存成功",duration:2e3})}})},complete:function(){uni.hideLoading()}}))},fail:function(e){uni.showModal({title:"保存失败",content:e.errMsg,showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\transientDetails\\transientDetails.vue:826"):e.cancel&&__f__("log","用户点击取消"," at pages\\transientDetails\\transientDetails.vue:828")}})}}})},retry:function(){this.eventDetailBaseInfo(),this.eventDetailEigenvalue(),this.eventDetailWave()}},onLoad:function(e){this.scrollH(),uni.showLoading({mask:!0}),this.eventDetailIndex=e.eventDetailIndex,this.eventMsgIndex=e.eventMsgIndex,this.eventDetailBaseInfo(),this.eventDetailEigenvalue(),this.eventDetailWave()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},1504:function(e,t,a){"use strict";a.r(t);var n=a("06a4"),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},"60dd":function(e,t,a){},6610:function(e,t,a){"use strict";var n=a("60dd"),s=a.n(n);s.a},db65:function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("e8e6"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},e8e6:function(e,t,a){"use strict";a.r(t);var n=a("f1ba"),s=a("1504");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("6610");var o,l=a("f0c5"),u=Object(l["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=u.exports},f1ba:function(e,t,a){"use strict";var n,s=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n})}},[["db65","common/runtime","common/vendor"]]]);
});
require('pages/transientDetails/transientDetails.js');
__wxRoute = 'pages/preview/preview';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/preview/preview.js';

define('pages/preview/preview.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/preview/preview"],{"2eb8":function(n,t,e){"use strict";var r=e("53b1"),u=e.n(r);u.a},"53b1":function(n,t,e){},"78db":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{url:""}},methods:{},onLoad:function(n){this.url=n.url,plus.screen.lockOrientation("landscape-primary")},onUnload:function(){plus.screen.lockOrientation("portrait-primary")}};t.default=r},"8fc3":function(n,t,e){"use strict";(function(n){e("986c"),e("921b");r(e("66fd"));var t=r(e("d8a7"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d8a7:function(n,t,e){"use strict";e.r(t);var r=e("e720"),u=e("e6fc");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("2eb8");var a,o=e("f0c5"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=i.exports},e6fc:function(n,t,e){"use strict";e.r(t);var r=e("78db"),u=e.n(r);for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);t["default"]=u.a},e720:function(n,t,e){"use strict";var r,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return r})}},[["8fc3","common/runtime","common/vendor"]]]);
});
require('pages/preview/preview.js');
__wxRoute = 'pages/vercode/vercode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/vercode/vercode.js';

define('pages/vercode/vercode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vercode/vercode"],{"090d":function(e,t,n){},"8a6d":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},d0da:function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},keyboard=function(){return __webpack_require__.e("components/keyboard").then(__webpack_require__.bind(null,"875f"))},_default={data:function(){return{phoneNum:"",errorMsg:"",showFlag:0,valueList:[],vercode:"重新获取",second:60}},methods:{bindKeyEvent:function bindKeyEvent(val){var that=this;that.valueList=val,6==that.valueList.length&&uni.request({url:that.serverUrl+"/user/login",method:"POST",data:{phone:that.phoneNum,devCode:that.cid(),key:that.valueList.join(""),type:0},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if("10000"==res.data.resultCode){var userInfo=eval(res.data.data);userInfo.phoneNum=that.phoneNum,uni.setStorageSync("loginTime",new Date),uni.setStorageSync("userInfo",userInfo),uni.setStorageSync("loginType",0),uni.switchTab({url:"../information/information"})}else that.errorMsg=that.showError(res.data.msgCode,res.data.msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0},5e3)},fail:function(e){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\vercode\\vercode.vue:108"):e.cancel&&__f__("log","用户点击取消"," at pages\\vercode\\vercode.vue:110")}})}})},getVerCode:function(e){var t=this;uni.request({url:t.serverUrl+"/user/authCode",method:"POST",data:{phone:t.phoneNum,devCode:t.cid(),type:0},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){t.loadingFlag=!0,"10000"==e.data.resultCode||(t.errorMsg=t.showError(e.data.msgCode,e.data.msg),t.showFlag=1,setTimeout(function(){t.errorMsg="",t.showFlag=0},5e3))},fail:function(e){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\vercode\\vercode.vue:152"):e.cancel&&__f__("log","用户点击取消"," at pages\\vercode\\vercode.vue:154")}})}}),this.readSecond()},readSecond:function(){var e=this;if(60==e.second){e.second--;var t=setInterval(function(){e.vercode="重新获取("+e.second--+")"},1e3);setTimeout(function(){clearInterval(t),e.vercode="重新获取",e.second=60},61e3)}}},onLoad:function(e){this.phoneNum=e.phoneNum,uni.hideKeyboard(),this.readSecond()},components:{back:back,keyboard:keyboard}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},d1e7:function(e,t,n){"use strict";n.r(t);var o=n("d0da"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},e01c:function(e,t,n){"use strict";var o=n("090d"),r=n.n(o);r.a},e96c:function(e,t,n){"use strict";n.r(t);var o=n("8a6d"),r=n("d1e7");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("e01c");var u,c=n("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=s.exports},f6ad:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");o(n("66fd"));var t=o(n("e96c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f6ad","common/runtime","common/vendor"]]]);
});
require('pages/vercode/vercode.js');
__wxRoute = 'pages/forgetPassword/forgetPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/forgetPassword/forgetPassword.js';

define('pages/forgetPassword/forgetPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forgetPassword/forgetPassword"],{"0a8e":function(e,t,n){"use strict";var a,u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},"4c50":function(e,t,n){"use strict";n.r(t);var a=n("0a8e"),u=n("7bce");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("ee22");var r,l=n("f0c5"),s=Object(l["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=s.exports},"5db7":function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("4c50"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7bce":function(e,t,n){"use strict";n.r(t);var a=n("f19f"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=u.a},"89c4":function(e,t,n){},ee22:function(e,t,n){"use strict";var a=n("89c4"),u=n.n(a);u.a},f19f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/back").then(n.bind(null,"1898"))},u={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"忘记密码",phoneNum:"",resetFlag:0,nextFlag:0,errorMsg:"",disabledFlag:!1}},methods:{reset:function(){this.phoneNum="",this.resetFlag=0,this.nextFlag=0},changePhoneNum:function(e){var t=this;e.detail.value.length>0?(t.phoneNum=e.detail.value,t.resetFlag=1):(t.phoneNum="",t.resetFlag=0),e.detail.value.length>=10?t.nextFlag=1:t.nextFlag=0},nextPage:function(){var t=this;if(t.disabledFlag=!0,11!=t.phoneNum.length)return t.showFlag=1,t.errorMsg="请检查号码",void setTimeout(function(){t.errorMsg="",t.showFlag=0,t.disabledFlag=!1},5e3);t.disabledFlag=!1,e.navigateTo({url:"../setNewPassword/setNewPassword?phoneNum="+this.phoneNum})}},components:{back:a}};t.default=u}).call(this,n("6e42")["default"])}},[["5db7","common/runtime","common/vendor"]]]);
});
require('pages/forgetPassword/forgetPassword.js');
__wxRoute = 'pages/forgetPasswordVercode/forgetPasswordVercode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/forgetPasswordVercode/forgetPasswordVercode.js';

define('pages/forgetPasswordVercode/forgetPasswordVercode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forgetPasswordVercode/forgetPasswordVercode"],{"2c20":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{phoneNum:"",pageNameFlag:1,showFlag:0,pageName:"忘记密码",text:"验证码将发送到绑定手机号",vercode:"",resetFlag:0,nextFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,second:60,errorMsg:"",loadingFlag:!1,disabledFlag:!1}},methods:{changeVercode:function(e){var t=this;e.detail.value.length>0?(t.vercode=e.detail.value,t.resetFlag=1):(t.vercode="",t.resetFlag=0),6==e.detail.value.length?t.nextFlag=1:t.nextFlag=0},sendVercodeAgain:function(){var e=this;if(e.sendAgainFlag=1,uni.request({url:e.serverUrl+"/user/authCode",method:"POST",data:{phone:e.phoneNumTrue,devCode:e.cid(),type:3},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){"10000"==t.data.resultCode||(e.errorMsg=e.showError(t.data.msgCode,t.data.msg),e.showFlag=1,setTimeout(function(){e.errorMsg="",e.showFlag=0},5e3))},fail:function(){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\forgetPasswordVercode\\forgetPasswordVercode.vue:104"):e.cancel&&__f__("log","用户点击取消"," at pages\\forgetPasswordVercode\\forgetPasswordVercode.vue:106")}})}}),60==e.second){e.second--;var t=setInterval(function(){e.sendAgain="重新发送("+e.second--+"S)"},1e3);setTimeout(function(){clearInterval(t),e.sendAgain="发送验证码",e.second=60,e.sendAgainFlag=0},61e3)}},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},nextPage:function nextPage(){var that=this;that.disabledFlag=!0,that.loadingFlag=!0,uni.request({url:that.serverUrl+"/user/register",method:"POST",data:{phone:that.phoneNumTrue,devCode:that.cid(),code:that.vercode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(that.loadingFlag=!1,that.disabledFlag=!1,"10000"==res.data.resultCode){var userInfo=eval(res.data.data);userInfo.phoneNum=that.phoneNumTrue,uni.setStorageSync("userInfo",userInfo),uni.navigateTo({url:"../setNewPassword/setNewPassword?phoneNum="+that.phoneNumTrue})}else that.errorMsg=that.showError(res.data.msgCode,res.data.msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0},5e3)},fail:function(e){that.loadingFlag=!1,that.disabledFlag=!1,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\forgetPasswordVercode\\forgetPasswordVercode.vue:175"):e.cancel&&__f__("log","用户点击取消"," at pages\\forgetPasswordVercode\\forgetPasswordVercode.vue:177")}})}})}},onLoad:function(e){this.phoneNumTrue=e.phoneNum,this.phoneNum=e.phoneNum.substr(0,3)+"****"+e.phoneNum.substr(7,11)},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"6b6f":function(e,t,a){"use strict";var n=a("eed6"),o=a.n(n);o.a},"86d7":function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("a778"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},9847:function(e,t,a){"use strict";a.r(t);var n=a("2c20"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},a778:function(e,t,a){"use strict";a.r(t);var n=a("e544"),o=a("9847");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("6b6f");var s,u=a("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=c.exports},e544:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return n})},eed6:function(e,t,a){}},[["86d7","common/runtime","common/vendor"]]]);
});
require('pages/forgetPasswordVercode/forgetPasswordVercode.js');
__wxRoute = 'pages/setNewPassword/setNewPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setNewPassword/setNewPassword.js';

define('pages/setNewPassword/setNewPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setNewPassword/setNewPassword"],{"122a":function(e,a,t){},7069:function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=function(){return t.e("components/back").then(t.bind(null,"1898"))},o={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"忘记密码",phoneNum:"",passwordFlag:!0,againFlag:!0,password:"",again:"",seeFlag:0,seeAgainFlag:0,loadingFlag:!1,doneFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,resetFlag:0,vercode:"",second:60,errorMsg:"",disabledFlag:!1}},methods:{changeVercode:function(e){var a=this;e.detail.value.length>0?(a.vercode=e.detail.value,a.resetFlag=1):(a.vercode="",a.resetFlag=0),6==e.detail.value.length?a.nextFlag=1:a.nextFlag=0},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},setPassword:function(e){var a=this;e.detail.value.length>0?(a.seeFlag=1,a.password=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.again.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeFlag=0,a.password="")},setAgain:function(e){var a=this;e.detail.value.length>0?(a.seeAgainFlag=1,a.again=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.password.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeAgainFlag=0,a.again="")},see:function(e){this.passwordFlag=e},seeAgain:function(e){this.againFlag=e},sendVercodeAgain:function(){var a=this;60==a.second&&(a.sendAgainFlag=1,e.request({url:a.serverUrl+"/user/authCode",method:"POST",data:{phone:a.phoneNum,devCode:a.cid(),type:3},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){if("10000"==e.data.resultCode){a.second--;var t=setInterval(function(){a.sendAgain="重新发送("+a.second--+"S)"},1e3);setTimeout(function(){clearInterval(t),a.sendAgain="发送验证码",a.second=60,a.sendAgainFlag=0},61e3)}else a.errorMsg=a.showError(e.data.msgCode,e.data.msg),a.showFlag=1,setTimeout(function(){a.errorMsg="",a.showFlag=0,a.sendAgainFlag=0},5e3)},fail:function(){a.sendAgainFlag=0,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?n("log","用户点击确定"," at pages\\setNewPassword\\setNewPassword.vue:187"):e.cancel&&n("log","用户点击取消"," at pages\\setNewPassword\\setNewPassword.vue:189")}})}}))},complete:function(){var a=this,t=a.password.trim(),s=a.again.trim();a.disabledFlag=!0,t.trim().length>=6&&s.trim().length>=6&&t.trim()==s.trim()&&""!=a.vercode?e.showLoading({title:"加载中",mask:!0,success:function(){e.request({url:a.serverUrl+"/user/resetPsd",method:"POST",data:{phone:a.phoneNum,devCode:a.cid(),password:t.trim(),code:a.vercode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){e.hideLoading(),"10000"==t.data.resultCode?(e.showToast({title:"修改完成",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){a.disabledFlag=!1,e.switchTab({url:"../information/information"})},2e3)):(a.errorMsg=a.showError(t.data.msgCode,t.data.msg),a.showFlag=1,setTimeout(function(){a.errorMsg="",a.showFlag=0,a.disabledFlag=!1},5e3))},fail:function(t){e.hideLoading(),a.disabledFlag=!1,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?n("log","用户点击确定"," at pages\\setNewPassword\\setNewPassword.vue:253"):e.cancel&&n("log","用户点击取消"," at pages\\setNewPassword\\setNewPassword.vue:255")}})}})}}):(a.disabledFlag=!1,e.showModal({title:"设置密码失败",content:"两次密码不相同或者验证码还未输入",showCancel:!1,success:function(e){e.confirm?n("log","用户点击确定"," at pages\\setNewPassword\\setNewPassword.vue:271"):e.cancel&&n("log","用户点击取消"," at pages\\setNewPassword\\setNewPassword.vue:273")}}))}},onLoad:function(e){this.phoneNum=e.phoneNum},components:{back:s}};a.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},"902b":function(e,a,t){"use strict";t.r(a);var n=t("7069"),s=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=s.a},9085:function(e,a,t){"use strict";(function(e){t("986c"),t("921b");n(t("66fd"));var a=n(t("dba4"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},"99a5":function(e,a,t){"use strict";var n,s=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"b",function(){return s}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return n})},acae:function(e,a,t){"use strict";var n=t("122a"),s=t.n(n);s.a},dba4:function(e,a,t){"use strict";t.r(a);var n=t("99a5"),s=t("902b");for(var o in s)"default"!==o&&function(e){t.d(a,e,function(){return s[e]})}(o);t("acae");var i,r=t("f0c5"),l=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=l.exports}},[["9085","common/runtime","common/vendor"]]]);
});
require('pages/setNewPassword/setNewPassword.js');
__wxRoute = 'pages/fastLogin/fastLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fastLogin/fastLogin.js';

define('pages/fastLogin/fastLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fastLogin/fastLogin"],{1159:function(e,n,t){"use strict";var a,o=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return o}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return a})},"42fb":function(e,n,t){"use strict";var a=t("d6fc"),o=t.n(a);o.a},"64f8":function(e,n,t){"use strict";t.r(n);var a=t("1159"),o=t("dd71");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("42fb");var r,l=t("f0c5"),c=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=c.exports},9022:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return t.e("components/back").then(t.bind(null,"1898"))},o={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"手机快速注册",phoneNum:"",resetFlag:0,nextFlag:0,chooseFlag:1,errorMsg:"",disabledFlag:!1}},methods:{reset:function(){this.phoneNum="",this.resetFlag=0,this.nextFlag=0},changePhoneNum:function(e){var n=this;e.detail.value.length>0?(n.phoneNum=e.detail.value,n.resetFlag=1):(n.phoneNum="",n.resetFlag=0),e.detail.value.length>=10&&1==n.chooseFlag?n.nextFlag=1:n.nextFlag=0},nextPage:function(){var n=this;if(n.disabledFlag=!0,11!=n.phoneNum.length)return n.showFlag=1,n.errorMsg="请检查号码",void setTimeout(function(){n.errorMsg="",n.showFlag=0,n.disabledFlag=!1},5e3);n.disabledFlag=!1,e.navigateTo({url:"../fastLoginVercode/fastLoginVercode?phoneNum="+n.phoneNum})},changeChooseFlag:function(e){var n=this;2==e?1==n.chooseFlag?n.chooseFlag=0:n.chooseFlag=1:n.chooseFlag=e,0!=n.chooseFlag?1==n.chooseFlag&&n.phoneNum.length>=10&&(n.nextFlag=1):n.nextFlag=0},jumpToUserAgreement:function(){e.navigateTo({url:"../userAgreement/userAgreement"})},jumpToPrivacyAgreement:function(){e.navigateTo({url:"../privacyAgreement/privacyAgreement"})}},onLoad:function(){},components:{back:a}};n.default=o}).call(this,t("6e42")["default"])},a992:function(e,n,t){"use strict";(function(e){t("986c"),t("921b");a(t("66fd"));var n=a(t("64f8"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},d6fc:function(e,n,t){},dd71:function(e,n,t){"use strict";t.r(n);var a=t("9022"),o=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=o.a}},[["a992","common/runtime","common/vendor"]]]);
});
require('pages/fastLogin/fastLogin.js');
__wxRoute = 'pages/fastLoginVercode/fastLoginVercode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fastLoginVercode/fastLoginVercode.js';

define('pages/fastLoginVercode/fastLoginVercode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fastLoginVercode/fastLoginVercode"],{"0275":function(e,t,a){"use strict";a.r(t);var n=a("a854"),o=a("1425");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("e66d");var s,u=a("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=c.exports},1425:function(e,t,a){"use strict";a.r(t);var n=a("1fce"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"1fce":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{phoneNum:"",phoneNumTrue:"",pageNameFlag:1,showFlag:0,pageName:"手机快速注册",text:"验证码将发送到绑定手机号",vercode:"",resetFlag:0,nextFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,second:60,errorMsg:"",loadingFlag:!1,disabledFlag:!1}},methods:{changeVercode:function(e){var t=this;e.detail.value.length>0?(t.vercode=e.detail.value,t.resetFlag=1):(t.vercode="",t.resetFlag=0),6==e.detail.value.length?t.nextFlag=1:t.nextFlag=0},sendVercodeAgain:function(){var e=this;60==e.second&&(e.sendAgainFlag=1,uni.request({url:e.serverUrl+"/user/authCode",method:"POST",data:{phone:e.phoneNumTrue,devCode:e.cid(),type:1},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){if("10000"==t.data.resultCode){e.second--;var a=setInterval(function(){e.sendAgain="重新发送("+e.second--+"S)"},1e3);setTimeout(function(){clearInterval(a),e.sendAgain="发送验证码",e.second=60,e.sendAgainFlag=0},61e3)}else e.errorMsg=e.showError(t.data.msgCode,t.data.msg),e.showFlag=1,setTimeout(function(){e.errorMsg="",e.showFlag=0,e.sendAgainFlag=0},5e3)},fail:function(){e.sendAgainFlag=0,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\fastLoginVercode\\fastLoginVercode.vue:119"):e.cancel&&__f__("log","用户点击取消"," at pages\\fastLoginVercode\\fastLoginVercode.vue:121")}})}}))},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},nextPage:function nextPage(){var that=this;that.disabledFlag=!0,that.loadingFlag=!0,that.nextFlag=0,uni.request({url:that.serverUrl+"/user/register",method:"POST",data:{phone:that.phoneNumTrue,devCode:that.cid(),code:that.vercode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(that.loadingFlag=!1,"10000"==res.data.resultCode){var userInfo=eval(res.data.data);userInfo.phoneNum=that.phoneNumTrue,uni.setStorageSync("userInfo",userInfo),that.disabledFlag=!1,that.nextFlag=1,uni.navigateTo({url:"../fastLoginSetPassword/fastLoginSetPassword?phoneNum="+that.phoneNumTrue})}else that.errorMsg=that.showError(res.data.msgCode,res.data.msg),that.showFlag=1,setTimeout(function(){that.errorMsg="",that.showFlag=0,that.disabledFlag=!1,that.nextFlag=1},5e3)},fail:function(e){that.loadingFlag=!1,that.disabledFlag=!1,that.nextFlag=1,uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\fastLoginVercode\\fastLoginVercode.vue:187"):e.cancel&&__f__("log","用户点击取消"," at pages\\fastLoginVercode\\fastLoginVercode.vue:189")}})}})}},onLoad:function(e){this.phoneNumTrue=e.phoneNum,this.phoneNum=e.phoneNum.substr(0,3)+"****"+e.phoneNum.substr(7,11),this.sendVercodeAgain()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"71ea":function(e,t,a){},a854:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return n})},aec7:function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("0275"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},e66d:function(e,t,a){"use strict";var n=a("71ea"),o=a.n(n);o.a}},[["aec7","common/runtime","common/vendor"]]]);
});
require('pages/fastLoginVercode/fastLoginVercode.js');
__wxRoute = 'pages/fastLoginSetPassword/fastLoginSetPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fastLoginSetPassword/fastLoginSetPassword.js';

define('pages/fastLoginSetPassword/fastLoginSetPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fastLoginSetPassword/fastLoginSetPassword"],{"0f33":function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=function(){return t.e("components/back").then(t.bind(null,"1898"))},o={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"手机快速注册",phoneNum:"",passwordFlag:!0,againFlag:!0,password:"",again:"",seeFlag:0,seeAgainFlag:0,loadingFlag:!1,doneFlag:0,errorMsg:"",disabledFlag:!1}},methods:{setPassword:function(e){var a=this;e.detail.value.length>0?(a.seeFlag=1,a.password=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.again.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeFlag=0,a.password="")},setAgain:function(e){var a=this;e.detail.value.length>0?(a.seeAgainFlag=1,a.again=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.password.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeAgainFlag=0,a.again="")},see:function(e){this.passwordFlag=e},seeAgain:function(e){this.againFlag=e},complete:function(){var a=this,t=a.password,s=a.again;a.disabledFlag=!0,t.trim().length>=6&&s.trim().length>=6&&t.trim()==s.trim()?e.showLoading({title:"加载中",mask:!0,success:function(){e.request({url:a.serverUrl+"/user/setPsd",method:"POST",data:{userId:e.getStorageSync("userInfo").userId,devCode:a.cid(),password:t.trim()},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){e.hideLoading(),"10000"==t.data.resultCode?(e.showToast({title:"设置成功",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){a.disabledFlag=!1,e.switchTab({url:"../information/information"})},2e3)):(a.errorMsg=a.showError(t.data.msgCode,t.data.msg),a.showFlag=1,setTimeout(function(){a.errorMsg="",a.showFlag=0,a.disabledFlag=!1},5e3))},fail:function(t){e.hideLoading(),a.disabledFlag=!1,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",success:function(e){e.confirm?n("log","用户点击确定"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:155"):e.cancel&&n("log","用户点击取消"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:157")}})}})}}):(a.disabledFlag=!1,e.showModal({title:"设置密码失败",content:"两次输入的密码不相同，请重新输入",showCancel:!1,success:function(e){e.confirm?n("log","用户点击确定"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:174"):e.cancel&&n("log","用户点击取消"," at pages\\fastLoginSetPassword\\fastLoginSetPassword.vue:176")}}))}},onLoad:function(e){this.phoneNum=e.phoneNum},components:{back:s}};a.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},"150e":function(e,a,t){"use strict";var n,s=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"b",function(){return s}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return n})},"80b7":function(e,a,t){},"9bee":function(e,a,t){"use strict";var n=t("80b7"),s=t.n(n);s.a},a6e42:function(e,a,t){"use strict";(function(e){t("986c"),t("921b");n(t("66fd"));var a=n(t("a78f"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},a78f:function(e,a,t){"use strict";t.r(a);var n=t("150e"),s=t("d576");for(var o in s)"default"!==o&&function(e){t.d(a,e,function(){return s[e]})}(o);t("9bee");var i,r=t("f0c5"),l=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=l.exports},d576:function(e,a,t){"use strict";t.r(a);var n=t("0f33"),s=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=s.a}},[["a6e42","common/runtime","common/vendor"]]]);
});
require('pages/fastLoginSetPassword/fastLoginSetPassword.js');
__wxRoute = 'pages/data/data';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/data/data.js';

define('pages/data/data.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/data/data"],{"283e":function(t,e,a){"use strict";a.r(e);var n=a("7ba2"),i=a("93ed");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("e330");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=u.exports},"70d0":function(t,e,a){},"7ba2":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return n})},8243:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{scrollHeight:"",lineInfo:{lineName:"暂无默认监测点",lineIndex:""},refreshText:"刷新",refreshFlag:0,second:60,firstName:"",secondName:"",thirdName:"",animationDataKVA:{},animationDataKVB:{},animationDataKVC:{},animationDataAA:{},animationDataAB:{},animationDataAC:{},animationDataVoltageA:{},animationDataVoltageB:{},animationDataVoltageC:{},animationDataCurrentA:{},animationDataCurrentB:{},animationDataCurrentC:{},minKVA:0,maxKVA:0,minKVB:0,maxKVB:0,minKVC:0,maxKVC:0,minAA:0,maxAA:0,minAB:0,maxAB:0,minAC:0,maxAC:0,currentAWidth:"60rpx",currentBWidth:"80rpx",currentCWidth:"100rpx",voltageAWidth:"130rpx",voltageBWidth:"145rpx",voltageCWidth:"160rpx",basicInfo:{gdName:"",subName:"",flow:0,flowRatio:0},constantlyInfo:{},showTime:"",intervalID:"done",allDevCount:0,errDevCount:0}},methods:{scrollH:function(){var e=this,a=t.getSystemInfoSync(),n=a.windowWidth,i=750/n,r=a.windowHeight,o=a.statusBarHeight;e.scrollHeight=parseInt((r-o)*i-666)+"rpx"},chooseLine:function(){var e=this;t.navigateTo({url:"../chooseLine/chooseLine"}),t.$on("lineInfoSelect",function(t){"done"!=e.intervalID&&(clearInterval(e.intervalID),e.intervalID="done",e.refreshText="刷新",e.second=60,e.refreshFlag=0),e.lineInfo=t,e.queryBasicInfo(),e.queryConstantlyInfo()}),t.$on("lineInfoQuery",function(t){"done"!=e.intervalID&&(clearInterval(e.intervalID),e.intervalID="done",e.refreshText="刷新",e.second=60,e.refreshFlag=0),e.lineInfo=t,e.queryBasicInfo(),e.queryConstantlyInfo()})},queryDevCount:function(){var e=this;e.judgeLogin()&&t.request({url:e.serverUrl+"/deviceMsg/devCountTJ",method:"POST",data:{userId:t.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){"10000"==n.data.resultCode?(e.allDevCount=n.data.data.allDevCount,e.errDevCount=n.data.data.errDevCount):t.showModal({title:"提示",content:"查询终端总数失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryDevCount():t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:469")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\data\\data.vue:482"):t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:484")}})}})},queryDefaultLine:function(){var e=this;e.judgeLogin()&&t.request({url:e.serverUrl+"/realtimeinfo/getLineId",method:"POST",data:{userIndex:t.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if("10000"==n.data.resultCode){var i=n.data.data;i&&(e.lineInfo=i,e.queryBasicInfo(),e.queryConstantlyInfo())}else t.showModal({title:"提示",content:"查询默认监测点失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryBasicInfo():t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:522")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\data\\data.vue:535"):t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:537")}})}})},queryBasicInfo:function(){var e=this;t.request({url:e.serverUrl+"/realtimeinfo/getLineBaseInfo",method:"POST",data:{lineIndex:e.lineInfo.lineIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if("10000"==n.data.resultCode)switch(e.basicInfo=n.data.data,e.basicInfo.pttype){case 0:e.firstName="A相",e.secondName="B相",e.thirdName="C相";break;case 1:e.firstName="AB相",e.secondName="BC相",e.thirdName="CA相";break;case 2:e.firstName="AB相",e.secondName="BC相",e.thirdName="";break}else t.showModal({title:"提示",content:"查询基础信息失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryBasicInfo():t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:586")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\data\\data.vue:599"):t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:601")}})}})},queryConstantlyInfo:function(){var e=this;t.request({url:e.serverUrl+"/realtimeinfo/getRealData",method:"POST",data:{lineIndex:e.lineInfo.lineIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if("10000"==n.data.resultCode){var i=n.data.data;e.constantlyInfo=i,e.showTime=e.formatTime_second(i.timeId),e.maxAA=i.iMax,e.maxAB=i.iMax,e.maxAC=i.iMax,e.maxKVA=i.vMax,e.maxKVB=i.vMax,e.maxKVC=i.vMax,e.createAnimationKVA(parseFloat(i.rmsVA)/parseFloat(i.vMax)*90),e.createAnimationKVB(parseFloat(i.rmsVB)/parseFloat(i.vMax)*90),e.createAnimationKVC(parseFloat(i.rmsVC)/parseFloat(i.vMax)*90),e.createAnimationAA(parseFloat(i.rmsIA)/parseFloat(i.iMax)*90),e.createAnimationAB(parseFloat(i.rmsIB)/parseFloat(i.iMax)*90),e.createAnimationAC(parseFloat(i.rmsIC)/parseFloat(i.iMax)*90),e.drawCurrent(i.baseWaveIA,i.baseWaveIB,i.baseWaveIC,-1*i.baseWavePhaseIA,-1*i.baseWavePhaseIB,-1*i.baseWavePhaseIC),e.drawVoltage(i.baseWaveVA,i.baseWaveVB,i.baseWaveVC,-1*i.baseWavePhaseVA,-1*i.baseWavePhaseVB,-1*i.baseWavePhaseVC)}else t.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryConstantlyInfo():t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:650")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\data\\data.vue:663"):t.cancel&&a("log","用户点击取消"," at pages\\data\\data.vue:665")}})}})},drawCurrent:function(t,e,a,n,i,r){var o=this;if(t==e&&t==a)o.currentAWidth="80rpx",o.currentBWidth="80rpx",o.currentCWidth="80rpx",o.createAnimationCurrentA(n,"20%"),o.createAnimationCurrentB(i,"20%"),o.createAnimationCurrentC(r,"20%");else if(t==e&&t>a)o.currentAWidth="80rpx",o.currentBWidth="80rpx",o.currentCWidth="60rpx",o.createAnimationCurrentA(n,"20%"),o.createAnimationCurrentB(i,"20%"),o.createAnimationCurrentC(r,"26.6%");else if(t==e&&t<a)o.currentAWidth="80rpx",o.currentBWidth="80rpx",o.currentCWidth="100rpx",o.createAnimationCurrentA(n,"20%"),o.createAnimationCurrentB(i,"20%"),o.createAnimationCurrentC(r,"16%");else if(t==a&&t>e)o.currentAWidth="80rpx",o.currentBWidth="60rpx",o.currentCWidth="80rpx",o.createAnimationCurrentA(n,"20%"),o.createAnimationCurrentB(i,"26.6%"),o.createAnimationCurrentC(r,"20%");else if(t==a&&t<e)o.currentAWidth="80rpx",o.currentBWidth="100rpx",o.currentCWidth="80rpx",o.createAnimationCurrentA(n,"20%"),o.createAnimationCurrentC(r,"16%"),o.createAnimationCurrentB(i,"20%");else if(e==a&&t>e)o.currentAWidth="100rpx",o.currentBWidth="80rpx",o.currentCWidth="80rpx",o.createAnimationCurrentA(n,"16%"),o.createAnimationCurrentB(i,"20%"),o.createAnimationCurrentC(r,"20%");else if(e==a&&t<e)o.currentAWidth="60rpx",o.currentBWidth="80rpx",o.currentCWidth="80rpx",o.createAnimationCurrentA(n,"26.6%"),o.createAnimationCurrentB(i,"20%"),o.createAnimationCurrentC(r,"20%");else{var c=[];c.push({name:1,value:t}),c.push({name:2,value:e}),c.push({name:3,value:a}),c.sort(function(t,e){return t.value-e.value});for(var u=0;u<c.length;u++)0==u?1==c[u].name?(o.currentAWidth="60rpx",o.createAnimationCurrentA(n,"26.6%")):2==c[u].name?(o.currentBWidth="60rpx",o.createAnimationCurrentB(i,"26.6%")):(o.currentCWidth="60rpx",o.createAnimationCurrentC(r,"26.6%")):1==u?1==c[u].name?(o.currentAWidth="80rpx",o.createAnimationCurrentA(n,"20%")):2==c[u].name?(o.currentBWidth="80rpx",o.createAnimationCurrentB(i,"20%")):(o.currentCWidth="80rpx",o.createAnimationCurrentC(r,"20%")):1==c[u].name?(o.currentAWidth="100rpx",o.createAnimationCurrentA(n,"16%")):2==c[u].name?(o.currentBWidth="100rpx",o.createAnimationCurrentB(i,"16%")):(o.currentCWidth="100rpx",o.createAnimationCurrentC(r,"16%"))}},drawVoltage:function(t,e,a,n,i,r){var o=this;if(t==e&&t==a)o.voltageAWidth="145rpx",o.voltageBWidth="145rpx",o.voltageCWidth="145rpx",o.createAnimationVoltageA(n,"11%"),o.createAnimationVoltageB(i,"11%"),o.createAnimationVoltageC(r,"11%");else if(t==e&&t>a)o.voltageAWidth="145rpx",o.voltageBWidth="145rpx",o.voltageCWidth="130rpx",o.createAnimationVoltageA(n,"11%"),o.createAnimationVoltageB(i,"11%"),o.createAnimationVoltageC(r,"12.3%");else if(t==e&&t<a)o.voltageAWidth="145rpx",o.voltageBWidth="145rpx",o.voltageCWidth="160rpx",o.createAnimationVoltageA(n,"11%"),o.createAnimationVoltageB(i,"11%"),o.createAnimationVoltageC(r,"10%");else if(t==a&&t>e)o.voltageAWidth="145rpx",o.voltageBWidth="130rpx",o.voltageCWidth="145rpx",o.createAnimationVoltageA(n,"11%"),o.createAnimationVoltageB(i,"12.3%"),o.createAnimationVoltageC(r,"11%");else if(t==a&&t<e)o.voltageAWidth="145rpx",o.voltageBWidth="160rpx",o.voltageCWidth="145rpx",o.createAnimationVoltageA(n,"11%"),o.createAnimationVoltageB(i,"10%"),o.createAnimationVoltageC(r,"11%");else if(e==a&&t>e)o.voltageAWidth="160rpx",o.voltageBWidth="145rpx",o.voltageCWidth="145rpx",o.createAnimationVoltageA(n,"10%"),o.createAnimationVoltageB(i,"11%"),o.createAnimationVoltageC(r,"11%");else if(e==a&&t<e)o.voltageAWidth="130rpx",o.voltageBWidth="145rpx",o.voltageCWidth="145rpx",o.createAnimationVoltageA(n,"12.3%"),o.createAnimationVoltageB(i,"11%"),o.createAnimationVoltageC(r,"11%");else{var c=[];c.push({name:1,value:t}),c.push({name:2,value:e}),c.push({name:3,value:a}),c.sort(function(t,e){return t.value-e.value});for(var u=0;u<c.length;u++)0==u?1==c[u].name?(o.voltageAWidth="130rpx",o.createAnimationVoltageA(n,"12.3%")):2==c[u].name?(o.voltageBWidth="130rpx",o.createAnimationVoltageB(i,"12.3%")):(o.voltageCWidth="130rpx",o.createAnimationVoltageC(r,"12.3%")):1==u?1==c[u].name?(o.voltageAWidth="145rpx",o.createAnimationVoltageA(n,"11%")):2==c[u].name?(o.voltageBWidth="145rpx",o.createAnimationVoltageB(i,"11%")):(o.voltageCWidth="145rpx",o.createAnimationVoltageC(r,"11%")):1==c[u].name?(o.voltageAWidth="160rpx",o.createAnimationVoltageA(n,"10%")):2==c[u].name?(o.voltageBWidth="160rpx",o.createAnimationVoltageB(i,"10%")):(o.voltageCWidth="160rpx",o.createAnimationVoltageC(r,"10%"))}},refreshValue:function(){var t=this;if(t.refreshFlag=1,t.queryBasicInfo(),t.queryConstantlyInfo(),60==t.second){t.second--;var e=setInterval(function(){t.refreshText="刷新("+t.second--+"S)"},1e3);t.intervalID=e,setTimeout(function(){"done"!=t.intervalID&&t.intervalID==e&&(clearInterval(t.intervalID),t.intervalID="done",t.refreshText="刷新",t.second=60,t.refreshFlag=0)},61e3)}},jumpToSpectrum:function(){var e=this;t.navigateTo({url:"../spectrum/spectrum?lineInfo="+JSON.stringify(e.lineInfo)})},jumpToTerminalStatusAll:function(){t.navigateTo({url:"../terminalStatusAll/terminalStatusAll"})},createAnimationKVA:function(e){var a=this,n=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:"100% 50%"});a.animationKVA=n,n.rotate(e).step(),a.animationDataKVA=n.export()},createAnimationKVB:function(e){var a=this,n=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:"100% 50%"});a.animationKVB=n,n.rotate(e).step(),a.animationDataKVB=n.export()},createAnimationKVC:function(e){var a=this,n=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:"100% 50%"});a.animationKVC=n,n.rotate(e).step(),a.animationDataKVC=n.export()},createAnimationAA:function(e){var a=this,n=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:"50% 100%"});a.animationAA=n,n.rotate(e).step(),a.animationDataAA=n.export()},createAnimationAB:function(e){var a=this,n=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:"50% 100%"});a.animationAB=n,n.rotate(e).step(),a.animationDataAB=n.export()},createAnimationAC:function(e){var a=this,n=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:"50% 100%"});a.animationAC=n,n.rotate(e).step(),a.animationDataAC=n.export()},createAnimationCurrentA:function(e,a){var n=this,i=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:a+" 50%"});n.animationCurrentA=i,i.rotate(e).step(),n.animationDataCurrentA=i.export()},createAnimationCurrentB:function(e,a){var n=this,i=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:a+" 50%"});n.animationCurrentB=i,i.rotate(e).step(),n.animationDataCurrentB=i.export()},createAnimationCurrentC:function(e,a){var n=this,i=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:a+" 50%"});n.animationCurrentC=i,i.rotate(e).step(),n.animationDataCurrentC=i.export()},createAnimationVoltageA:function(e,a){var n=this,i=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:a+" 50%"});n.animationVoltageA=i,i.rotate(e).step(),n.animationDataVoltageA=i.export()},createAnimationVoltageB:function(e,a){var n=this,i=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:a+" 50%"});n.animationVoltageB=i,i.rotate(e).step(),n.animationDataVoltageB=i.export()},createAnimationVoltageC:function(e,a){var n=this,i=t.createAnimation({duration:1e3,timingFunction:"ease",transformOrigin:a+" 50%"});n.animationVoltageC=i,i.rotate(e).step(),n.animationDataVoltageC=i.export()},setPointWidth:function(t,e,a,n,i,r){var o=this;o.currentAWidth="100rpx",o.createAnimationCurrentA(90,"16%")}},onLoad:function(){var t=this;t.scrollH(),t.queryDefaultLine()},onShow:function(){var t=this;t.queryDevCount()}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},"93ed":function(t,e,a){"use strict";a.r(e);var n=a("8243"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"9efe":function(t,e,a){"use strict";(function(t){a("986c"),a("921b");n(a("66fd"));var e=n(a("283e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},e330:function(t,e,a){"use strict";var n=a("70d0"),i=a.n(n);i.a}},[["9efe","common/runtime","common/vendor"]]]);
});
require('pages/data/data.js');
__wxRoute = 'pages/history/history';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/history/history.js';

define('pages/history/history.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/history/history"],{"07ea":function(t,e,n){"use strict";n.r(e);var a=n("b2f1"),i=n("1c92");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("af6f");var s,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=l.exports},"1ab3":function(t,e,n){"use strict";(function(t){n("986c"),n("921b");a(n("66fd"));var e=a(n("07ea"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1c92":function(t,e,n){"use strict";n.r(e);var a=n("6935"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"3bd0":function(t,e,n){},6935:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/back").then(n.bind(null,"1898"))},o={data:function(){return{pageName:"历史数据",pageNameFlag:1,backShowFlag:0,tabNum:1,page:1,num:20,scrollHeight:"",terminalStatus:55,lineInfo:{lineName:"暂无默认监测点，请选择",lineIndex:""},statisticsList:[],scrollFlag:!0,roleCode:1,startDate:"",endDate:"",startDateMills:"",endDateMills:""}},methods:{scrollH:function(){var e=this,n=t.getSystemInfoSync(),a=n.windowWidth,i=750/a,o=n.windowHeight,s=n.statusBarHeight;e.scrollHeight=parseInt((o-s)*i-410)+"rpx"},touchEnd:function(){var t=this;t.scrollFlag=!1,setTimeout(function(){t.scrollFlag=!0},30)},changeTab:function(t){this.tabNum=t},queryDefaultLine:function(){var e=this;e.judgeLogin()&&t.request({url:e.serverUrl+"/realtimeinfo/getLineId",method:"POST",data:{userIndex:t.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if("10000"==n.data.resultCode){var i=n.data.data;i&&(e.lineInfo=i,e.queryStatistics())}else t.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryDefaultLine():t.cancel&&a("log","用户点击取消"," at pages\\history\\history.vue:185")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\history\\history.vue:198"):t.cancel&&a("log","用户点击取消"," at pages\\history\\history.vue:200")}})}})},queryStatistics:function(){var e=this;t.request({url:e.serverUrl+"/statistics/statistics",method:"POST",data:{lineIndex:e.lineInfo.lineIndex,startTime:e.startDateMills,endTime:e.endDateMills,page:e.page++,num:e.num},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if("10000"==n.data.resultCode){var i=n.data.data;if(null!=i&&void 0!=i&&""!=i&&i!=[]){for(var o=0;o<i.length;o++)i[o].showTime=e.formatTime(i[o].time);e.statisticsList=e.statisticsList.concat(i)}}else t.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryStatistics():t.cancel&&a("log","用户点击取消"," at pages\\history\\history.vue:242")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\history\\history.vue:255"):t.cancel&&a("log","用户点击取消"," at pages\\history\\history.vue:257")}})}})},chooseLine:function(){var e=this;t.navigateTo({url:"../chooseLine/chooseLine"}),t.$on("lineInfoSelect",function(t){e.lineInfo=t,e.page=1,e.statisticsList=[],e.queryStatistics()}),t.$on("lineInfoQuery",function(t){e.lineInfo=t,e.page=1,e.statisticsList=[],e.queryStatistics()})},jumpToDataIntegrityDetails:function(){var e=t.getStorageSync("userInfo"),n=e.roleCode;0==n?t.navigateTo({url:"../dataIntegrityDetails/dataIntegrityDetails"}):t.showModal({title:"提示",content:"您暂无权限查看",showCancel:!1})},jumpToTerminalStatus:function(){var e=t.getStorageSync("userInfo"),n=e.roleCode;0==n?t.navigateTo({url:"../terminalStatus/terminalStatus"}):t.showModal({title:"提示",content:"您暂无权限查看",showCancel:!1})},jumpToTerminalHistory:function(e){var n=this;t.navigateTo({url:"../terminalHistory/terminalHistory?lineInfo="+JSON.stringify(n.lineInfo)+"&timeID="+e})},jumpToCondition:function(){var e=this;t.navigateTo({url:"../condition/condition?lineInfo="+JSON.stringify(e.lineInfo)+"&startDate="+e.startDate+"&endDate="+e.endDate+"&startDateMills="+e.startDateMills+"&endDateMills="+e.endDateMills+"&chooseDateTypeFlag=0&&chooseDateFlag=1&chooseLineFlag=1"}),t.$once("doQueryInfo",function(t){e.startDate=t.startDate,e.endDate=t.endDate,e.startDateMills=t.startDateMills,e.endDateMills=t.endDateMills,e.lineInfo=t.lineInfo,e.page=1,e.statisticsList=[],e.queryStatistics()})}},components:{back:i},onLoad:function(){var t=this;t.scrollH(),t.endDate=t.formatTime(new Date),t.startDate=t.endDate.substring(0,8)+"01",t.startDateMills=Date.parse(t.startDate.replace(/-/g,"/")),t.endDateMills=Date.parse(t.endDate.replace(/-/g,"/"))+86399999,t.queryDefaultLine()}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},af6f:function(t,e,n){"use strict";var a=n("3bd0"),i=n.n(a);i.a},b2f1:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})}},[["1ab3","common/runtime","common/vendor"]]]);
});
require('pages/history/history.js');
__wxRoute = 'pages/userAgreement/userAgreement';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userAgreement/userAgreement.js';

define('pages/userAgreement/userAgreement.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userAgreement/userAgreement"],{"437d":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("components/back").then(t.bind(null,"1898"))},r={data:function(){return{showFlag:0,pageNameFlag:1,pageName:"用户协议"}},methods:{},components:{back:u}};n.default=r},"4f5c":function(e,n,t){"use strict";(function(e){t("986c"),t("921b");u(t("66fd"));var n=u(t("56e7"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"56e7":function(e,n,t){"use strict";t.r(n);var u=t("5958"),r=t("cf0e");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);var a,o=t("f0c5"),f=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=f.exports},5958:function(e,n,t){"use strict";var u,r=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return u})},cf0e:function(e,n,t){"use strict";t.r(n);var u=t("437d"),r=t.n(u);for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);n["default"]=r.a}},[["4f5c","common/runtime","common/vendor"]]]);
});
require('pages/userAgreement/userAgreement.js');
__wxRoute = 'pages/privacyAgreement/privacyAgreement';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/privacyAgreement/privacyAgreement.js';

define('pages/privacyAgreement/privacyAgreement.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/privacyAgreement/privacyAgreement"],{2869:function(n,e,t){"use strict";(function(n){t("986c"),t("921b");u(t("66fd"));var e=u(t("a450"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},7487:function(n,e,t){"use strict";t.r(e);var u=t("8812"),a=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=a.a},8812:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return t.e("components/back").then(t.bind(null,"1898"))},a={data:function(){return{showFlag:0,pageNameFlag:1,pageName:"隐私协议"}},methods:{},components:{back:u}};e.default=a},a450:function(n,e,t){"use strict";t.r(e);var u=t("b98b"),a=t("7487");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var c,o=t("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);e["default"]=f.exports},b98b:function(n,e,t){"use strict";var u,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",function(){return a}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return u})}},[["2869","common/runtime","common/vendor"]]]);
});
require('pages/privacyAgreement/privacyAgreement.js');
__wxRoute = 'pages/modifyPassword/modifyPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modifyPassword/modifyPassword.js';

define('pages/modifyPassword/modifyPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modifyPassword/modifyPassword"],{2054:function(e,n,t){"use strict";t.r(n);var o=t("9086"),a=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);n["default"]=a.a},"6f03":function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return s}),t.d(n,"a",function(){return o})},"741f":function(e,n,t){"use strict";t.r(n);var o=t("6f03"),a=t("2054");for(var s in a)"default"!==s&&function(e){t.d(n,e,function(){return a[e]})}(s);t("f407");var r,u=t("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports},9086:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return t.e("components/back").then(t.bind(null,"1898"))},s={data:function(){return{phoneNum:"",phoneNumTrue:"",pageNameFlag:1,showFlag:0,pageName:"修改密码",text:"验证码将发送到绑定手机号",vercode:"",resetFlag:0,nextFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,second:60,errorMsg:"",disabledFlag:!1}},methods:{changeVercode:function(e){var n=this;e.detail.value.length>0?(n.vercode=e.detail.value,n.resetFlag=1):(n.vercode="",n.resetFlag=0),6==e.detail.value.length?n.nextFlag=1:n.nextFlag=0},sendVercodeAgain:function(){var n=this;if(n.sendAgainFlag=1,e.request({url:n.serverUrl+"/user/authCode",method:"POST",data:{phone:n.phoneNumTrue,devCode:n.cid(),type:2},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){"10000"==e.data.resultCode||(n.errorMsg=n.showError(e.data.msgCode,e.data.msg),n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0},5e3))},fail:function(){e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?o("log","用户点击确定"," at pages\\modifyPassword\\modifyPassword.vue:104"):e.cancel&&o("log","用户点击取消"," at pages\\modifyPassword\\modifyPassword.vue:106")}})}}),60==n.second){n.second--;var t=setInterval(function(){n.sendAgain="重新发送("+n.second--+"S)"},1e3);setTimeout(function(){clearInterval(t),n.sendAgain="发送验证码",n.second=60,n.sendAgainFlag=0},61e3)}},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},nextPage:function(){e.navigateTo({url:"../modifyPasswordSetpassword/modifyPasswordSetpassword?phoneNum="+this.phoneNumTrue})}},onLoad:function(e){this.phoneNumTrue=e.phoneNum,this.phoneNum=e.phoneNum.substr(0,3)+"****"+e.phoneNum.substr(7,11)},components:{back:a}};n.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},b078:function(e,n,t){},bc3c:function(e,n,t){"use strict";(function(e){t("986c"),t("921b");o(t("66fd"));var n=o(t("741f"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},f407:function(e,n,t){"use strict";var o=t("b078"),a=t.n(o);a.a}},[["bc3c","common/runtime","common/vendor"]]]);
});
require('pages/modifyPassword/modifyPassword.js');
__wxRoute = 'pages/modifyPasswordSetpassword/modifyPasswordSetpassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modifyPasswordSetpassword/modifyPasswordSetpassword.js';

define('pages/modifyPasswordSetpassword/modifyPasswordSetpassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modifyPasswordSetpassword/modifyPasswordSetpassword"],{"138c":function(e,a,s){"use strict";(function(e,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=function(){return s.e("components/back").then(s.bind(null,"1898"))},n={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"修改密码",phoneNum:"",passwordFlag:!0,againFlag:!0,password:"",again:"",seeFlag:0,seeAgainFlag:0,loadingFlag:!1,disabledFlag:!1,doneFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,resetFlag:0,vercode:"",second:60,errorMsg:""}},methods:{changeVercode:function(e){var a=this;e.detail.value.length>0?(a.vercode=e.detail.value,a.resetFlag=1):(a.vercode="",a.resetFlag=0),6==e.detail.value.length?a.nextFlag=1:a.nextFlag=0},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},setPassword:function(e){var a=this;e.detail.value.length>0?(a.seeFlag=1,a.password=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.again.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeFlag=0,a.password="")},setAgain:function(e){var a=this;e.detail.value.length>0?(a.seeAgainFlag=1,a.again=e.detail.value.trim(),e.detail.value.trim().length>=6&&a.password.trim().length>=6?a.doneFlag=1:a.doneFlag=0):(a.seeAgainFlag=0,a.again="")},see:function(e){this.passwordFlag=e},seeAgain:function(e){this.againFlag=e},sendVercodeAgain:function(){var a=this;60==a.second&&(a.sendAgainFlag=1,e.request({url:a.serverUrl+"/user/authCode",method:"POST",data:{phone:a.phoneNum,devCode:a.cid(),type:2},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){if("10000"==e.data.resultCode){a.second--;var s=setInterval(function(){a.sendAgain="重新发送("+a.second--+"S)"},1e3);setTimeout(function(){clearInterval(s),a.sendAgain="发送验证码",a.second=60,a.sendAgainFlag=0},61e3)}else a.errorMsg=a.showError(e.data.msgCode,e.data.msg),a.showFlag=1,setTimeout(function(){a.errorMsg="",a.showFlag=0,a.sendAgainFlag=0},5e3)},fail:function(){a.sendAgainFlag=0,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?t("log","用户点击确定"," at pages\\modifyPasswordSetpassword\\modifyPasswordSetpassword.vue:188"):e.cancel&&t("log","用户点击取消"," at pages\\modifyPasswordSetpassword\\modifyPasswordSetpassword.vue:190")}})}}))},complete:function(){var a=this;if(a.disabledFlag=!0,a.judgeLogin()){var s=a.password,o=a.again;s.trim().length>=6&&o.trim().length>=6&&s.trim()==o.trim()&&""!=a.vercode?e.showLoading({title:"加载中",mask:!0,success:function(){e.request({url:a.serverUrl+"/user/modifyPsd",method:"POST",data:{userId:e.getStorageSync("userInfo").userId,phone:a.phoneNum,devCode:a.cid(),password:s.trim(),code:a.vercode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(s){e.hideLoading(),"10000"==s.data.resultCode?(e.showToast({title:"修改完成",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){e.clearStorageSync(),a.disabledFlag=!1,e.redirectTo({url:"../login/login"})},2e3)):(a.errorMsg=a.showError(s.data.msgCode,s.data.msg),a.showFlag=1,setTimeout(function(){a.errorMsg="",a.showFlag=0,a.disabledFlag=!1},5e3))},fail:function(s){e.hideLoading(),a.disabledFlag=!1,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?t("log","用户点击确定"," at pages\\modifyPasswordSetpassword\\modifyPasswordSetpassword.vue:257"):e.cancel&&t("log","用户点击取消"," at pages\\modifyPasswordSetpassword\\modifyPasswordSetpassword.vue:259")}})}})}}):(a.disabledFlag=!1,e.showModal({title:"设置密码失败",content:"两次输入的密码不相同或者还未输入验证码",showCancel:!1,success:function(e){e.confirm?t("log","用户点击确定"," at pages\\modifyPasswordSetpassword\\modifyPasswordSetpassword.vue:275"):e.cancel&&t("log","用户点击取消"," at pages\\modifyPasswordSetpassword\\modifyPasswordSetpassword.vue:277")}}))}}},onLoad:function(a){var s=this;s.judgeLogin()&&(s.phoneNum=e.getStorageSync("userInfo").phone)},components:{back:o}};a.default=n}).call(this,s("6e42")["default"],s("0de9")["default"])},"13e7":function(e,a,s){"use strict";(function(e){s("986c"),s("921b");t(s("66fd"));var a=t(s("ecfd"));function t(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,s("6e42")["createPage"])},"227c":function(e,a,s){"use strict";var t=s("2f23"),o=s.n(t);o.a},"2f23":function(e,a,s){},b21b:function(e,a,s){"use strict";var t,o=function(){var e=this,a=e.$createElement;e._self._c},n=[];s.d(a,"b",function(){return o}),s.d(a,"c",function(){return n}),s.d(a,"a",function(){return t})},bf0b:function(e,a,s){"use strict";s.r(a);var t=s("138c"),o=s.n(t);for(var n in t)"default"!==n&&function(e){s.d(a,e,function(){return t[e]})}(n);a["default"]=o.a},ecfd:function(e,a,s){"use strict";s.r(a);var t=s("b21b"),o=s("bf0b");for(var n in o)"default"!==n&&function(e){s.d(a,e,function(){return o[e]})}(n);s("227c");var d,r=s("f0c5"),i=Object(r["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],d);a["default"]=i.exports}},[["13e7","common/runtime","common/vendor"]]]);
});
require('pages/modifyPasswordSetpassword/modifyPasswordSetpassword.js');
__wxRoute = 'pages/modifyUserPhoneNum/modifyUserPhoneNum';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modifyUserPhoneNum/modifyUserPhoneNum.js';

define('pages/modifyUserPhoneNum/modifyUserPhoneNum.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modifyUserPhoneNum/modifyUserPhoneNum"],{"951d":function(e,n,o){"use strict";var t=o("aa37"),a=o.n(t);a.a},a93f:function(e,n,o){"use strict";o.r(n);var t=o("b898"),a=o.n(t);for(var r in t)"default"!==r&&function(e){o.d(n,e,function(){return t[e]})}(r);n["default"]=a.a},aa37:function(e,n,o){},b898:function(e,n,o){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return o.e("components/back").then(o.bind(null,"1898"))},r={data:function(){return{phoneNum:"",phoneNumTrue:"",pageNameFlag:1,showFlag:0,pageName:"账号绑定手机号更换",text:"验证码将发送到绑定手机号",vercode:"",resetFlag:0,nextFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,second:60,errorMsg:"",loadingFlag:!1,disabledFlag:!1}},methods:{changeVercode:function(e){var n=this;e.detail.value.length>0?(n.vercode=e.detail.value,n.resetFlag=1):(n.vercode="",n.resetFlag=0),6==e.detail.value.length?n.nextFlag=1:n.nextFlag=0},sendVercodeAgain:function(){var n=this;60==n.second&&(n.sendAgainFlag=1,n.judgeLogin()&&e.request({url:n.serverUrl+"/user/authCode",method:"POST",data:{phone:e.getStorageSync("userInfo").phone,devCode:n.cid(),type:5},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){if("10000"==e.data.resultCode){n.second--;var o=setInterval(function(){n.sendAgain="重新发送("+n.second--+"S)"},1e3);setTimeout(function(){clearInterval(o),n.sendAgain="发送验证码",n.second=60,n.sendAgainFlag=0},61e3)}else n.errorMsg=n.showError(e.data.msgCode,e.data.msg),n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0,n.sendAgainFlag=0},5e3)},fail:function(){n.sendAgainFlag=0,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?t("log","用户点击确定"," at pages\\modifyUserPhoneNum\\modifyUserPhoneNum.vue:120"):e.cancel&&t("log","用户点击取消"," at pages\\modifyUserPhoneNum\\modifyUserPhoneNum.vue:122")}})}}))},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},nextPage:function(){var n=this;n.judgeLogin()&&(n.disabledFlag=!0,n.loadingFlag=!0,e.request({url:n.serverUrl+"/user/comfirmCode",method:"POST",data:{phone:e.getStorageSync("userInfo").phone,devCode:n.cid(),code:n.vercode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(o){n.loadingFlag=!1,"10000"==o.data.resultCode?(n.disabledFlag=!1,e.navigateTo({url:"../modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum"})):(n.errorMsg=n.showError(o.data.msgCode,o.data.msg),n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0,n.disabledFlag=!1},5e3))},fail:function(){n.disabledFlag=!1,n.loadingFlag=!1,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?t("log","用户点击确定"," at pages\\modifyUserPhoneNum\\modifyUserPhoneNum.vue:178"):e.cancel&&t("log","用户点击取消"," at pages\\modifyUserPhoneNum\\modifyUserPhoneNum.vue:180")}})}}))}},onLoad:function(e){this.phoneNum=e.phoneNum.substr(0,3)+"****"+e.phoneNum.substr(7,11)},components:{back:a}};n.default=r}).call(this,o("6e42")["default"],o("0de9")["default"])},d3ef:function(e,n,o){"use strict";o.r(n);var t=o("e117"),a=o("a93f");for(var r in a)"default"!==r&&function(e){o.d(n,e,function(){return a[e]})}(r);o("951d");var s,u=o("f0c5"),d=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],s);n["default"]=d.exports},e117:function(e,n,o){"use strict";var t,a=function(){var e=this,n=e.$createElement;e._self._c},r=[];o.d(n,"b",function(){return a}),o.d(n,"c",function(){return r}),o.d(n,"a",function(){return t})},fb0e:function(e,n,o){"use strict";(function(e){o("986c"),o("921b");t(o("66fd"));var n=t(o("d3ef"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("6e42")["createPage"])}},[["fb0e","common/runtime","common/vendor"]]]);
});
require('pages/modifyUserPhoneNum/modifyUserPhoneNum.js');
__wxRoute = 'pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.js';

define('pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum"],{"2f2f":function(e,n,a){"use strict";(function(e){a("986c"),a("921b");o(a("66fd"));var n=o(a("5b08"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("6e42")["createPage"])},"30a3":function(e,n,a){"use strict";var o,t=function(){var e=this,n=e.$createElement;e._self._c},s=[];a.d(n,"b",function(){return t}),a.d(n,"c",function(){return s}),a.d(n,"a",function(){return o})},"415d":function(e,n,a){},"5b08":function(e,n,a){"use strict";a.r(n);var o=a("30a3"),t=a("a65a");for(var s in t)"default"!==s&&function(e){a.d(n,e,function(){return t[e]})}(s);a("c888");var r,i=a("f0c5"),l=Object(i["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=l.exports},"5d33":function(e,n,a){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){return a.e("components/back").then(a.bind(null,"1898"))},s={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"账号绑定手机号更换",phoneNum:"",passwordFlag:!0,againFlag:!0,password:"",again:"",seeFlag:0,seeAgainFlag:0,loadingFlag:!1,doneFlag:0,vercode:"",resetFlag:0,nextFlag:0,sendAgain:"发送验证码",sendAgainFlag:0,second:60,errorMsg:"",disabledFlag:!1}},methods:{setPassword:function(e){var n=this;e.detail.value.length>0?(n.seeFlag=1,n.password=e.detail.value,e.detail.value.length>10?n.doneFlag=1:n.doneFlag=0):(n.seeFlag=0,n.password="")},sendVercodeAgain:function(){var n=this;60==n.second&&(n.sendAgainFlag=1,11==n.password.length?e.request({url:n.serverUrl+"/user/authCode",method:"POST",data:{phone:n.password,devCode:n.cid(),type:4},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(e){if("10000"==e.data.resultCode){n.second--;var a=setInterval(function(){n.sendAgain="重新发送("+n.second--+"S)"},1e3);setTimeout(function(){clearInterval(a),n.sendAgain="发送验证码",n.second=60,n.sendAgainFlag=0},61e3)}else n.errorMsg=n.showError(e.data.msgCode,e.data.msg),n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0,n.sendAgainFlag=0},5e3)},fail:function(){n.sendAgainFlag=0,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?o("log","用户点击确定"," at pages\\modifyUserPhoneNumSetPhoneNum\\modifyUserPhoneNumSetPhoneNum.vue:125"):e.cancel&&o("log","用户点击取消"," at pages\\modifyUserPhoneNumSetPhoneNum\\modifyUserPhoneNumSetPhoneNum.vue:127")}})}}):(n.errorMsg="请检查手机号",n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0,n.sendAgainFlag=0},5e3)))},reset:function(){this.vercode="",this.resetFlag=0,this.nextFlag=0},changeVercode:function(e){var n=this;e.detail.value.length>0?(n.vercode=e.detail.value,n.resetFlag=1):(n.vercode="",n.resetFlag=0),6==e.detail.value.length?n.nextFlag=1:n.nextFlag=0},setAgain:function(e){var n=this;e.detail.value.length>0?(n.seeAgainFlag=1,n.again=e.detail.value,e.detail.value.length>10&&n.password.length>10?n.doneFlag=1:n.doneFlag=0):(n.seeAgainFlag=0,n.again="")},see:function(e){this.passwordFlag=e},seeAgain:function(e){this.againFlag=e},complete:function(){var n=this;if(n.disabledFlag=!0,n.judgeLogin()){var a=n.password;n.again;a.length>=10&&""!=n.vercode?e.showLoading({title:"加载中",mask:!0,success:function(){e.request({url:n.serverUrl+"/user/rebindPhone",method:"POST",data:{userId:e.getStorageSync("userInfo").userId,phoneNew:n.password,devCode:n.cid(),code:n.vercode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(a){e.hideLoading(),"10000"==a.data.resultCode?(e.showToast({title:"更换完成",icon:"success",duration:2e3,mask:!0}),setTimeout(function(){e.clearStorageSync(),n.disabledFlag=!1,e.redirectTo({url:"../login/login"})},2e3)):(n.errorMsg=n.showError(a.data.msgCode,a.data.msg),n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0,n.disabledFlag=!1},5e3))},fail:function(a){e.hideLoading(),n.disabledFlag=!1,e.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?o("log","用户点击确定"," at pages\\modifyUserPhoneNumSetPhoneNum\\modifyUserPhoneNumSetPhoneNum.vue:243"):e.cancel&&o("log","用户点击取消"," at pages\\modifyUserPhoneNumSetPhoneNum\\modifyUserPhoneNumSetPhoneNum.vue:245")}})}})}}):(n.errorMsg="请检查输入",n.showFlag=1,setTimeout(function(){n.errorMsg="",n.showFlag=0,n.disabledFlag=!1},5e3))}}},onLoad:function(e){},components:{back:t}};n.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},a65a:function(e,n,a){"use strict";a.r(n);var o=a("5d33"),t=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(n,e,function(){return o[e]})}(s);n["default"]=t.a},c888:function(e,n,a){"use strict";var o=a("415d"),t=a.n(o);t.a}},[["2f2f","common/runtime","common/vendor"]]]);
});
require('pages/modifyUserPhoneNumSetPhoneNum/modifyUserPhoneNumSetPhoneNum.js');
__wxRoute = 'pages/systemIntroduce/systemIntroduce';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/systemIntroduce/systemIntroduce.js';

define('pages/systemIntroduce/systemIntroduce.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/systemIntroduce/systemIntroduce"],{4668:function(e,n,t){"use strict";t.r(n);var u=t("821b"),a=t("ba9d");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);var c,o=t("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=f.exports},"821b":function(e,n,t){"use strict";var u,a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return r}),t.d(n,"a",function(){return u})},"9e7e":function(e,n,t){"use strict";(function(e){t("986c"),t("921b");u(t("66fd"));var n=u(t("4668"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},ba9d:function(e,n,t){"use strict";t.r(n);var u=t("e34a"),a=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=a.a},e34a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("components/back").then(t.bind(null,"1898"))},a={data:function(){return{showFlag:0,pageNameFlag:1,pageName:"系统介绍"}},methods:{},components:{back:u}};n.default=a}},[["9e7e","common/runtime","common/vendor"]]]);
});
require('pages/systemIntroduce/systemIntroduce.js');
__wxRoute = 'pages/companyIntroduce/companyIntroduce';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/companyIntroduce/companyIntroduce.js';

define('pages/companyIntroduce/companyIntroduce.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/companyIntroduce/companyIntroduce"],{"498f":function(n,t,e){"use strict";e.r(t);var u=e("7dd0"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"5a52":function(n,t,e){"use strict";e.r(t);var u=e("7ffd"),a=e("498f");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);var o,r=e("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=f.exports},"7dd0":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/back").then(e.bind(null,"1898"))},a={data:function(){return{showFlag:0,pageNameFlag:1,pageName:"公司介绍"}},methods:{},components:{back:u}};t.default=a},"7ffd":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},d69a:function(n,t,e){"use strict";(function(n){e("986c"),e("921b");u(e("66fd"));var t=u(e("5a52"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["d69a","common/runtime","common/vendor"]]]);
});
require('pages/companyIntroduce/companyIntroduce.js');
__wxRoute = 'pages/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setting/setting.js';

define('pages/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"05e3":function(e,n,t){"use strict";t.r(n);var o=t("164f"),u=t("8b5d");for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);t("b1ee");var c,r=t("f0c5"),i=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=i.exports},"0ba1":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("components/back").then(t.bind(null,"1898"))},a={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"设置"}},methods:{exit:function(){e.showModal({title:"提示",content:"确认退出登录",success:function(n){if(n.confirm)e.removeStorageSync("account"),e.removeStorageSync("password"),e.removeStorageSync("userInfo"),e.removeStorageSync("loginTime"),e.reLaunch({url:"../login/login"});else if(n.cancel)return void o("log","用户点击取消"," at pages\\setting\\setting.vue:35")}})}},components:{back:u}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},"164f":function(e,n,t){"use strict";var o,u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return o})},"1fad":function(e,n,t){"use strict";(function(e){t("986c"),t("921b");o(t("66fd"));var n=o(t("05e3"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"8b5d":function(e,n,t){"use strict";t.r(n);var o=t("0ba1"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=u.a},b1ee:function(e,n,t){"use strict";var o=t("fe96"),u=t.n(o);u.a},fe96:function(e,n,t){}},[["1fad","common/runtime","common/vendor"]]]);
});
require('pages/setting/setting.js');
__wxRoute = 'pages/steady/steady';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/steady/steady.js';

define('pages/steady/steady.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/steady/steady"],{"0d7a":function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("1b20"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"1b20":function(e,t,a){"use strict";a.r(t);var n=a("95a3"),r=a("a375");for(var u in r)"default"!==u&&function(e){a.d(t,e,function(){return r[e]})}(u);a("4787");var o,s=a("f0c5"),i=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=i.exports},4787:function(e,t,a){"use strict";var n=a("ef1c"),r=a.n(n);r.a},"95a3":function(e,t,a){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];a.d(t,"b",function(){return r}),a.d(t,"c",function(){return u}),a.d(t,"a",function(){return n})},a375:function(e,t,a){"use strict";a.r(t);var n=a("d1e7e"),r=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);t["default"]=r.a},d1e7e:function(module,exports,__webpack_require__){"use strict";(function(uni){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,pageName:"越限监测点",radioFlag:0,errorFlag:0,steadyIndex:"",steadyStateList:[],showTime:""}},methods:{steadyStateInfo:function steadyStateInfo(){var that=this;uni.request({url:that.serverUrl+"/steadymsg/steadyStateInfo",method:"POST",data:{steadyIndex:that.steadyIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.steadyStateList=eval(res.data.data):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},jumpToSteadyDetails:function(e,t,a,n){uni.navigateTo({url:"../steadyDetails/steadyDetails?lineName="+t+"&showTime="+e+"&lineIndex="+a+"&timeID="+n})},retry:function(){this.errorFlag=0,this.steadyStateInfo()}},onLoad:function(e){this.steadyIndex=e.steadyIndex,this.showTime=e.showTime,this.steadyStateInfo()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"])},ef1c:function(e,t,a){}},[["0d7a","common/runtime","common/vendor"]]]);
});
require('pages/steady/steady.js');
__wxRoute = 'pages/steadyDetails/steadyDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/steadyDetails/steadyDetails.js';

define('pages/steadyDetails/steadyDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/steadyDetails/steadyDetails"],{"0996":function(e,t,a){"use strict";a.r(t);var n=a("fca2"),r=a("478c");for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);a("7c87");var u,s=a("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports},"0c53":function(module,exports,__webpack_require__){"use strict";(function(uni){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,pageName:"越限监测点详情",radioFlag:0,lineName:"",showTime:"",lineIndex:"",steadyTargetList:[],timeID:"",errorFlag:0}},methods:{steadyTarget:function steadyTarget(){var that=this;uni.request({url:that.serverUrl+"/steadymsg/steadyTarget",method:"POST",data:{lineIndex:that.lineIndex,timeID:that.timeID},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.steadyTargetList=eval(res.data.data):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},jumpToSteadyIndex:function(e,t){var a=this;uni.navigateTo({url:"../steadyIndex/steadyIndex?typeCode="+e+"&lineIndex="+a.lineIndex+"&timeID="+a.timeID+"&typeName="+t})},retry:function(){this.errorFlag=0,this.steadyTarget()}},onLoad:function(e){uni.showLoading({mask:!0}),this.showTime=e.showTime,this.lineName=e.lineName,this.lineIndex=e.lineIndex,this.timeID=e.timeID,this.steadyTarget()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"])},"478c":function(e,t,a){"use strict";a.r(t);var n=a("0c53"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=r.a},"51ce":function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("0996"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"7c87":function(e,t,a){"use strict";var n=a("fd9e"),r=a.n(n);r.a},fca2:function(e,t,a){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n})},fd9e:function(e,t,a){}},[["51ce","common/runtime","common/vendor"]]]);
});
require('pages/steadyDetails/steadyDetails.js');
__wxRoute = 'pages/steadyIndex/steadyIndex';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/steadyIndex/steadyIndex.js';

define('pages/steadyIndex/steadyIndex.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/steadyIndex/steadyIndex"],{"37cc":function(e,t,n){"use strict";n.r(t);var a=n("56a8"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},5494:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("bc91"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"56a8":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,pageName:"越限监测点详情",radioFlag:0,timeID:"",typeCode:"",lineIndex:"",steadyTargetPicUrl:"",errorFlag:0,typeName:""}},methods:{steadyTargetUrl:function steadyTargetUrl(){var that=this;uni.request({url:that.serverUrl+"/steadymsg/steadyTargetUrl",method:"POST",data:{lineIndex:that.lineIndex,timeID:that.timeID,typeCode:that.typeCode},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.steadyTargetPicUrl=eval(res.data.data).steadyPath:that.errorFlag=1},fail:function(e){that.errorFlag=1}})},previewPic:function(e){null!=e&&void 0!=e&&""!=e&&0!=e.length&&uni.previewImage({urls:[e],current:0,longPressActions:{itemList:["保存图片"],success:function(t){0==t.tapIndex&&(uni.showLoading({title:"图片保存中"}),uni.downloadFile({url:e,success:function(e){var t=e.tempFilePath;uni.saveImageToPhotosAlbum({filePath:t,success:function(){uni.showToast({icon:"success",title:"保存成功",duration:2e3})}})},complete:function(){uni.hideLoading()}}))},fail:function(e){uni.showModal({title:"保存失败",content:e.errMsg,showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\steadyIndex\\steadyIndex.vue:113"):e.cancel&&__f__("log","用户点击取消"," at pages\\steadyIndex\\steadyIndex.vue:115")}})}}})},retry:function(){this.errorFlag=0,this.steadyTargetUrl()}},onLoad:function(e){this.lineIndex=e.lineIndex,this.typeCode=e.typeCode,this.timeID=e.timeID,this.typeName=e.typeName,this.steadyTargetUrl()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},8458:function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})},"8dbf":function(e,t,n){},a870:function(e,t,n){"use strict";var a=n("8dbf"),r=n.n(a);r.a},bc91:function(e,t,n){"use strict";n.r(t);var a=n("8458"),r=n("37cc");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("a870");var u,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=c.exports}},[["5494","common/runtime","common/vendor"]]]);
});
require('pages/steadyIndex/steadyIndex.js');
__wxRoute = 'pages/terminal/terminal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/terminal/terminal.js';

define('pages/terminal/terminal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/terminal/terminal"],{"1be7":function(e,t,n){"use strict";var i=n("6a25"),a=n.n(i);a.a},"58f8":function(e,t,n){"use strict";n.r(t);var i=n("8353"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"6a25":function(e,t,n){},8353:function(module,exports,__webpack_require__){"use strict";(function(uni){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"异常终端列表",radioFlag:0,devMsgIndex:"",deviceList:[],page:1,showTime:"",errorFlag:0}},methods:{queryDeviceList:function queryDeviceList(){var that=this;uni.request({url:that.serverUrl+"/deviceMsg/deviceList",method:"POST",data:{devMsgIndex:that.devMsgIndex,page:that.page++,num:20},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){var list=eval(res.data.data);null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.deviceList=that.deviceList.concat(list))}else that.errorFlag=1},fail:function(e){that.errorFlag=1}})},jumpToTerminalDetails:function(e,t){var n=this;uni.navigateTo({url:"../terminalDetails/terminalDetails?devIndex="+t+"&timeID="+e+"&showTime="+n.showTime})},retry:function(){this.errorFlag=0,this.page=1,this.queryDeviceList()}},onLoad:function(e){this.devMsgIndex=e.devMsgIndex,this.showTime=e.showTime,this.queryDeviceList()},onReachBottom:function(){this.queryDeviceList()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"])},a5fc:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");i(n("66fd"));var t=i(n("ee41"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},ee41:function(e,t,n){"use strict";n.r(t);var i=n("f085"),a=n("58f8");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("1be7");var u,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},f085:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i})}},[["a5fc","common/runtime","common/vendor"]]]);
});
require('pages/terminal/terminal.js');
__wxRoute = 'pages/terminalDetails/terminalDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/terminalDetails/terminalDetails.js';

define('pages/terminalDetails/terminalDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/terminalDetails/terminalDetails"],{"0042":function(e,t,n){"use strict";n.r(t);var a=n("6594"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},"0169":function(e,t,n){"use strict";var a=n("c0ba"),r=n.n(a);r.a},"023e":function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("b401"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"1dd2":function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})},6594:function(module,exports,__webpack_require__){"use strict";(function(uni){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"终端状态消息详情",radioFlag:0,devIndex:"",timeID:"",showTime:"",errorFlag:0,devMsg:{},queryFlag:0}},methods:{devMsgInfo:function devMsgInfo(){var that=this;uni.request({url:that.serverUrl+"/deviceMsg/devMsgInfo",method:"POST",data:{devIndex:that.devIndex,timeID:that.timeID},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.devMsg=eval(res.data.data):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},retry:function(){this.errorFlag=0,this.devMsgInfo()}},onLoad:function(e){uni.showLoading({mask:!0}),this.devIndex=e.devIndex,this.timeID=e.timeID,this.showTime=e.showTime,this.devMsgInfo()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"])},b401:function(e,t,n){"use strict";n.r(t);var a=n("1dd2"),r=n("0042");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("0169");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},c0ba:function(e,t,n){}},[["023e","common/runtime","common/vendor"]]]);
});
require('pages/terminalDetails/terminalDetails.js');
__wxRoute = 'pages/myApply/myApply';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myApply/myApply.js';

define('pages/myApply/myApply.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myApply/myApply"],{"27c3":function(e,t,r){"use strict";(function(e){r("986c"),r("921b");n(r("66fd"));var t=n(r("8d64"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"6bda":function(module,exports,__webpack_require__){"use strict";(function(uni){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,pageName:"我的申请",systemType:0,pageNum:1,errorFlag:0,marketingUserInfo:{},reportList:[]}},methods:{queryList:function queryList(){var that=this;that.judgeLogin()&&uni.request({url:that.serverUrl+"/report/reportList",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,systemType:that.systemType,reportType:5,page:that.pageNum++,num:20},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){var list=that.addDateString(eval(res.data.data));null!=list&&void 0!=list&&""!=list&&list!=[]&&(that.reportList=that.reportList.concat(list))}else that.errorFlag=1},fail:function(e){that.errorFlag=1}})},queryMarketingUserInfo:function queryMarketingUserInfo(){var that=this;that.judgeLogin()&&uni.request({url:that.serverUrl+"/report/marketingUserInfo",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){"10000"==res.data.resultCode?that.marketingUserInfo=eval(res.data.data):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},addDateString:function(e){for(var t=this,r=0;r<e.length;r++)e[r].dateString=t.formatTime(e[r].startTime)+"至"+t.formatTime(e[r].endTime),(e[r].endTime-e[r].startTime)/864e5>100?e[r].type="年报":e[r].type="季报";return e},retry:function(){this.pageNum=1,this.marketingUserInfo={},this.reportList=[],this.queryMarketingUserInfo(),this.queryList()}},onLoad:function(e){this.systemType=e.systemType,this.queryMarketingUserInfo(),this.queryList()},onReachBottom:function(){this.queryList()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"])},"6cd0":function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];r.d(t,"b",function(){return a}),r.d(t,"c",function(){return i}),r.d(t,"a",function(){return n})},"863e":function(e,t,r){"use strict";var n=r("d1e6"),a=r.n(n);a.a},"8d64":function(e,t,r){"use strict";r.r(t);var n=r("6cd0"),a=r("eb61");for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);r("863e");var s,u=r("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=o.exports},d1e6:function(e,t,r){},eb61:function(e,t,r){"use strict";r.r(t);var n=r("6bda"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t["default"]=a.a}},[["27c3","common/runtime","common/vendor"]]]);
});
require('pages/myApply/myApply.js');
__wxRoute = 'pages/setNewMessage/setNewMessage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setNewMessage/setNewMessage.js';

define('pages/setNewMessage/setNewMessage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setNewMessage/setNewMessage"],{"032e":function(e,t,a){"use strict";a.r(t);var n=a("6606"),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},6606:function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,pageName:"新消息提醒",transientFlag:!0,steadyFlag:!0,terminalFlag:!0,systemFlag:!0}},methods:{changeTransientFlag:function(e){uni.showLoading({mask:!0}),this.transientFlag=e.detail.value,this.setFlag(1,this.transientFlag)},changeSteadyFlag:function(e){uni.showLoading({mask:!0}),this.steadyFlag=e.detail.value,this.setFlag(2,this.steadyFlag)},changeTerminalFlag:function(e){uni.showLoading({mask:!0}),this.terminalFlag=e.detail.value,this.setFlag(3,this.terminalFlag)},changeSystemFlag:function(e){uni.showLoading({mask:!0}),this.systemFlag=e.detail.value,this.setFlag(4,this.systemFlag)},setFlag:function(e,t){var a=this,n=this;n.judgeLogin()&&uni.request({url:n.serverUrl+"/user/msgSet",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,eventInfo:n.transientFlag?1:0,targetInfo:n.steadyFlag?1:0,deviceInfo:n.terminalFlag?1:0,systemInfo:n.systemFlag?1:0},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){if(uni.hideLoading(),"10000"!=n.data.resultCode){var s=!0;s=!t,1==e?a.transientFlag=s:2==e?a.steadyFlag=s:3==e?a.terminalFlag=s:a.systemFlag=s}},fail:function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\setNewMessage\\setNewMessage.vue:122"):e.cancel&&__f__("log","用户点击取消"," at pages\\setNewMessage\\setNewMessage.vue:124")}})}})},queryFlag:function queryFlag(){var that=this;that.judgeLogin()&&uni.request({url:that.serverUrl+"/user/getMsg",method:"POST",data:{userId:uni.getStorageSync("userInfo").userId,devCode:that.cid()},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){if(uni.hideLoading(),"10000"==res.data.resultCode){var msg=eval(res.data.data);that.transientFlag=1==msg.eventInfo,that.steadyFlag=1==msg.targetInfo,that.terminalFlag=1==msg.deviceInfo,that.systemFlag=1==msg.systemInfo}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(e){e.confirm?(that.transientPage--,that.queryTransientList()):e.cancel&&__f__("log","用户点击取消"," at pages\\setNewMessage\\setNewMessage.vue:164")}})},fail:function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\setNewMessage\\setNewMessage.vue:178"):e.cancel&&__f__("log","用户点击取消"," at pages\\setNewMessage\\setNewMessage.vue:180")}})}})}},onLoad:function(){this.queryFlag()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"7ce9":function(e,t,a){"use strict";a.r(t);var n=a("801b"),s=a("032e");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("d0f6");var u,o=a("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=r.exports},"801b":function(e,t,a){"use strict";var n,s=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n})},cfc2:function(e,t,a){"use strict";(function(e){a("986c"),a("921b");n(a("66fd"));var t=n(a("7ce9"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d0f6:function(e,t,a){"use strict";var n=a("e665"),s=a.n(n);s.a},e665:function(e,t,a){}},[["cfc2","common/runtime","common/vendor"]]]);
});
require('pages/setNewMessage/setNewMessage.js');
__wxRoute = 'pages/terminalHistory/terminalHistory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/terminalHistory/terminalHistory.js';

define('pages/terminalHistory/terminalHistory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/terminalHistory/terminalHistory"],{4494:function(e,t,n){"use strict";n.r(t);var a=n("ac64"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},ac64:function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return _defineProperty({pageNameFlag:1,pageName:"详细列表",lineIndex:"",steadyTargetList:[],timeID:"",errorFlag:0,lineInfo:{},showTime:"",statisticsDetail:{},scrollHeight:""},"steadyTargetList",[])},methods:{scrollH:function(){var e=this,t=uni.getSystemInfoSync(),n=t.windowWidth,a=750/n,i=t.windowHeight,r=t.statusBarHeight;e.scrollHeight=parseInt((i-r)*a-284)+"rpx"},queryStatisticsDetail:function(){var e=this;e.judgeLogin()&&uni.request({url:e.serverUrl+"/statistics/statisticsDetail",method:"POST",data:{lineIndex:e.lineInfo.lineIndex,timeID:e.timeID},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(t){if("10000"==t.data.resultCode){var n=t.data.data;n&&(e.statisticsDetail=n,e.steadyTarget())}else uni.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryStatisticsDetail():t.cancel&&__f__("log","用户点击取消"," at pages\\terminalHistory\\terminalHistory.vue:118")}})},fail:function(){uni.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\terminalHistory\\terminalHistory.vue:131"):e.cancel&&__f__("log","用户点击取消"," at pages\\terminalHistory\\terminalHistory.vue:133")}})}})},steadyTarget:function steadyTarget(){var that=this;uni.request({url:that.serverUrl+"/steadymsg/steadyTarget",method:"POST",data:{lineIndex:that.lineInfo.lineIndex,timeID:that.timeID},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){uni.hideLoading(),"10000"==res.data.resultCode?that.steadyTargetList=eval(res.data.data):that.errorFlag=1},fail:function(e){that.errorFlag=1}})},jumpToSteadyIndex:function(e,t){var n=this;uni.navigateTo({url:"../steadyIndex/steadyIndex?typeCode="+e+"&lineIndex="+n.lineInfo.lineIndex+"&timeID="+n.timeID+"&typeName="+t})},jumpToSteadyDetails:function(){var e=this;uni.navigateTo({url:"../steadyDetails/steadyDetails?lineName="+e.lineInfo.lineName+"&showTime="+e.showTime+"&lineIndex="+e.lineInfo.lineIndex+"&timeID="+e.timeID})},jumpToTransientWave:function(e){uni.navigateTo({url:"../transientWave/transientWave?eventDetailIndex="+e})}},components:{back:back},onLoad:function(e){var t=this;t.lineInfo=JSON.parse(e.lineInfo),t.timeID=e.timeID,t.showTime=t.formatTime(parseInt(e.timeID)),t.scrollH(),t.queryStatisticsDetail()}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},ae8e:function(e,t,n){},bc03:function(e,t,n){"use strict";n.r(t);var a=n("c46a"),i=n("4494");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("bc58");var s,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=l.exports},bc58:function(e,t,n){"use strict";var a=n("ae8e"),i=n.n(a);i.a},c46a:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},d06a:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("bc03"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["d06a","common/runtime","common/vendor"]]]);
});
require('pages/terminalHistory/terminalHistory.js');
__wxRoute = 'pages/transientWave/transientWave';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/transientWave/transientWave.js';

define('pages/transientWave/transientWave.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/transientWave/transientWave"],{"13d1":function(module,exports,__webpack_require__){"use strict";(function(uni,__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var back=function(){return __webpack_require__.e("components/back").then(__webpack_require__.bind(null,"1898"))},_default={data:function(){return{pageNameFlag:1,showFlag:0,pageName:"暂态波形图",eventDetailIndex:"",wave:{}}},methods:{eventDetailWave:function eventDetailWave(){var that=this;uni.request({url:that.serverUrl+"/eventmsg/eventDetailWave",method:"POST",data:{eventDetailIndex:that.eventDetailIndex},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function success(res){"10000"==res.data.resultCode?(that.wave=eval(res.data.data),uni.hideLoading()):(that.errorFlag=1,uni.hideLoading())},fail:function(e){uni.hideLoading(),that.errorFlag=1}})},previewPic:function(e){null!=e&&void 0!=e&&""!=e&&0!=e.length&&uni.previewImage({urls:[e],current:0,longPressActions:{itemList:["保存图片"],success:function(t){0==t.tapIndex&&(uni.showLoading({title:"图片保存中"}),uni.downloadFile({url:e,success:function(e){var t=e.tempFilePath;uni.saveImageToPhotosAlbum({filePath:t,success:function(){uni.showToast({icon:"success",title:"保存成功",duration:2e3})}})},complete:function(){uni.hideLoading()}}))},fail:function(e){uni.showModal({title:"保存失败",content:e.errMsg,showCancel:!1,success:function(e){e.confirm?__f__("log","用户点击确定"," at pages\\transientWave\\transientWave.vue:108"):e.cancel&&__f__("log","用户点击取消"," at pages\\transientWave\\transientWave.vue:110")}})}}})}},onLoad:function(e){var t=this;t.eventDetailIndex=e.eventDetailIndex,uni.showLoading({mask:!0}),t.eventDetailWave()},components:{back:back}};exports.default=_default}).call(this,__webpack_require__("6e42")["default"],__webpack_require__("0de9")["default"])},"6a5f":function(e,t,n){},"963c":function(e,t,n){"use strict";var a=n("6a5f"),i=n.n(a);i.a},b558:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return a})},b5e4:function(e,t,n){"use strict";n.r(t);var a=n("13d1"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=i.a},f04e:function(e,t,n){"use strict";(function(e){n("986c"),n("921b");a(n("66fd"));var t=a(n("fd27"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fd27:function(e,t,n){"use strict";n.r(t);var a=n("b558"),i=n("b5e4");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("963c");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=c.exports}},[["f04e","common/runtime","common/vendor"]]]);
});
require('pages/transientWave/transientWave.js');
__wxRoute = 'pages/us/us';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/us/us.js';

define('pages/us/us.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/us/us"],{"20c8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/back").then(e.bind(null,"1898"))},a={data:function(){return{pageName:"关于我们",pageNameFlag:1}},methods:{},components:{back:u}};t.default=a},"80ca":function(n,t,e){"use strict";(function(n){e("986c"),e("921b");u(e("66fd"));var t=u(e("954b"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"84a5":function(n,t,e){},"8ceb":function(n,t,e){"use strict";e.r(t);var u=e("20c8"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"954b":function(n,t,e){"use strict";e.r(t);var u=e("cff2"),a=e("8ceb");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("aa45");var r,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=f.exports},aa45:function(n,t,e){"use strict";var u=e("84a5"),a=e.n(u);a.a},cff2:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})}},[["80ca","common/runtime","common/vendor"]]]);
});
require('pages/us/us.js');
__wxRoute = 'pages/terminalStatusAll/terminalStatusAll';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/terminalStatusAll/terminalStatusAll.js';

define('pages/terminalStatusAll/terminalStatusAll.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/terminalStatusAll/terminalStatusAll"],{"020b":function(t,e,n){"use strict";n.r(e);var a=n("888d"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},"2eae":function(t,e,n){},"888d":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("components/back").then(n.bind(null,"1898"))},o={data:function(){return{pageNameFlag:1,pageName:"终端状态",scrollHeight:"",devStatusList:[]}},methods:{scrollH:function(){var e=this,n=t.getSystemInfoSync(),a=n.windowWidth,u=750/a,o=n.windowHeight,c=n.statusBarHeight;e.scrollHeight=parseInt((o-c)*u-94)+"rpx"},queryDevComInfo:function(){var e=this;t.request({url:e.serverUrl+"/deviceMsg/devComInfo",method:"POST",data:{userId:t.getStorageSync("userInfo").userId},header:{"content-type":"application/x-www-form-urlencoded"},sslVerify:!1,success:function(n){"10000"==n.data.resultCode?e.devStatusList=n.data.data:t.showModal({title:"提示",content:"查询失败，请重试",confirmText:"重试",success:function(t){t.confirm?e.queryDevComInfo():t.cancel&&a("log","用户点击取消"," at pages\\terminalStatusAll\\terminalStatusAll.vue:65")}})},fail:function(){t.showModal({title:"提示",content:"网络或服务器异常，请稍后再试",showCancel:!1,success:function(t){t.confirm?a("log","用户点击确定"," at pages\\terminalStatusAll\\terminalStatusAll.vue:78"):t.cancel&&a("log","用户点击取消"," at pages\\terminalStatusAll\\terminalStatusAll.vue:80")}})}})}},onLoad:function(){var t=this;t.scrollH(),t.queryDevComInfo()},components:{back:u}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},acf3:function(t,e,n){"use strict";var a=n("2eae"),u=n.n(a);u.a},b62c:function(t,e,n){"use strict";(function(t){n("986c"),n("921b");a(n("66fd"));var e=a(n("d8e1"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d219:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},d8e1:function(t,e,n){"use strict";n.r(e);var a=n("d219"),u=n("020b");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("acf3");var c,l=n("f0c5"),r=Object(l["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=r.exports}},[["b62c","common/runtime","common/vendor"]]]);
});
require('pages/terminalStatusAll/terminalStatusAll.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

