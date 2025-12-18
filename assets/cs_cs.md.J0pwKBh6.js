import{_ as n,c as a,o as p,a4 as e}from"./chunks/framework.C2Gk6cJW.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cs/cs.md","filePath":"cs/cs.md","lastUpdated":1766099628000}'),l={name:"cs/cs.md"};function t(i,s,c,o,r,u){return p(),a("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>##  C#  자바형태 줄 추가 나 c#형태 줄추가로 변경할 수 있음 (체크 전부 해제할경우 Java 형태 )</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# database connection pool</span></span>
<span class="line"><span>Ibatis.net Oracle Session 무한 증가 문제</span></span>
<span class="line"><span>https://freehan.tistory.com/40</span></span>
<span class="line"><span>  &lt;!-- Database connection information --&gt;</span></span>
<span class="line"><span>  &lt;database&gt;</span></span>
<span class="line"><span>   &lt;provider name=&quot;oracleClient2.0&quot;/&gt;</span></span>
<span class="line"><span>   &lt;!--&lt;dataSource name=&quot;SAPORA&quot; connectionString=&quot;Data Source=SAPORA; User Id=sappop; Password=sappop001&quot;/&gt;--&gt;</span></span>
<span class="line"><span>   &lt;dataSource name=&quot;TEST&quot; connectionString=&quot;Data Source=(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.0.1)(PORT = 1521))(CONNECT_DATA =(SERVER = TEST)(SERVICE_NAME = XE)));Persist Security Info=True;User Id=test;Password=1234; connection lifetime=3; max pool size = 20;&quot;/&gt;</span></span>
<span class="line"><span>  &lt;/database&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## C# Serial  Communication</span></span>
<span class="line"><span>https://m.blog.naver.com/PostView.nhn?blogId=monkeychoi&amp;logNo=60202157379&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://www.hoons.net/Board/cshaptip/Content/89080</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Assembly 정보</span></span>
<span class="line"><span></span></span>
<span class="line"><span>string sVersion = Assembly.GetExecutingAssembly().GetName().Version.ToString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# only one trayicon</span></span>
<span class="line"><span>https://stackoverflow.com/questions/31779638/prevent-more-than-one-tray-icon-in-c-sharp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## WebBrowser에서 IE8에서 css가 적용이 되지 않는 이유</span></span>
<span class="line"><span>http://www.codejs.co.kr/ie8-%EC%9D%B4%ED%95%98-rgba-%EB%8C%80%EC%B2%B4-%EA%B8%B0%EB%B2%95-%EB%B0%B0%EA%B2%BD-%ED%88%AC%EB%AA%85/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 상대경로 절대경로 변경</span></span>
<span class="line"><span>https://ljh131.tistory.com/86</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 비주얼스튜디오 색깔끄기</span></span>
<span class="line"><span>https://stackoverflow.com/questions/55617240/how-can-you-change-text-color-settings-in-visual-studio-2019-to-match-the-style</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## OpenCv</span></span>
<span class="line"><span>https://076923.github.io/posts/#C#-OpenCvSharp2</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## WebBrowser css가 적용되지 않을 경우</span></span>
<span class="line"><span> 브라우저 버전을 특정 버전이 되도록 변경</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://ssamlaeng.blogspot.com/2015/08/c-webbrowser-control-css.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Source</span></span>
<span class="line"><span>private static void SetBrowserFeatureControl()</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           // http://msdn.microsoft.com/en-us/library/ee330720(v=vs.85).aspx</span></span>
<span class="line"><span>           // WebBrowser Feature Control settings are per-process</span></span>
<span class="line"><span>           var fileName = System.IO.Path.GetFileName(Process.GetCurrentProcess().MainModule.FileName);</span></span>
<span class="line"><span>           // make the control is not running inside Visual Studio Designer</span></span>
<span class="line"><span>           if (String.Compare(fileName, &quot;devenv.exe&quot;, true) == 0 || String.Compare(fileName, &quot;XDesProc.exe&quot;, true) == 0)</span></span>
<span class="line"><span>               return;</span></span>
<span class="line"><span>           SetBrowserFeatureControlKey(&quot;FEATURE_BROWSER_EMULATION&quot;, fileName, GetBrowserEmulationMode());</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       private static void SetBrowserFeatureControlKey(string feature, string appName, uint value)</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           using (var key = Registry.CurrentUser.CreateSubKey(</span></span>
<span class="line"><span>               String.Concat(@&quot;Software\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\&quot;, feature),</span></span>
<span class="line"><span>               RegistryKeyPermissionCheck.ReadWriteSubTree))</span></span>
<span class="line"><span>           {</span></span>
<span class="line"><span>               key.SetValue(appName, (UInt32)value, RegistryValueKind.DWord);</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       private static UInt32 GetBrowserEmulationMode()</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           int browserVersion = 7;</span></span>
<span class="line"><span>           using (var ieKey = Registry.LocalMachine.OpenSubKey(@&quot;SOFTWARE\\Microsoft\\Internet Explorer&quot;,</span></span>
<span class="line"><span>               RegistryKeyPermissionCheck.ReadSubTree,</span></span>
<span class="line"><span>               System.Security.AccessControl.RegistryRights.QueryValues))</span></span>
<span class="line"><span>           {</span></span>
<span class="line"><span>               var version = ieKey.GetValue(&quot;svcVersion&quot;);</span></span>
<span class="line"><span>               if (null == version)</span></span>
<span class="line"><span>               {</span></span>
<span class="line"><span>                   version = ieKey.GetValue(&quot;Version&quot;);</span></span>
<span class="line"><span>                   if (null == version)</span></span>
<span class="line"><span>                       throw new ApplicationException(&quot;Microsoft Internet Explorer is required!&quot;);</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               int.TryParse(version.ToString().Split(&#39;.&#39;)[0], out browserVersion);</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>           // Internet Explorer 10. Webpages containing standards-based !DOCTYPE directives are displayed in IE10 Standards mode. Default value for Internet Explorer 10.</span></span>
<span class="line"><span>           UInt32 mode = 10000;</span></span>
<span class="line"><span>           switch (browserVersion)</span></span>
<span class="line"><span>           {</span></span>
<span class="line"><span>               case 7:</span></span>
<span class="line"><span>                   // Webpages containing standards-based !DOCTYPE directives are displayed in IE7 Standards mode. Default value for applications hosting the WebBrowser Control.</span></span>
<span class="line"><span>                   mode = 7000;</span></span>
<span class="line"><span>                   break;</span></span>
<span class="line"><span>               case 8:</span></span>
<span class="line"><span>                   // Webpages containing standards-based !DOCTYPE directives are displayed in IE8 mode. Default value for Internet Explorer 8</span></span>
<span class="line"><span>                   mode = 8000;</span></span>
<span class="line"><span>                   break;</span></span>
<span class="line"><span>               case 9:</span></span>
<span class="line"><span>                   // Internet Explorer 9. Webpages containing standards-based !DOCTYPE directives are displayed in IE9 mode. Default value for Internet Explorer 9.</span></span>
<span class="line"><span>                   mode = 9000;</span></span>
<span class="line"><span>                   break;</span></span>
<span class="line"><span>               default:</span></span>
<span class="line"><span>                   // use IE10 mode by default</span></span>
<span class="line"><span>                   break;</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>           return mode;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>##  날짜</span></span>
<span class="line"><span>https://rocabilly.tistory.com/252</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT LISTAGG(REASON_DESC,&#39;,&#39;) WITHIN GROUP(ORDER BY REASON_DESC) AS REASON_DESC</span></span>
<span class="line"><span>FROM (</span></span>
<span class="line"><span>SELECT TO_CHAR(TO_DATE(SUBSTR(REPLACE(X1.START_DATE_TIME, &#39; &#39;, &#39;&#39;), 1, 14), &#39;YYYY-MM-DD HH24:MI:SS&#39;),&#39;MM-DD HH24:MM&#39;) ||&#39;~&#39; || TO_CHAR(NVL(TO_DATE(SUBSTR(REPLACE(X1.END_DATE_TIME, &#39; &#39;, &#39;&#39;), 1, 14), &#39;YYYY-MM-DD HH24:MI:SS&#39;), SYSDATE),&#39;MM-DD HH24:MM&#39;) ||&#39;(&#39; ||X1.REASON_DESC || &#39;)&#39; REASON_DESC</span></span>
<span class="line"><span>  FROM EQP_HISTORY X1</span></span>
<span class="line"><span>WHERE X1.EQP_ID = &#39;100216&#39;</span></span>
<span class="line"><span>AND X1.START_DATE_TIME &gt;= TO_CHAR(SYSTIMESTAMP-NUMTODSINTERVAL(30,&#39;DAY&#39;),&#39;YYYYMMDD&#39;) || &#39; 000000000&#39;</span></span>
<span class="line"><span>AND X1.STATE = &#39;Down&#39;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 동영상 앱 만들기</span></span>
<span class="line"><span>https://www.youtube.com/channel/UCjWnBKjlXv550KDiBjtW8vQ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## dpi 관련</span></span>
<span class="line"><span>https://codeday.me/ko/qa/20190318/90815.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Backgroudworker</span></span>
<span class="line"><span>https://it-jerryfamily.tistory.com/entry/BackgroundWorker-class</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 제네릭을 활용한 Mybatis Upgrade</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface TestInterface&lt;T&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 제네릭 인터페이스 사용 https://slaner.tistory.com/122</span></span>
<span class="line"><span>    T Select(T _dto);</span></span>
<span class="line"><span>    T Insert(T _dto);</span></span>
<span class="line"><span>    T Update(T _dto);</span></span>
<span class="line"><span>    T Delete(T _dto);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## C# AutoScaleMode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## SQL 만들 때, WITH절은 조회조건 최소화로 만들지 않을경우 모든데이터를 조회하게 되어 속도이슈가발생할 수 있다.</span></span>
<span class="line"><span>## 인덱스 오라클인덱스 찾기 오라클 쿼리 성능향상</span></span>
<span class="line"><span>http://blog.syszone.co.kr/791</span></span>
<span class="line"><span>https://12bme.tistory.com/204</span></span>
<span class="line"><span>https://rongscodinghistory.tistory.com/113</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#SQL LIKE &quot;%%&#39;가 있을 경우도 느림  LIKE&#39;aaa%&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## C# 에서 한글 찾기  https://m.blog.naver.com/PostView.nhn?blogId=nameisljk&amp;logNo=110190791875&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F</span></span>
<span class="line"><span>## 포터블 깃 사용</span></span>
<span class="line"><span>https://rainlethe.tistory.com/entry/git-%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95</span></span>
<span class="line"><span>C:</span></span>
<span class="line"><span>cd C:\\Users\\Administrator\\abc</span></span>
<span class="line"><span>C:\\DEV\\Downloads\\PortableGit\\git-cmd.exe git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git pull</span></span>
<span class="line"><span>git add *.*</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span>set timestamp=%DATE% %TIME%</span></span>
<span class="line"><span>git commit -m &quot;%timestamp%&quot;</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span>git push origin master</span></span>
<span class="line"><span>git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:loop</span></span>
<span class="line"><span>git pull</span></span>
<span class="line"><span>git add *.*</span></span>
<span class="line"><span>set timestamp=%DATE% %TIME%</span></span>
<span class="line"><span>git commit -m &quot;%timestamp%&quot;</span></span>
<span class="line"><span>git push origin master</span></span>
<span class="line"><span>timeout 60</span></span>
<span class="line"><span>goto loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 원격흔적없이 사용하기</span></span>
<span class="line"><span>https://stackoverflow.com/questions/14481882/login-to-remote-using-mstsc-admin-with-password</span></span>
<span class="line"><span>cmd cmdkey /generic:&quot;&lt;server&gt;&quot; /user:&quot;&lt;user&gt;&quot; /pass:&quot;&lt;pass&gt;&quot;</span></span>
<span class="line"><span>cmd mstsc /public /v:&quot;&lt;ip&gt;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# 에러</span></span>
<span class="line"><span>구문 오류: &#39;C&#39; 연산자 뒤에 피연산자가 없습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ActiveMQ관련 에러</span></span>
<span class="line"><span>ERR Cannot publish to a deleted Destination</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 읽기(여자가봐도 이쁜여자)</span></span>
<span class="line"><span>https://brunch.co.kr/@jiteju/1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## MongoDB관리툴 Robo 3T</span></span>
<span class="line"><span>https://javacpro.tistory.com/65</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## C#으로 서버를 만들면 느리다?!</span></span>
<span class="line"><span>http://www.gamecodi.com/board/zboard.php?id=GAMECODI_Talkdev&amp;no=3572</span></span>
<span class="line"><span>http://www.gamecodi.com/board/zboard.php?id=GAMECODI_Talkdev&amp;page=1&amp;sn1=&amp;divpage=1&amp;sn=off&amp;ss=on&amp;sc=on&amp;select_arrange=headnum&amp;desc=asc&amp;no=5183</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# Design Pattern AutoMapper</span></span>
<span class="line"><span>https://www.infoworld.com/article/3192900/how-to-work-with-automapper-in-c.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 설계관련</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# data model DataModel</span></span>
<span class="line"><span>https://docs.microsoft.com/ko-kr/aspnet/mvc/overview/older-versions/getting-started-with-aspnet-mvc3/cs/adding-a-model</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Interface</span></span>
<span class="line"><span>http://blog.naver.com/PostView.nhn?blogId=knight50&amp;logNo=80100555418&amp;redirect=Dlog&amp;widgetTypeCall=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Git Student Pack</span></span>
<span class="line"><span>https://education.github.com/pack</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Azure DevOps https://visualstudio.microsoft.com/ko/vso/?rr=https%3A%2F%2Foojjrs.tistory.com%2F108</span></span>
<span class="line"><span>## 코딩된 UI 테스트</span></span>
<span class="line"><span>https://www.youtube.com/watch?v=KcSt22jhtEU</span></span>
<span class="line"><span>https://github.com/TestStack/White</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## VisualStudio Team Service https://zenoahn.tistory.com/72</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## .NET Core ado.net dapper  Dapper.NET  https://elanderson.net/2019/02/asp-net-core-with-dapper/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Dapper.NET 사용법  https://jacking.tistory.com/1117</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install Shield 사용법 VisualStudio InstallShiled(인스톨쉴드) 설치(Setup) 파일 만들기 https://rocabilly.tistory.com/186</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Interface의 활용</span></span>
<span class="line"><span>https://jeong-pro.tistory.com/52</span></span>
<span class="line"><span>https://brunch.co.kr/@john7711/2</span></span>
<span class="line"><span>https://swconsulting.tistory.com/56</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://brunch.co.kr/@jiteju/1</span></span>
<span class="line"><span>https://m.blog.naver.com/PostView.nhn?blogId=wlans2&amp;logNo=221378609237&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Generic</span></span>
<span class="line"><span>https://hooni30.tistory.com/97</span></span>
<span class="line"><span>http://latedreamer.blogspot.com/2016/12/c-generic.html</span></span>
<span class="line"><span>https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Patial Class</span></span>
<span class="line"><span>https://storycompiler.tistory.com/215</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 확장메소드, 분할클래스, 중첩클래스</span></span>
<span class="line"><span>https://blog.hexabrain.net/144</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 2018.06.27. [WPF] 권한상승</span></span>
<span class="line"><span></span></span>
<span class="line"><span>visual studio 2017 office developer tools download</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://social.msdn.microsoft.com/Forums/vstudio/en-US/5e99fcab-c136-4b62-b38a-1bbc50c38cdb/office-developer-tools-in-vs-2017-rc?forum=vssetup</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://insurang.tistory.com/108</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### microsoft.office.core visual studio 2017</span></span>
<span class="line"><span>https://stackoverflow.com/questions/5932794/microsoft-office-core-reference-missing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clickonce는 요청실행 수준</span></span>
<span class="line"><span>http://www.sysnet.pe.kr/Default.aspx?mode=2&amp;sub=0&amp;pageno=6&amp;detail=1&amp;wid=950</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### wpf ExecutablePath</span></span>
<span class="line"><span>https://stackoverflow.com/questions/17966871/c-sharp-application-executablepath-on-wpf-framework-3-5/17967155</span></span>
<span class="line"><span>https://stackoverflow.com/questions/11023998/clickonce-does-not-support-the-request-execution-level-requireadministrator</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Text;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using System.Windows;</span></span>
<span class="line"><span>using System.Windows.Controls;</span></span>
<span class="line"><span>using System.Windows.Data;</span></span>
<span class="line"><span>using System.Windows.Documents;</span></span>
<span class="line"><span>using System.Windows.Input;</span></span>
<span class="line"><span>using System.Windows.Media;</span></span>
<span class="line"><span>using System.Windows.Media.Imaging;</span></span>
<span class="line"><span>using System.Windows.Navigation;</span></span>
<span class="line"><span>using System.Windows.Shapes;</span></span>
<span class="line"><span>using Microsoft.Office.Interop.PowerPoint;</span></span>
<span class="line"><span>using Microsoft.Office.Core;</span></span>
<span class="line"><span>using System.Security.Principal;</span></span>
<span class="line"><span>using System.Diagnostics;</span></span>
<span class="line"><span>using System.Reflection;</span></span>
<span class="line"><span>namespace WpfApp1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// MainWindow.xaml에 대한 상호 작용 논리</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    public partial class MainWindow : Window</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string Path = @&quot;C:\\DEV\\comment_20180627.ppt&quot;;</span></span>
<span class="line"><span>        Presentation PPT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public MainWindow()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string codeBase = Assembly.GetExecutingAssembly().CodeBase;</span></span>
<span class="line"><span>            UriBuilder uri = new UriBuilder(codeBase);</span></span>
<span class="line"><span>            string path = Uri.UnescapeDataString(uri.Path);</span></span>
<span class="line"><span>            //if (IsAdministrator() == false)</span></span>
<span class="line"><span>            //{</span></span>
<span class="line"><span>            //    try</span></span>
<span class="line"><span>            //    {</span></span>
<span class="line"><span>            //        ProcessStartInfo procInfo = new ProcessStartInfo();</span></span>
<span class="line"><span>            //        procInfo.UseShellExecute = true;</span></span>
<span class="line"><span>            //        procInfo.FileName = path;</span></span>
<span class="line"><span>            //        procInfo.WorkingDirectory = Environment.CurrentDirectory;</span></span>
<span class="line"><span>            //        procInfo.Verb = &quot;runas&quot;;</span></span>
<span class="line"><span>            //        Process.Start(procInfo);</span></span>
<span class="line"><span>            //    }</span></span>
<span class="line"><span>            //    catch (Exception ex)</span></span>
<span class="line"><span>            //    {</span></span>
<span class="line"><span>            //        MessageBox.Show(ex.Message.ToString());</span></span>
<span class="line"><span>            //    }</span></span>
<span class="line"><span>            //    return;</span></span>
<span class="line"><span>            //}</span></span>
<span class="line"><span>            //InitializeComponent();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        public static bool IsAdministrator()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            WindowsIdentity identity = WindowsIdentity.GetCurrent();</span></span>
<span class="line"><span>            if (null != identity)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                WindowsPrincipal principal = new WindowsPrincipal(identity);</span></span>
<span class="line"><span>                return principal.IsInRole(WindowsBuiltInRole.Administrator);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void MakePPTIamge()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string myPicturesPath = Environment.GetFolderPath(Environment.SpecialFolder.MyPictures);</span></span>
<span class="line"><span>            for (int i = 0; i &lt; PPT.Slides.Count; ++i)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                PPT.Slides[i + 1].Export(string.Format(&quot;{0}\\\\temp{1}.jpg&quot;, myPicturesPath, i), &quot;JPG&quot;,</span></span>
<span class="line"><span>                    (int)PPT.Slides[i + 1].Master.Width, (int)PPT.Slides[i + 1].Master.Height);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void Button_Click(object sender, RoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            ApplicationClass app = new ApplicationClass();</span></span>
<span class="line"><span>            PPT = app.Presentations.Open(Path, MsoTriState.msoTrue, MsoTriState.msoFalse, MsoTriState.msoFalse);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void Button_Click_1(object sender, RoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string myPicturesPath = Environment.GetFolderPath(Environment.SpecialFolder.MyPictures);</span></span>
<span class="line"><span>            for (int i = 0; i &lt; PPT.Slides.Count; ++i)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                PPT.Slides[i + 1].Export(string.Format(&quot;{0}\\\\temp{1}.jpg&quot;, myPicturesPath, i), &quot;JPG&quot;,</span></span>
<span class="line"><span>                    (int)PPT.Slides[i + 1].Master.Width, (int)PPT.Slides[i + 1].Master.Height);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 2018.06.26. [WPF] winform vs WPF</span></span>
<span class="line"><span>http://blog.naver.com/PostView.nhn?blogId=neos_rtos&amp;logNo=220759112213&amp;parentCategoryNo=&amp;categoryNo=34&amp;viewDate=&amp;isShowPopularPosts=true&amp;from=search</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://m.blog.naver.com/PostView.nhn?blogId=jjoommnn&amp;logNo=130033346945&amp;proxyReferer=http%3A%2F%2Fwww.google.co.kr%2Furl%3Fsa%3Dt%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dweb%26cd%3D1%26ved%3D0ahUKEwjB0-yDhvHbAhUIi7wKHdpkApwQFggmMAA%26url%3Dhttp%253A%252F%252Fm.blog.naver.com%252Fjjoommnn%252F130033346945%26usg%3DAOvVaw25NLtRcqFfAGynE89lShXX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://crynut84.tistory.com/72</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://www.sysnet.pe.kr/Default.aspx?mode=3&amp;sub=0&amp;detail=1&amp;wid=4807</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://yoshiki.tistory.com/entry/Winform-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EC%9D%84-WPF-%EC%97%90-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 2018.08.02. [WPF] WebBrowser</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Window</span></span>
<span class="line"><span>        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;</span></span>
<span class="line"><span>        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;</span></span>
<span class="line"><span>        x:Class=&quot;fGrid11.Window1&quot;</span></span>
<span class="line"><span>        Title=&quot;WebBrowserControlSample&quot; Height=&quot;300&quot; Width=&quot;450&quot;&gt;</span></span>
<span class="line"><span>    &lt;Window.CommandBindings&gt;</span></span>
<span class="line"><span>        &lt;CommandBinding Command=&quot;NavigationCommands.BrowseBack&quot; CanExecute=&quot;BrowseBack_CanExecute&quot; Executed=&quot;BrowseBack_Executed&quot; /&gt;</span></span>
<span class="line"><span>        &lt;CommandBinding Command=&quot;NavigationCommands.BrowseForward&quot; CanExecute=&quot;BrowseForward_CanExecute&quot; Executed=&quot;BrowseForward_Executed&quot; /&gt;</span></span>
<span class="line"><span>        &lt;CommandBinding Command=&quot;NavigationCommands.GoToPage&quot; CanExecute=&quot;GoToPage_CanExecute&quot; Executed=&quot;GoToPage_Executed&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/Window.CommandBindings&gt;</span></span>
<span class="line"><span>    &lt;DockPanel&gt;</span></span>
<span class="line"><span>        &lt;ToolBar DockPanel.Dock=&quot;Top&quot;&gt;</span></span>
<span class="line"><span>            &lt;Button Command=&quot;NavigationCommands.BrowseBack&quot; Width=&quot;50&quot; Content=&quot;back&quot;&gt;</span></span>
<span class="line"><span>                &lt;!--&lt;Image Source=&quot;/WpfTutorialSamples;component/Images/arrow_left.png&quot; Width=&quot;16&quot; Height=&quot;16&quot; /&gt;--&gt;</span></span>
<span class="line"><span>            &lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button Command=&quot;NavigationCommands.BrowseForward&quot; Width=&quot;50&quot; Content=&quot;Forward&quot;&gt;</span></span>
<span class="line"><span>                &lt;!--&lt;Image Source=&quot;/WpfTutorialSamples;component/Images/arrow_right.png&quot; Width=&quot;16&quot; Height=&quot;16&quot; /&gt;--&gt;</span></span>
<span class="line"><span>            &lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Separator /&gt;</span></span>
<span class="line"><span>            &lt;TextBox Name=&quot;txtUrl&quot; Width=&quot;300&quot; KeyUp=&quot;txtUrl_KeyUp&quot;  /&gt;</span></span>
<span class="line"><span>            &lt;Button Command=&quot;NavigationCommands.GoToPage&quot; Width=&quot;50&quot; Content=&quot;GoToPage&quot;&gt;</span></span>
<span class="line"><span>                &lt;!--&lt;Image Source=&quot;/WpfTutorialSamples;component/Images/world_go.png&quot; Width=&quot;16&quot; Height=&quot;16&quot; /&gt;--&gt;</span></span>
<span class="line"><span>            &lt;/Button&gt;</span></span>
<span class="line"><span>        &lt;/ToolBar&gt;</span></span>
<span class="line"><span>        &lt;WebBrowser Name=&quot;wbSample&quot; Navigating=&quot;wbSample_Navigating&quot;&gt;&lt;/WebBrowser&gt;</span></span>
<span class="line"><span>    &lt;/DockPanel&gt;</span></span>
<span class="line"><span>&lt;/Window&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Text;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using System.Windows;</span></span>
<span class="line"><span>using System.Windows.Controls;</span></span>
<span class="line"><span>using System.Windows.Data;</span></span>
<span class="line"><span>using System.Windows.Documents;</span></span>
<span class="line"><span>using System.Windows.Input;</span></span>
<span class="line"><span>using System.Windows.Media;</span></span>
<span class="line"><span>using System.Windows.Media.Imaging;</span></span>
<span class="line"><span>using System.Windows.Shapes;</span></span>
<span class="line"><span>namespace fGrid11</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// Window1.xaml에 대한 상호 작용 논리</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    public partial class Window1 : Window</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public Window1()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            InitializeComponent();</span></span>
<span class="line"><span>            wbSample.Navigate(&quot;http://www.wpf-tutorial.com&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void txtUrl_KeyUp(object sender, KeyEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (e.Key == Key.Enter)</span></span>
<span class="line"><span>                wbSample.Navigate(txtUrl.Text);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void wbSample_Navigating(object sender, System.Windows.Navigation.NavigatingCancelEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            txtUrl.Text = e.Uri.OriginalString;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void BrowseBack_CanExecute(object sender, CanExecuteRoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            e.CanExecute = ((wbSample != null) &amp;&amp; (wbSample.CanGoBack));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void BrowseBack_Executed(object sender, ExecutedRoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            wbSample.GoBack();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void BrowseForward_CanExecute(object sender, CanExecuteRoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            e.CanExecute = ((wbSample != null) &amp;&amp; (wbSample.CanGoForward));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void BrowseForward_Executed(object sender, ExecutedRoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            wbSample.GoForward();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void GoToPage_CanExecute(object sender, CanExecuteRoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            e.CanExecute = true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private void GoToPage_Executed(object sender, ExecutedRoutedEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            wbSample.Navigate(txtUrl.Text);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## [C#] Inter Process Comminication</span></span>
<span class="line"><span>### MemoryMappedFile</span></span>
<span class="line"><span>https://www.codeproject.com/Articles/138290/Programming-Memory-Mapped-Files-with-the-NET-Frame</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### MemoryStream</span></span>
<span class="line"><span>https://msdn.microsoft.com/ko-kr/library/system.io.memorystream(v=vs.110).aspx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### IPC</span></span>
<span class="line"><span>http://12bme.tistory.com/227</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# Process간 메세지 전송 SendMessage</span></span>
<span class="line"><span>출처: http://ehdrn.tistory.com/295 [동구의 블로그]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### SendMessage</span></span>
<span class="line"><span>http://slaner.tistory.com/68</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### int To IntPtr</span></span>
<span class="line"><span>https://social.msdn.microsoft.com/Forums/vstudio/en-US/321053ee-44c9-4562-a2d3-01652a825e4e/pinvokes-int-to-intptr?forum=csharpgeneral</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### c# Handle wpf</span></span>
<span class="line"><span>https://social.msdn.microsoft.com/Forums/vstudio/en-US/2536567a-cbce-4632-b224-ca00d633be95/how-to-get-handle-for-a-image-control-in-wpf?forum=wpf</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# web api example</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://docs.microsoft.com/en-us/aspnet/web-api/overview/advanced/dependency-injection</span></span>
<span class="line"><span>https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api</span></span>
<span class="line"><span>https://docs.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api</span></span>
<span class="line"><span>https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>USE [TRADING]</span></span>
<span class="line"><span>GO</span></span>
<span class="line"><span>SET QUOTED_IDENTIFIER ON</span></span>
<span class="line"><span>GO</span></span>
<span class="line"><span>CREATE TABLE [dbo].[Employee](</span></span>
<span class="line"><span>       [EmployeeNo] [int] IDENTITY(1,1) NOT NULL,</span></span>
<span class="line"><span>       [EmployeeName] [nvarchar](100) NULL,</span></span>
<span class="line"><span>       [EmployeeEmail] [nvarchar](200) NULL,</span></span>
<span class="line"><span>       [Department] [nvarchar](100) NULL,</span></span>
<span class="line"><span>       [EmployeeManagerName] [nvarchar](200) NULL,</span></span>
<span class="line"><span>       [EmployeeManagerEmail] [nvarchar](200) NULL</span></span>
<span class="line"><span>) ON [PRIMARY]</span></span>
<span class="line"><span>GO</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# ref</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://www.geeksforgeeks.org/ref-in-c-sharp/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# Mybatis.NET</span></span>
<span class="line"><span>사용하는 노하우</span></span>
<span class="line"><span>https://dever.tistory.com/237</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# Hashtable vs Dictionary&lt;String,Object&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://dever.tistory.com/category/Visual%20Studio/C%23</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# 도구상자(ToolBox)에 Control 추가 2021.02.17.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 도구상자에 컨텍스트 메뉴에서 &#39;항목선택&#39; 클릭</span></span>
<span class="line"><span>2. 도구상자 항목 선택에서 &#39;찾아보기&#39; 클릭</span></span>
<span class="line"><span>3. 해당 dll을 선택 시, 항목이 나타남</span></span>
<span class="line"><span>(나타나는 항목은 UserControl, Control을 상속받은 Control, Component를 상속받은 구성요소, ToolBoxItem을 true로 준 Control)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>도구상자에 Control이 나타나지 않을 경우 해당 Control 상단에 [ToolboxItem(true]를 적용</span></span>
<span class="line"><span></span></span>
<span class="line"><span>amespace F5074.DevExpressWinforms.MyUserControl</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    [ToolboxItem(true]</span></span>
<span class="line"><span>    public partial class MySearchLookUpEdit : SearchLookUpEdit</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public MySearchLookUpEdit()</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## C# runtime add property to class 2021.03.08.</span></span>
<span class="line"><span>https://stackoverflow.com/questions/14724822/how-can-i-add-properties-to-a-class-on-runtime-in-c</span></span>
<span class="line"><span>https://docs.microsoft.com/en-us/dotnet/api/system.reflection.emit.typebuilder.defineproperty?redirectedfrom=MSDN&amp;view=net-5.0#System_Reflection_Emit_TypeBuilder_DefineProperty_System_String_System_Reflection_PropertyAttributes_System_Type_System_Type___</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## C# list to datatable 2021.03.08.</span></span>
<span class="line"><span>https://stackoverflow.com/questions/564366/convert-generic-list-enumerable-to-datatable</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# dynamic object add property 2021.03.10.</span></span>
<span class="line"><span>https://stackoverflow.com/questions/3934161/adding-members-to-a-dynamic-object-at-runtime/12268797</span></span>
<span class="line"><span>https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/types/walkthrough-creating-and-using-dynamic-objects</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# runtime add datamember 2021.03.11.</span></span>
<span class="line"><span>https://stackoverflow.com/questions/8391824/adding-dynamic-datamembers-to-datacontract</span></span>
<span class="line"><span>https://stackoverflow.com/questions/23713965/configuring-wcf-data-contract-for-proper-json-response/23730772#23730772</span></span>
<span class="line"><span>https://stackoverflow.com/questions/4836683/when-to-use-datacontract-and-datamember-attributes/4836803</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# TypeExtender 2021.03.18.</span></span>
<span class="line"><span>https://stackoverflow.com/questions/14663763/how-to-add-an-attribute-to-a-property-at-runtime</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# Unit Test 2021.03.18.</span></span>
<span class="line"><span>https://jacking75.github.io/csharp_UnitTest/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# 클래스의 프로퍼티 List 가져오기 및 해당 프로퍼티 값 설정, 가져오기 (Get Property LIsts, Get Method Lists)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://shunmania.com/295</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### WebServiceHost 2021.03.18.</span></span>
<span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    WebServiceHost host = new WebServiceHost(typeof(DeployService), new Uri(&quot;http://localhost:8000/&quot;));</span></span>
<span class="line"><span>    try</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ServiceEndpoint ep = host.AddServiceEndpoint(typeof(IDeployService), new WebHttpBinding(), &quot;&quot;);</span></span>
<span class="line"><span>        host.Open();</span></span>
<span class="line"><span>        using (ChannelFactory&lt;IDeployService&gt; cf = new ChannelFactory&lt;IDeployService&gt;(new WebHttpBinding(), &quot;http://localhost:8000&quot;))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cf.Endpoint.Behaviors.Add(new WebHttpBehavior());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            IDeployService channel = cf.CreateChannel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Console.WriteLine(&quot;Press &lt;ENTER&gt; to terminate&quot;);</span></span>
<span class="line"><span>        Console.ReadLine();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        host.Close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (CommunicationException cex)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Console.WriteLine(&quot;An exception occurred: {0}&quot;, cex.Message);</span></span>
<span class="line"><span>        host.Abort();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# Form Lacalizable</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Form의 Localizable 속성을 True로 변경시 Form.resx에 다국어가 필요한 언어를 입력할 수 있도록 화면에 해당하는 text가 등록됨</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# WCF Binding관련 2021.03.30.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ServiceHost에 nettcpBinding,  WebServiceHost에 WebHttpBinding 적절한 Binding 설정</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ChannelFactory&lt;T&gt; factory = new ChannelFactory&lt;T&gt;();</span></span>
<span class="line"><span>factory.Endpoint.Address = new EndpointAddress(address);</span></span>
<span class="line"><span>WebHttpBinding binding = new WebHttpBinding(){ MaxBufferPoolSize = Int32.MaxValue, MaxBufferSize = Int32.MaxValue, MaxReceivedMessageSize = Int32.MaxValue };</span></span>
<span class="line"><span>factory.Endpoint.Binding = binding;</span></span>
<span class="line"><span>// WebHttpBinding Endpoint Behaviors</span></span>
<span class="line"><span>factory.Endpoint.Behaviors.Add(new WebHttpBehavior());</span></span>
<span class="line"><span>factory.Endpoint.Contract.ContractType = typeof(T);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### C# T4 Template</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://m.blog.naver.com/PostView.nhn?blogId=xyz37&amp;logNo=50080758940&amp;proxyReferer=https:%2F%2Fwww.google.com%2F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#= &quot;using System;&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;using System.Collections.Generic;&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;using System.Linq;&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;using System.Text;&quot; #&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#= &quot;namespace T4TemplateTest01&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;{&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot; class Program&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot; {&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;  static void Main(string[] args)&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;  {&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;  test&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;  }&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot; }&quot; #&gt;</span></span>
<span class="line"><span>&lt;#= &quot;}&quot; #&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://soowankim.github.io/2019-02-20/TextTemplateTransformationToolkit/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#@ template debug=&quot;false&quot; hostspecific=&quot;false&quot; language=&quot;C#&quot; #&gt;</span></span>
<span class="line"><span>&lt;#@ output extension=&quot;.cs&quot; #&gt;</span></span>
<span class="line"><span>&lt;# var properties = new string [] {&quot;P1&quot;, &quot;P2&quot;, &quot;P3&quot;}; #&gt;</span></span>
<span class="line"><span>// This is generated code:</span></span>
<span class="line"><span>class MyGeneratedClass {</span></span>
<span class="line"><span>&lt;# // This code runs in the text template:</span></span>
<span class="line"><span>  foreach (string propertyName in properties)  { #&gt;</span></span>
<span class="line"><span>  // Generated code:</span></span>
<span class="line"><span>  private int &lt;#= propertyName #&gt; = 0;</span></span>
<span class="line"><span>&lt;# } #&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)]))}const g=n(l,[["render",t]]);export{d as __pageData,g as default};
