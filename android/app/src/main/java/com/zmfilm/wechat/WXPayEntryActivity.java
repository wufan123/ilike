package com.zmfilm.wechat;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.theweflex.react.WeChatModule;

public class WXPayEntryActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatModule.handleIntent(getIntent());
        finish();
    }
}
