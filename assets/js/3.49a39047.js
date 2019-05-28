(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(e,t,r){e.exports=r.p+"assets/img/git-merge.d37b971b.png"},168:function(e,t,r){e.exports=r.p+"assets/img/git-rebase.1541be06.svg"},173:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"git-merge-vs-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-vs-rebase","aria-hidden":"true"}},[this._v("#")]),this._v(" Git merge vs rebase")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Git merge (3-way merge)")]),e._v(" "),s("th",[e._v("Git rebase (rebase then fast forward merge)")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("img",{attrs:{src:r(167),alt:"Git merge"}})]),e._v(" "),s("td",[s("img",{attrs:{src:r(168),alt:"Git rebase"}})])]),e._v(" "),s("tr",[s("td",[e._v("Non-destructive, existing branches are not modified")]),e._v(" "),s("td",[e._v("Destructive, rewrites history by creating entirely new commits. "),s("br"),e._v(" "),s("strong",[e._v("TIPS:")]),e._v(" Never use rebase on public branch "),s("br"),s("br"),e._v(" Merge conflicts may become more frequent, especially when the master branch has many new commits "),s("br"),e._v(" "),s("strong",[e._v("TIPS:")]),e._v(" Rebase frequently")])]),e._v(" "),s("tr",[s("td",[e._v("Extraneuous merge commits can clutter history. "),s("br"),e._v(" No extraneuous merge commits for fast forward merge")]),e._v(" "),s("td",[e._v("No extraneuous merge commits "),s("br"),e._v(" "),s("strong",[e._v("TIPS:")]),e._v(" Use rebase interactive to clean up commits as required")])]),e._v(" "),s("tr",[s("td",[e._v("Non-linear project history, multiple pathways")]),e._v(" "),s("td",[e._v("Linear project history, single pathway. Straight-forward navigation with "),s("code",[e._v("git bisect")]),e._v(", "),s("code",[e._v("git log")]),e._v(", and "),s("code",[e._v("gitk")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pull-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" Pull requests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Avoid using git rebase after creating the pull request. As other developers will be looking at your commits, that branch is considered a public branch. [3]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Rewriting its history will make it impossible for Git and your teammates to track any follow-up commits added to the feature. [3]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("TIPS:")]),this._v(" After the pull request is approved, use rebase interactive to clean up/squash commits. This results with a clean and perfectly linear history when merged to the master branch")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],i=r(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Remember, never rebase on public branch")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/using-branches/git-merge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Merge | Atlassian Git Tutorial"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Rebase | Atlassian Git Tutorial"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/merging-vs-rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Merging vs. Rebasing | Atlassian Git Tutorial"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://bitbucket.org/blog/git-squash-commits-merging-bitbucket?utm_source=newsletter-email&utm_medium=email&utm_campaign=May-BB-Digest-Version-2_EML-4576&jobid=104109806&subid=1280165170",target:"_blank",rel:"noopener noreferrer"}},[e._v("Squash commits when merging a Git branch with Bitbucket - Bitbucket"),r("OutboundLink")],1)])])])},s,!1,null,null,null);t.default=a.exports}}]);