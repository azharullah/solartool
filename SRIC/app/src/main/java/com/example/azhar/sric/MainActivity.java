package com.example.azhar.sric;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Remove title bar
        //this.requestWindowFeature(Window.FEATURE_NO_TITLE);

        mWebView = (WebView) findViewById(R.id.activity_main_wv);

        //enable javascript
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        //force all links to open in webview only
        mWebView.setWebViewClient(new WebViewClient());

        //Enable zoom controlls in webview
//        mWebView.getSettings().setBuiltInZoomControls(true);

        //Set initial zoom settings
        mWebView.getSettings().setUseWideViewPort(true);
        mWebView.getSettings().setLoadWithOverviewMode(true);
//        mWebView.setInitialScale(1);

        //Tweaks for javascript alert
        mWebView.setWebViewClient(new WebViewClient());
        mWebView.setWebChromeClient(new WebChromeClient());

        mWebView.loadUrl("file:///android_asset/index.html");

        // Prevent overscrolling
        mWebView.setOverScrollMode(View.OVER_SCROLL_NEVER);

    }
}
