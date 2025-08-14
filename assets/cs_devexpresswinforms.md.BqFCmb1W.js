import{_ as s,c as a,o as p,a4 as e}from"./chunks/framework.C2Gk6cJW.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cs/devexpresswinforms.md","filePath":"cs/devexpresswinforms.md","lastUpdated":1755149145000}'),l={name:"cs/devexpresswinforms.md"};function t(i,n,o,r,c,u){return p(),a("div",null,n[0]||(n[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## GridControl MaskEdit</span></span>
<span class="line"><span>           this.repositoryItemTextEdit1.AutoHeight = false;</span></span>
<span class="line"><span>           this.repositoryItemTextEdit1.Mask.EditMask = &quot;[0-9]{4}[ ].{5}&quot;;</span></span>
<span class="line"><span>           this.repositoryItemTextEdit1.Mask.MaskType = DevExpress.XtraEditors.Mask.MaskType.RegEx;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DataTable</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DataTable empTbl = new DataTable();</span></span>
<span class="line"><span>List&lt;string&gt; list = empTbl.AsEnumerable().Select(x =&gt; x.Field&lt;string&gt;(&quot;EMP_ID&quot;)).Distinct().ToList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>var existValueCells = (from cell in this.dataGridViewInput.Rows[this.dataGridViewInput.SelectedCells[0].RowIndex].Cells.OfType&lt;DataGridViewCell&gt;()</span></span>
<span class="line"><span>                                               where !string.IsNullOrEmpty(cell.OwningColumn.DataPropertyName)</span></span>
<span class="line"><span>                                                     &amp;&amp; cell.OwningColumn.DataPropertyName.Split(&#39;_&#39;)[0].Equals(&quot;VALUE&quot;)</span></span>
<span class="line"><span>                                                     &amp;&amp; !cell.OwningColumn.DataPropertyName.Equals(&quot;VALUE_TYPE&quot;)</span></span>
<span class="line"><span>                                                     &amp;&amp; int.Parse(cell.OwningColumn.DataPropertyName.Split(&#39;_&#39;)[1]) &lt; int.Parse(this.dataGridViewInput.SelectedCells[0].OwningColumn.DataPropertyName.Split(&#39;_&#39;)[1])</span></span>
<span class="line"><span>                                                     &amp;&amp; (cell.Value == null || string.IsNullOrEmpty(cell.Value.ToString()))</span></span>
<span class="line"><span>                                               select cell).ToList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 192.168.13.234 user</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## XtraDiagram Create Custom Shape</span></span>
<span class="line"><span>// https://www.devexpress.com/Support/Center/Question/Details/T572792/how-to-add-pre-excisting-shapes-in-stencil</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var stencil = DiagramStencil.Create(&quot;CustomShapes&quot;, &quot;Custom Shapes&quot;, stream, shapeName =&gt; shapeName);</span></span>
<span class="line"><span>    stencil.RegisterShape(BasicShapes.Ellipse);</span></span>
<span class="line"><span>    DiagramToolboxRegistrator.RegisterStencil(stencil);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#GridControl</span></span>
<span class="line"><span>##Sorting devexpress winforms gridview sorting arrow invisible</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/692/Controls-and-Libraries/Data-Grid/Sorting/Sorting-in-Code</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/Q324369/how-to-hide-grid-column-sort-order-glyph</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        void gridView1_CustomDrawColumnHeader(object sender, ColumnHeaderCustomDrawEventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            SortGhyphHideHelper.RemoveSortGlyphIfNeccessary(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>    public class SortGhyphHideHelper</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public static void  RemoveSortGlyphIfNeccessary(ColumnHeaderCustomDrawEventArgs args)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            DrawElementInfo elementInfo = FindSortGlyphElement(args.Info);</span></span>
<span class="line"><span>            if (elementInfo == null)</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            args.Info.InnerElements.Remove(elementInfo);</span></span>
<span class="line"><span>            args.Painter.CalcObjectBounds(args.Info);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private static DrawElementInfo  FindSortGlyphElement(DevExpress.XtraGrid.Drawing.GridColumnInfoArgs info)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            foreach (DrawElementInfo innerElement in info.InnerElements)</span></span>
<span class="line"><span>                if (innerElement.ElementInfo is SortedShapeObjectInfoArgs)</span></span>
<span class="line"><span>                    return innerElement;</span></span>
<span class="line"><span>            return null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl Sorting</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/A36/how-to-sort-the-grid-by-a-particular-column</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DPI</span></span>
<span class="line"><span>C:\\Users\\Public\\Documents\\DevExpress Demos 17.1\\Components\\WinForms\\CS\\LayoutMainDemo</span></span>
<span class="line"><span>C:\\Users\\Public\\Documents\\DevExpress Demos 17.1\\Components\\WinForms\\CS\\LayoutMainDemo\\Modules\\Multilanguage\\MultilanguageForm.cs</span></span>
<span class="line"><span>#SreadsheetControl</span></span>
<span class="line"><span>## 한줄띄어쓰기</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T538124/spreadsheet-text-vertical</span></span>
<span class="line"><span>worksheet.Cells[&quot;A1&quot;].Alignment.WrapText = true;</span></span>
<span class="line"><span>worksheet.Cells[&quot;A1&quot;].Value = &quot;2\\r\\n0\\r\\n1\\r\\n7&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## TextEdit devexpress winforms textedit select all on focus</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T723050/textedit-select-all-on-focus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        private void txtEdit_Enter(object sender, EventArgs e)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            var edit = ((DevExpress.XtraEditors.TextEdit)sender);</span></span>
<span class="line"><span>            BeginInvoke(new MethodInvoker(() =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                edit.SelectionStart = 0;</span></span>
<span class="line"><span>                edit.SelectionLength = edit.Text.Length;</span></span>
<span class="line"><span>            }));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl LayoutView</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           //Properties.Settings.Default.GridHeight = this.layoutViewField_layoutViewColumn5.Height;</span></span>
<span class="line"><span>           //Properties.Settings.Default.GridHeight = this.layoutView1.CardMinSize.Height;</span></span>
<span class="line"><span>           //this.layoutViewField_layoutViewColumn5.ControlMinSize;</span></span>
<span class="line"><span>           //Properties.Settings.Default.Save();</span></span>
<span class="line"><span>           for (int x = 0; x &lt; this.layoutViewCard1.Items.Count; x++)</span></span>
<span class="line"><span>           {</span></span>
<span class="line"><span>               if(this.layoutViewCard1.Items[x].CustomizationFormText == &quot;오더리스트&quot;)</span></span>
<span class="line"><span>               {</span></span>
<span class="line"><span>                   Properties.Settings.Default.GridHeight = layoutViewCard1.Items[x].Bounds.Size.Height;</span></span>
<span class="line"><span>                   Properties.Settings.Default.Save();</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl RepositoryAnyControl 애니컨트롤일 경우</span></span>
<span class="line"><span>devexpress AllowBitmapCache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T559987/synchronizing-charts-in-cells</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## FlyoutPanel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>flyoutPanel1.ButtonClick += FlyoutPanel1_ButtonClick;</span></span>
<span class="line"><span>flyoutPanel1.OptionsButtonPanel.ButtonPanelContentAlignment = System.Drawing.ContentAlignment.MiddleCenter;</span></span>
<span class="line"><span>flyoutPanel1.OptionsButtonPanel.ButtonPanelHeight = 60;</span></span>
<span class="line"><span>flyoutPanel1.OptionsButtonPanel.ButtonPanelLocation = DevExpress.Utils.FlyoutPanelButtonPanelLocation.Bottom;</span></span>
<span class="line"><span>buttonImageOptions1.ImageUri.Uri = &quot;Replace;Office2013&quot;;</span></span>
<span class="line"><span>buttonImageOptions2.ImageUri.Uri = &quot;Apply;Office2013&quot;;</span></span>
<span class="line"><span>buttonImageOptions3.ImageUri.Uri = &quot;Cancel;Office2013&quot;;</span></span>
<span class="line"><span>flyoutPanel1.OptionsButtonPanel.Buttons.AddRange(new DevExpress.XtraEditors.ButtonPanel.IBaseButton[] {</span></span>
<span class="line"><span>//new DevExpress.Utils.PeekFormButton(&quot;작업이동&quot;, true, buttonImageOptions1, true, null),</span></span>
<span class="line"><span>new DevExpress.Utils.PeekFormButton(&quot;적용&quot;, true, buttonImageOptions2, true, null),</span></span>
<span class="line"><span>new DevExpress.Utils.PeekFormButton(&quot;취소&quot;, true, buttonImageOptions3, true, null)});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ZoomTrackBarControl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var Control = sender as ZoomTrackBarControl;</span></span>
<span class="line"><span>GridView1.Appearance.Row.FontSizeDelta = Control.Value;</span></span>
<span class="line"><span>GridView1.Appearance.HeaderPanel.FontSizeDelta = Control.Value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void ZoomTrackBarControl1_ValueChanged(object sender, EventArgs e)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //var control = sender as ZoomTrackBarControl;</span></span>
<span class="line"><span>    //layoutView1.Appearance.Card.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, control.Value, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    //layoutView1.Appearance.HeaderPanel.FontSizeDelta = control.Value;</span></span>
<span class="line"><span>    float fontSize = defaultFontSize;</span></span>
<span class="line"><span>    LayoutView layoutView = layoutView1;</span></span>
<span class="line"><span>    fontSize += Convert.ToInt32(zoomTrackBarControl1.EditValue) * 3;</span></span>
<span class="line"><span>    Font fnt = new Font(&quot;맑은 고딕&quot;, fontSize);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GAUGE_CONTROL&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GAUGE_CONTROL&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;CHART_CONTROL&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;CHART_CONTROL&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GRID_CONTROL&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GRID_CONTROL&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;ORDER_COUNT&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;ORDER_COUNT&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;STATE&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;STATE&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;MONTH_QTY&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;MONTH_QTY&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;LOAD_RATE&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;LOAD_RATE&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;EQP_ID&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;EQP_ID&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;EQP_DESC&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;EQP_DESC&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;CHART_CONTROL&quot;].ColumnEdit.Appearance.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;CHART_CONTROL&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;CHART_CONTROL&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GRID_CONTROL&quot;].ColumnEdit.Appearance.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GRID_CONTROL&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GRID_CONTROL&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GAUGE_CONTROL&quot;].ColumnEdit.Appearance.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GAUGE_CONTROL&quot;].AppearanceHeader.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>    layoutView.Columns[&quot;GAUGE_CONTROL&quot;].AppearanceCell.Font = new System.Drawing.Font(&quot;맑은 고딕&quot;, fontSize, System.Drawing.FontStyle.Bold);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## c# 해상도에 따른 변경</span></span>
<span class="line"><span>http://www.hoons.net/Board/qacshap/Content/77357</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl RepositoryItemPictureEdit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resultList[x].ITEM_IMG = (Image)SmartiPOP.Dashboard.Properties.Resources.ResourceManager.GetObject(&quot;_3&quot;);</span></span>
<span class="line"><span>using System.Resources;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RepositoryItemPictureEdit ritem4 = new RepositoryItemPictureEdit();</span></span>
<span class="line"><span>ritem4.SizeMode = DevExpress.XtraEditors.Controls.PictureSizeMode.Stretch;</span></span>
<span class="line"><span>this.layoutViewField_layoutViewColumn1.Size = new System.Drawing.Size(283, 61);</span></span>
<span class="line"><span>//ResourceManager rm = SmartiPOP.Dashboard.Properties.Resources.ResourceManager;</span></span>
<span class="line"><span>//Bitmap myImage = (Bitmap)rm.GetObject(&quot;_3&quot;);</span></span>
<span class="line"><span>//ritem4.Appearance.Image = myImage;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].ColumnEdit = ritem4;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].LayoutViewField.TextVisible = false;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].OptionsColumn.AllowSort = DevExpress.Utils.DefaultBoolean.False;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].OptionsFilter.AllowFilter = false;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].OptionsColumn.ReadOnly = true;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].AppearanceCell.TextOptions.HAlignment = HorzAlignment.Near;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].AppearanceHeader.Options.UseFont = true;</span></span>
<span class="line"><span>layoutView.Columns[&quot;ITEM_IMG&quot;].AppearanceCell.Options.UseFont = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl AnyControl</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T336707/layoutview-how-to-display-relational-data-correctly</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T157840/embedding-a-user-control-in-a-winforms-xtragrid</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T190833/charts-or-grids-in-treelist-control</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## TextEdit</span></span>
<span class="line"><span>this.tbUserId.Properties.CharacterCasing = System.Windows.Forms.CharacterCasing.Upper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridView SortInfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//gridView.SortInfo.ClearAndAddRange(new[] { new GridMergedColumnSortInfo(new[] { gridView.Columns[0], gridView.Columns[1] }, new[] { ColumnSortOrder.Ascending, ColumnSortOrder.Ascending }) }, 1);</span></span>
<span class="line"><span>//GridSummaryItem summaryItemMaxOrderSum = new GridSummaryItem(DevExpress.Data.SummaryItemType.Count, &quot;EQP_ID&quot;, null, &quot;( 오더수 = {0})&quot;);</span></span>
<span class="line"><span>//GridSummaryItem summaryItemMaxOrderSum2 = gridView.GroupSummary.Add(DevExpress.Data.SummaryItemType.Count, &quot;EQP_ID&quot;, null, &quot;( 오더수 = {0:c2})&quot;);</span></span>
<span class="line"><span>//GridSummaryItem summaryItemMaxOrderSum = gridView.GroupSummary.Add(DevExpress.Data.SummaryItemType.Count, &quot;EQP_ID&quot;, null, &quot;( 오더수 = {0:c2})&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## TextEdit 어퍼로 만들기</span></span>
<span class="line"><span>this.tbUserId.Properties.CharacterCasing = System.Windows.Forms.CharacterCasing.Upper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DateTimeEdit 숫자 수정 가능하도록</span></span>
<span class="line"><span>this.calFromDate.Properties.CalendarTimeEditing = DevExpress.Utils.DefaultBoolean.True;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>입력되는 포맷형태</span></span>
<span class="line"><span>this.calFromDate.Properties.Mask.EditMask = &quot;yyyy-MM-dd HH:mm:ss&quot;;</span></span>
<span class="line"><span>this.calFromDate.Properties.Mask.UseMaskAsDisplayFormat = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.calFromDate.Properties.Mask.EditMask = &quot;yyyy-MM-dd&quot;;</span></span>
<span class="line"><span>this.calFromDate.Properties.Mask.UseMaskAsDisplayFormat = true;</span></span>
<span class="line"><span>드랍버튼 클릭 시 년도가 먼저 보이게 됨</span></span>
<span class="line"><span>this.calFromDate.Properties.VistaCalendarInitialViewStyle = DevExpress.XtraEditors.VistaCalendarInitialViewStyle.YearView;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl RepositoryItemTextEdit -RegEx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //repositoryItemTextEditNumber.Mask.EditMask = @&quot;(\\d{0,3}\\R,\\d{0,3})+(\\R.\\d{0,2})?&quot;;</span><span> //  1,234</span></span>
<span class="line"><span>            repositoryItemTextEditNumber.Mask.EditMask = @&quot;[0-9]{0,3}\\,[0-9]{0,3}(\\.[0-9]{1,2})?&quot;; //  1,234</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            repositoryItemTextEditNumber.Mask.EditMask = @&quot;\\d+(\\R.\\d{0,2})?&quot;; //  1,234</span></span>
<span class="line"><span>            repositoryItemTextEditNumber.Mask.MaskType = DevExpress.XtraEditors.Mask.MaskType.RegEx;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## XtraReport XRSubReport 와  Pagebreak</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T204609/multiple-page-reports</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## DateEdit devexpress dateedit not null text 널값 허용 안함  https://www.devexpress.com/Support/Center/Question/Details/Q299036/dateedit-null-value</span></span>
<span class="line"><span>// DateEdit의 Null값 허용 안함</span></span>
<span class="line"><span>this.fromdate.Properties.AllowNullInput = DevExpress.Utils.DefaultBoolean.False;</span></span>
<span class="line"><span>this.todate.Properties.AllowNullInput = DevExpress.Utils.DefaultBoolean.False;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## XtraReport</span></span>
<span class="line"><span>XtraReport 다시 사용  Save 하고 다시 사용  https://www.devexpress.com/Support/Center/Question/Details/T524253/report-shows-only-one-row</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## SpreadSheet 폰트</span></span>
<span class="line"><span>https://documentation.devexpress.com/OfficeFileAPI/12370/Spreadsheet-Document-API/Examples/Formatting-Cells/How-to-Configure-Cell-Font-Settings</span></span>
<span class="line"><span>https://documentation.devexpress.com/OfficeFileAPI/DevExpress.Spreadsheet.SpreadsheetFont.FontStyle.property</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## SpinEdit EditValueChangedFiringMode</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/DevExpress.XtraEditors.Repository.RepositoryItem.EditValueChangedFiringMode.property</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GaugeControl 게이지컨트롤 스타일매니저</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/18232/Controls-and-Libraries/Gauges/Design-Time-Features/Gauge-Styles-and-Style-Manager</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GaugeControl Ignis 사용법</span></span>
<span class="line"><span>https://www.cnblogs.com/chucklu/p/6093971.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GaugeControl Change Value  in Runtime</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/115306/Controls-and-Libraries/Gauges/Examples/How-to-Move-Value-Indicators-at-Runtime</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Rectangle</span></span>
<span class="line"><span> 경계 색 그리기  https://docs.microsoft.com/ko-kr/dotnet/framework/winforms/advanced/how-to-set-pen-width-and-alignment</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## LayoutView</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/Q352918/card-display-in-layoutview</span></span>
<span class="line"><span>### 레이아웃을 Vertical 모드, 카드가 적을 경우 정렬 방식</span></span>
<span class="line"><span>            layoutView.OptionsMultiRecordMode.MultiRowScrollBarOrientation = ScrollBarOrientation.Vertical;</span></span>
<span class="line"><span>            layoutView.OptionsView.ContentAlignment = ContentAlignment.TopLeft;</span></span>
<span class="line"><span>### 레이아웃 템플릿 저장하고 불러오기</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/Q490895/how-to-restore-the-layoutview-s-template-card-settings-from-layout</span></span>
<span class="line"><span>string path = &quot;test.xml&quot;;</span></span>
<span class="line"><span>layoutView1.RestoreLayoutFromXml(path);</span></span>
<span class="line"><span>layoutView1.SaveLayoutToXml(path);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 캡션색깔 변경하기 (Header)  https://www.devexpress.com/Support/Center/Question/Details/T352991/how-to-indicate-what-a-card-is-focused-n-layoutview-if-the-card-caption-is-hidden</span></span>
<span class="line"><span>            view.OptionsView.AllowBorderColorBlending = true;</span></span>
<span class="line"><span>### LayoutView의 Weight를 변경하기 위해서는 자체 Width를 변경해야 함 (LayoutView에 AnyControl형태로 넣을 경우 Height가 정상 반영이 안되서)</span></span>
<span class="line"><span>    또는 IXtraResizableControl 인터페이스 상속</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl AnyControl devexpress IAnyControlEdit</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T451244/update-datasource-from-ianycontroledit-control</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl group header Merging</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/3500/Controls-and-Libraries/Data-Grid/Grouping</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/DevExpress.XtraGrid.Views.Grid.GridOptionsCustomization.AllowMergedGrouping.property</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## IAnyControl 날짜별로 그리드 콘트롤안에 넣기</span></span>
<span class="line"><span>http://www.devexpress.com/example=T186700</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl LayoutVIew</span></span>
<span class="line"><span>### Chage BackColor using format conditions https://www.devexpress.com/Support/Center/Question/Details/Q449138/layout-view-change-back-color-of-a-cell</span></span>
<span class="line"><span>### devexpress layoutview LayoutViewCard  https://www.devexpress.com/Support/Center/Question/Details/T319514/hide-layout-view-column-in-the-cards</span></span>
<span class="line"><span>1번 LayoutViewColumn layoutViewColumn = new LayoutViewColumn();</span></span>
<span class="line"><span>    layoutViewColumn.LayoutViewField.TextVisible = false;</span></span>
<span class="line"><span>2번    layoutView.Columns[&quot;IMAGE&quot;].LayoutViewField.TextVisible = false;</span></span>
<span class="line"><span>## 셀 복사</span></span>
<span class="line"><span>GridControl grid = sender as GridControl;</span></span>
<span class="line"><span>if (grid != null)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    GridView view = grid.FocusedView as GridView;</span></span>
<span class="line"><span>    if (view != null)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Clipboard.SetText(view.GetFocusedDisplayText());</span></span>
<span class="line"><span>        e.Handled = true;</span></span>
<span class="line"><span>        //view.CopyToClipboard();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>GridView view = sender as GridView;</span></span>
<span class="line"><span>if (e.Control &amp;&amp; e.KeyCode == Keys.C)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (view.GetRowCellValue(view.FocusedRowHandle, view.FocusedColumn) != null &amp;&amp; view.GetRowCellValue(view.FocusedRowHandle, view.FocusedColumn).ToString() != String.Empty)</span></span>
<span class="line"><span>        Clipboard.SetText(view.GetRowCellValue(view.FocusedRowHandle, view.FocusedColumn).ToString());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    e.Handled = true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## WidgetView</span></span>
<span class="line"><span>### devexpress widgetview change control https://www.devexpress.com/Support/Center/Question/Details/T121157/change-widgetview-document-s-control</span></span>
<span class="line"><span>### devexpress document add control https://www.devexpress.com/Support/Center/Question/Details/T262503/widgetview-document-how-to-add-a-control</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GaugeControl ignis devexpress winforms gauge control ignis</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GridControl TileView Add Image https://stackoverflow.com/questions/39242119/devexpress-xtragrid-tileview</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## SplitContainerControl devexpress splitcontainercontrol arrow</span></span>
<span class="line"><span>https://documentation.devexpress.com/WindowsForms/DevExpress.XtraEditors.SplitContainerControl.CollapsePanel.property</span></span>
<span class="line"><span>this.splitContainerControl1.CollapsePanel = DevExpress.XtraEditors.SplitCollapsePanel.Panel1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## FlyoutPanel location change</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/T346612/flyout-panel-location-and-position</span></span>
<span class="line"><span>this.flyoutPanel1.Options.AnchorType = DevExpress.Utils.Win.PopupToolWindowAnchor.Right;</span></span>
<span class="line"><span>this.flyoutPanel2.OptionsBeakPanel.BeakLocation = DevExpress.Utils.BeakPanelBeakLocation.Left;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## PictureEdit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Set Fit Image in PictureEdit</span></span>
<span class="line"><span>https://www.devexpress.com/Support/Center/Question/Details/Q413142/set-fit-image-in-pictureedit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.pictureEdit1.Properties.SizeMode = DevExpress.XtraEditors.Controls.PictureSizeMode.Stretch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## CardView</span></span>
<span class="line"><span>CardView.OptionsView.ShowHorzScrollBar property</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## PDFViewer</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 이쁜블로그이미지</span></span>
<span class="line"><span>https://community.devexpress.com/Blogs/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ftp 업로드</span></span>
<span class="line"><span>https://null486.tistory.com/1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## pdf c# webbrowser redirect page download</span></span>
<span class="line"><span>https://www.codeproject.com/Questions/120365/Downloading-files-without-direct-address-through-C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.pdfViewer1.DetachStreamAfterLoadComplete = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>string pdfUrl = &quot;&quot;;</span></span>
<span class="line"><span>//string requestUri = &quot;&quot;; ;</span></span>
<span class="line"><span>//string responseData;</span></span>
<span class="line"><span>//using (var client = new WebClient())</span></span>
<span class="line"><span>//{</span></span>
<span class="line"><span>//    responseData = client.DownloadString(requestUri);</span></span>
<span class="line"><span>//    MessageBox.Show(responseData);</span></span>
<span class="line"><span>//}</span></span>
<span class="line"><span>using (WebClient client = new WebClient())</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    string html = client.DownloadString(pdfUrl);</span></span>
<span class="line"><span>    client.UseDefaultCredentials = true;</span></span>
<span class="line"><span>    //client.Credentials = new NetworkCredential(&quot;test&quot;, &quot;test&quot;);</span></span>
<span class="line"><span>    //client.DownloadDataTaskAsync(pdfUrl);</span></span>
<span class="line"><span>    client.DownloadFileAsync(new Uri(pdfUrl), &quot;Test.pdf&quot;);</span></span>
<span class="line"><span>    //client.DownloadDataCompleted += Client_DownloadDataCompleted;</span></span>
<span class="line"><span>    client.DownloadFileCompleted += Client_DownloadFileCompleted;</span></span>
<span class="line"><span>    //using (MemoryStream ms = new MemoryStream(fileBytes))</span></span>
<span class="line"><span>    //    pdfViewer1.LoadDocument(ms);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//pdfdocumentprocessor documentprocessor = new pdfdocumentprocessor();</span></span>
<span class="line"><span>//using (webclient client = new webclient())</span></span>
<span class="line"><span>//{</span></span>
<span class="line"><span>//</span><span>    //client.usedefaultcredentials = true;</span></span>
<span class="line"><span>//    byte[] filebytes = client.downloaddata(pdfurl);</span></span>
<span class="line"><span>//    using (memorystream ms = new memorystream(filebytes))</span></span>
<span class="line"><span>//    {</span></span>
<span class="line"><span>//        pdfviewer1.loaddocument(ms);</span></span>
<span class="line"><span>//        documentprocessor.loaddocument(ms);</span></span>
<span class="line"><span>//    }</span></span>
<span class="line"><span>//}</span></span>
<span class="line"><span>////Process.Start(pdfUrl);</span></span>
<span class="line"><span>PdfDocumentProcessor documentProcessor = new PdfDocumentProcessor();</span></span>
<span class="line"><span>using (FileStream stream = new FileStream(pdfUrl, FileMode.Open, FileAccess.Read))</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    byte[] pdfFileBytes = new byte[stream.Length];</span></span>
<span class="line"><span>    stream.Read(pdfFileBytes, 0, (int)stream.Length);</span></span>
<span class="line"><span>    documentProcessor.LoadDocument(stream);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>catch (Exception ex)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>MessageBox.Show(ex.Message);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)]))}const w=s(l,[["render",t]]);export{m as __pageData,w as default};
