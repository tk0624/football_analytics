

def generate_scouting_url(player_name, mapping_csv_path, league_id='12524'):
    """
    
    """
    # mapping.csvを読み込む
    df = pd.read_csv(mapping_csv_path, encoding='latin1')

    # PlayerFBref列を小文字に変換して一致する行を検索
    df['PlayerFBref_lower'] = df['PlayerFBref'].str.lower()
    player_name_lower = player_name.lower()

    # 一致する行を取得
    matched_row = df[df['PlayerFBref_lower'] == player_name_lower]

    if matched_row.empty:
        print(f"Player '{player_name}' not found in mapping.csv.")
        return None

    # UrlFBrefからplayer_idとplayer_slugを抽出
    url = matched_row.iloc[0]['UrlFBref']
    try:
        parts = url.strip().split('/')
        player_id = parts[5]
        player_slug = parts[6]
    except IndexError:
        print(f"Invalid UrlFBref format for player '{player_name}'.")
        return None

    # スカウティングレポートのURLを生成
    scouting_url = f"https://fbref.com/en/players/{player_id}/scout/{league_id}/{player_slug}-Scouting-Report"
    return scouting_url