(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{327:function(_,a,e){"use strict";e.r(a);var t=e(10),D=Object(t.a)({},(function(){var _=this,a=_._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("p",[_._v("use master\ngo")]),_._v(" "),a("p",[_._v("-- 백업 파일 목록 확인\nRESTORE FILELISTONLY\nFROM DISK='D:\\DB_DATA\\20180220_TEST.bak' -- 백업해둔 .BAK 파일")]),_._v(" "),a("p",[_._v("-- 새로운 이름으로 데이터베이스 복원\nRESTORE DATABASE [TEST] --새롭게 복원할 DB명\nFROM DISK='D:\\DB_DATA\\20180220_TEST.bak' --백업해둔 .BAK 파일\nWITH RECOVERY,\nMOVE 'TEST' TO 'D:\\DB_DATA\\TEST2.mdf', --MOVE 'HVI_2011'은 첫번째 LOCALNAME (PMS_Data)\nMOVE 'TEST_log' TO 'D:\\DB_DATA\\TEST2_log.ldf', REPLACE --MOVE 'HVI_2011_LOG'는 2번째 LOGICALNAME (PMS_Log)")]),_._v(" "),a("p",[_._v("GO")]),_._v(" "),a("p",[_._v("--logical_file_name  확인\nuse TEST\ngo")]),_._v(" "),a("p",[_._v("SELECT file_id, name as [logical_file_name],physical_name\nfrom sys.database_files")]),_._v(" "),a("p",[_._v("--logical_file_name  변경\nUSE [master]\nGO\nALTER DATABASE [TEST] MODIFY FILE (NAME = DYERP, NEWNAME = WOOJE);\nGO\nALTER DATABASE [TEST] MODIFY FILE (NAME = DYERP_log, NEWNAME = WOOJE_log);\nGO")]),_._v(" "),a("p",[_._v("*LocalDB\n1.LocalDB설치")]),_._v(" "),a("p",[_._v("https://www.microsoft.com/ko-kr/download/details.aspx?id=29062")]),_._v(" "),a("p",[_._v("KOR\\x64\\SqlLocaLDB.MSI\nKOR\\x64\\SQLManagementStudio_x64_KOR.exe")]),_._v(" "),a("p",[_._v("2.LocalDB 인스턴스 만들기")]),_._v(" "),a("p",[_._v("http://orangetazo.tistory.com/11")]),_._v(" "),a("p",[_._v("CMD에서\n생성 : SqlLocalDB create 'DB명'\n삭제 : SqlLocalDB stop 'DB명'  > SqlLocalDB delete 'DB명'")]),_._v(" "),a("p",[_._v("3.기존DB에서 LocalDB로 mdf,ldf파일옮기기")]),_._v(" "),a("p",[_._v("---mdf, ldf 파일 복사 http://faq.hostway.co.kr/Windows_DB/7718")]),_._v(" "),a("p",[_._v("sp_detach_db 'SKWD'\nGO\nsp_attach_db 'SKWD' , 'D:\\DB_DATA\\SKWD.mdf' , 'D:\\DB_DATA\\SKWD_log.ldf'\nGO")]),_._v(" "),a("p",[_._v("4.Visual Studio에서 LocalDB 연결방법")]),_._v(" "),a("p",[_._v("https://docs.microsoft.com/ko-kr/sql/database-engine/configure-windows/sql-server-2016-express-localdb")]),_._v(" "),a("p",[_._v('"Server=(localdb)\\MSSQLLocalDB;Integrated Security=true"')]),_._v(" "),a("p",[_._v('"Server=(LocalDB)\\MSSQLLocalDB; Integrated Security=true ;AttachDbFileName=D:\\Data\\MyDB1.mdf"')]),_._v(" "),a("p",[_._v('private static string DB_CONN_ADDR = "Server=(LocalDB)\\v11.0; Integrated Security=true ;AttachDbFileName=C:\\Data\\SKWD.mdf;";')])])}),[],!1,null,null,null);a.default=D.exports}}]);